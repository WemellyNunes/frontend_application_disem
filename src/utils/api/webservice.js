import axios from 'axios';

const webservice = axios.create({
  baseURL: 'http://localhost:8080/api/webservice',
});

export const getToken = async () => {
  try {
    const response = await webservice.get();
    sessionStorage.setItem("authToken", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao gerar token", error);
    throw error;
  }
};

export const buscarUsuario = async (login) => {
  try {
    const token = sessionStorage.getItem("authToken");
    const response = await webservice.get("/buscar-usuario", {
      params: { login, token },
    });
    return response.data;
  } catch (error) {
    console.error("erro ao buscar usuario", error);
    throw error;
  }
};

export const listarUsuarioPorId = async (idUsuario) => {
  try {
      const response = await webservice.get(`/buscar-usuario-bd/${idUsuario}`);
      return response.data || null;
  } catch (error) {
      console.error("Erro ao buscar usuário no banco", error);
      throw error;
  }
};

export const login = async (login, senha) => {
  try {
    const token = sessionStorage.getItem("authToken");
    const response = await webservice.post("/login", null, {
      params: { login, senha, token },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    return response.data;
  } catch (error) {
    console.error("erro ao acessar o sistema", error);
    throw error;
  }
};

export const listarUsuarios = async () => {
  try {
      const response = await webservice.get("/usuarios");
      return response.data;
  } catch (error) {
      console.error("Erro ao listar usuários", error);
      throw error;
  }
};

export const salvarUsuario = async (usuario) => {
  try {
      const response = await webservice.post("/salvar-usuario", usuario);
      return response.data;
  } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      throw error;
  }
};


export const atualizarUsuario = async (id, usuario) => {
  try {
    const response = await webservice.put(`/atualizar-usuário/${id}`, usuario);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

export const removerUsuario = async (id) => {
  try {
    const response = await webservice.delete(`/remover-usuário/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao remover usuário:", error);
    throw error;
  }
};

export const buscarPermissoesUsuario = async () => {
  try {
      const response = await axios.get("/api/permissoes", { withCredentials: true });
      return response.data.permissoes || [];
  } catch (error) {
      console.error("Erro ao buscar permissões:", error);
      return [];
  }
};




export default webservice;