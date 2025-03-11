import { useEffect, useState } from "react";
import {FaTrash } from "react-icons/fa";
import PageTitle from "../../components/title";
import SearchInput from "../../components/inputs/searchInput";
import { listarUsuarios, atualizarUsuario, removerUsuario } from "../../utils/api/webservice";
import MessageBox from "../../components/box/message";
import ConfirmationModal from "../../components/modal/confirmation";

export default function UserPage() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [userToChangeRole, setUserToChangeRole] = useState(null);
    const [newRole, setNewRole] = useState(null);

    const papelOptions = [
        { value: 1, label: "Admin" },
        { value: 2, label: "Colaborador I" },
        { value: 3, label: "Colaborador II" },
        { value: 4, label: "Usuário" }
    ];

    const userSession = JSON.parse(sessionStorage.getItem("userSession"));
    const idUsuarioSessao = userSession?.id;
    const papelUsuarioSessao = userSession?.papel;
    
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(false);

            try {
                const userData = await listarUsuarios();
                setUsers(userData);
                setFilteredUsers(userData);
            } catch (err) {
                console.error("Erro ao carregar usuários:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const confirmRoleChange = (id, novoPapelTexto) => {
        if (id === idUsuarioSessao) {
            alert("Você não pode alterar o seu próprio papel.");
            return;
        }

        if (
            papelUsuarioSessao !== 1 && 
            papelOptions.find(option => option.label === novoPapelTexto)?.value === 1
        ) {
            alert("Somente um administrador pode alterar o papel de outro administrador.");
            return;
        }

        setUserToChangeRole(users.find(user => user.id === id));
        setNewRole(novoPapelTexto);
        setShowChangeModal(true);
    };
    
    const handleConfirmRoleChange = async () => {
        if (userToChangeRole && newRole) {
            await handleRoleChange(userToChangeRole.id, newRole);
            setShowChangeModal(false);
            setUserToChangeRole(null);
            setNewRole(null);
        }
    };

    const handleRoleChange = async (id, novoPapelTexto) => {
        try {
            const novoPapelValor = papelOptions.find(option => option.label === novoPapelTexto)?.value;
            if (novoPapelValor === undefined) {
                console.error("Papel inválido selecionado");
                return;
            }

            await atualizarUsuario(id, { papel: novoPapelValor });

            setUsers(prevUsers =>
                prevUsers.map(user => user.id === id ? { ...user, papel: novoPapelValor } : user)
            );
            setFilteredUsers(prevUsers =>
                prevUsers.map(user => user.id === id ? { ...user, papel: novoPapelValor } : user)
            );

            if (id === idUsuarioSessao) {
                const updatedSession = { ...userSession, papel: novoPapelValor };
                sessionStorage.setItem("userSession", JSON.stringify(updatedSession));
            }

            setSuccessMessage("Papel atualizado com sucesso!");
            setTimeout(() => setSuccessMessage(""), 2000);
        } catch (error) {
            console.error("Erro ao atualizar papel do usuário:", error);
            setError(true);
        }
    };


    const confirmDeleteUser = (user) => {
        if (user.id === idUsuarioSessao) {
            alert("Você não pode excluir a si mesmo.");
            return;
        }

        if (user.papel === 1 && papelUsuarioSessao !== 1) {
            alert("Somente um administrador pode excluir outro administrador.");
            return;
        }

        setUserToDelete(user);
        setShowDeleteModal(true);
    };

    const handleDeleteUser = async () => {
        if (!userToDelete) return;

        try {
            await removerUsuario(userToDelete.id);
            setUsers(users.filter(user => user.id !== userToDelete.id));
            setFilteredUsers(filteredUsers.filter(user => user.id !== userToDelete.id));
            setSuccessMessage("Usuário removido com sucesso!");
            setTimeout(() => setSuccessMessage(""), 1500);
            setShowDeleteModal(false);
            setUserToDelete(null);
        } catch (error) {
            console.error("Erro ao remover usuário:", error);
            setError(true);
        }
    };

    const filterData = (term) => {
        if (!term) {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) =>
                user.nome.toLowerCase().includes(term.toLowerCase()) ||
                user.email.toLowerCase().includes(term.toLowerCase()) 
            );
            setFilteredUsers(filtered);
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        filterData(term); 
    };

    return (
        <>
            {error && (
                <MessageBox
                    type="error"
                    title="Erro ao carregar usuários."
                    message="Não foi possível carregar os usuários no momento."
                    onClose={() => setError(false)}
                />
            )}
            {successMessage && (
                <MessageBox
                    type="success"
                    title="Sucesso!"
                    message={successMessage}
                    onClose={() => setSuccessMessage("")}
                />
            )}

            <PageTitle text="Usuários do sistema" backgroundColor="bg-white" textColor="text-primary-dark" />

            <div className="flex items-center w-full gap-x-2 px-2 md:px-6 pt-3 mb-3">
                <SearchInput placeholder="Buscar usuário..." onSearch={handleSearch} />
            </div>

            <div className="flex flex-col py-4 rounded-md bg-white px-2 md:px-6">
                <div className="flex justify-between items-center mb-1">
                    <p className="text-sm md:text-base font-medium text-gray-800 mt-3 mb-6">Lista de usuários</p>
                    <p className="text-sm text-gray-400">Total de usuários: {filteredUsers.length}</p>
                </div>

                <div className="flex justify-between text-sm px-2 font-medium text-gray-700 border-b  border-gray-300 py-2">
                    <p className="flex flex-col md:w-1/12">ID</p>
                    <p className="flex flex-col md:w-1/2">Nome</p>
                    <p className="flex flex-col md:w-1/2">Email</p>
                    <p className="flex flex-col md:w-1/3">Papel do usuário</p>
                    <p className="flex ">Ações</p>
                </div>

                {loading ? (
                    <p className="text-center text-gray-500 py-4">Carregando usuários...</p>
                ) : filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div key={user.id} className="flex flex-col md:items-center md:flex-row py-2 px-2 text-primary-dark text-sm border-b hover:bg-gray-50">
                            <div className="md:w-1/12">{user.id}</div>
                            <div className="md:w-1/2">{user.nome}</div>
                            <div className="md:w-1/2 uppercase">{user.email}</div>
                            <div className="md:w-1/3 uppercase">
                                <select
                                    value={papelOptions.find(option => option.value === user.papel)?.label}
                                    onChange={(e) => confirmRoleChange(user.id, e.target.value)}
                                    className="rounded py-1.5 uppercase hover:border bg-white focus:ring-1 focus:ring-primary-light cursor-pointer font-medium"
                                >
                                    {papelOptions.map(option => (
                                        <option key={option.value} value={option.label}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            <div className="flex md:mr-1">
                                <button className="text-gray-700 bg-gray-100 p-2 rounded-full hover:text-red-500" 
                                onClick={() => confirmDeleteUser(user)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-4">Nenhum usuário encontrado</p>
                )}
            </div>
            {showDeleteModal && (
                <ConfirmationModal
                    title="Remover usuário"
                    message={`Tem certeza que deseja remover o usuário ${userToDelete?.nome}?`}
                    onConfirm={handleDeleteUser}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}

            {showChangeModal && (
                <ConfirmationModal
                    title="Atualizar papel do usuário"
                    message={`Tem certeza que deseja alterar o opapel do usuário ${userToDelete?.nome}?`}
                    onConfirm={handleConfirmRoleChange}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}
        </>
    );
}
