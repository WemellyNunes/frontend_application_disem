export default function ServiceError() {

    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-20">
                <img src="./503image.png" alt="serviço indisponivel" width={400}/>
            </div>

            <div className="pt-5">
                <button onClick={() => navigate(-1)}  className="flex items-center justify-center h-11 px-8 border rounded-full bg-primary-light hover:bg-green-800 text-white">
                    Voltar
                </button>
            </div>

        </div>
        </>
    )
};