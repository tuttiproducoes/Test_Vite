import { useState, useEffect } from "react";
import "./FormClient.css";

const FormClient = () => {
    const estadosBrasileiros = {
        "Santa Catarina": {
            "Florianópolis": {
                "Centro": ["Avenida Principal", "Rua Comercial", "Rua Residencial", "Rua Histórica"],
                "Trindade": ["Avenida Universitária", "Rua de Pedestres", "Rua de Serviços", "Travessa Estudantil"],
                "Lagoa da Conceição": ["Rua Turística", "Avenida Beira-Mar", "Rua de Artesanato", "Travessa Gastronômica"]
            },
            "Joinville": {
                "Centro": ["Avenida Comercial", "Rua de Serviços", "Rua Histórica", "Travessa Cultural"],
                "Bucarein": ["Rua Residencial", "Avenida Arborizada", "Travessa Comunitária", "Rua de Bairro"]
            }
        },
        "São Paulo": {
            "São Paulo": {
                "Moema": ["Avenida Luxuosa", "Rua de Alto Padrão", "Travessa Exclusiva", "Alameda Residencial"],
                "Liberdade": ["Rua Cultural", "Avenida Oriental", "Travessa Gastronômica", "Rua Turística"]
            }
        }
    };

    const [estados, setEstados] = useState<string[]>([]);
    const [cidades, setCidades] = useState<string[]>([]);
    const [bairros, setBairros] = useState<string[]>([]);
    const [categoriasRua, setCategoriasRua] = useState<string[]>([]);
    const [quantidadeConvidados, setQuantidadeConvidados] = useState<string>("");
    const [estadoSelecionado, setEstadoSelecionado] = useState<string>("");
    const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("");
    const [bairroSelecionado, setBairroSelecionado] = useState<string>("");

    useEffect(() => {
        setEstados(Object.keys(estadosBrasileiros));
    }, []);

    useEffect(() => {
        if (estadoSelecionado) {
            setCidades(Object.keys(estadosBrasileiros[estadoSelecionado]));
            setCidadeSelecionada("");
            setBairroSelecionado("");
            setCategoriasRua([]);
        }
    }, [estadoSelecionado]);

    useEffect(() => {
        if (estadoSelecionado && cidadeSelecionada) {
            setBairros(Object.keys(estadosBrasileiros[estadoSelecionado][cidadeSelecionada]));
            setBairroSelecionado("");
            setCategoriasRua([]);
        }
    }, [cidadeSelecionada]);

    useEffect(() => {
        if (estadoSelecionado && cidadeSelecionada && bairroSelecionado) {
            setCategoriasRua(estadosBrasileiros[estadoSelecionado][cidadeSelecionada][bairroSelecionado]);
        }
    }, [bairroSelecionado]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!quantidadeConvidados || !estadoSelecionado || !cidadeSelecionada || !bairroSelecionado || categoriasRua.length === 0) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        
        localStorage.setItem("quantidadeConvidados", quantidadeConvidados);
        alert("Endereço cadastrado com sucesso!");
    };

    return (
        <>
            <section className="cabeçalho-inicial-mobile">
                <div className="container">
                    <h1>Fale sobre o seu evento</h1>
                </div>
            </section>
            <main className="container">
                <form onSubmit={handleSubmit} className="endereco-form">
                    <div className="form-group">
                        <label htmlFor="quantidadeConvidados">Quantidade de Convidados:</label>
                        <input 
                            type="number" 
                            id="quantidadeConvidados" 
                            min="1" 
                            required
                            value={quantidadeConvidados}
                            onChange={(e) => setQuantidadeConvidados(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="estado">Estado:</label>
                        <select 
                            id="estado" 
                            required
                            value={estadoSelecionado}
                            onChange={(e) => setEstadoSelecionado(e.target.value)}
                        >
                            <option value="">Selecione um estado</option>
                            {estados.map(estado => (
                                <option key={estado} value={estado}>{estado}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cidade">Cidade:</label>
                        <select 
                            id="cidade" 
                            required 
                            disabled={!estadoSelecionado}
                            value={cidadeSelecionada}
                            onChange={(e) => setCidadeSelecionada(e.target.value)}
                        >
                            <option value="">{estadoSelecionado ? "Selecione uma cidade" : "Selecione um estado primeiro"}</option>
                            {cidades.map(cidade => (
                                <option key={cidade} value={cidade}>{cidade}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bairro">Bairro:</label>
                        <select 
                            id="bairro" 
                            required 
                            disabled={!cidadeSelecionada}
                            value={bairroSelecionado}
                            onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                            <option value="">{cidadeSelecionada ? "Selecione um bairro" : "Selecione uma cidade primeiro"}</option>
                            {bairros.map(bairro => (
                                <option key={bairro} value={bairro}>{bairro}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="categoriaRua">Rua:</label>
                        <select 
                            id="categoriaRua" 
                            required 
                            disabled={!bairroSelecionado}
                        >
                            <option value="">{bairroSelecionado ? "Selecione uma categoria" : "Selecione um bairro primeiro"}</option>
                            {categoriasRua.map(categoria => (
                                <option key={categoria} value={categoria}>{categoria}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="numero">Número:</label>
                        <input type="text" id="numero" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="complemento">Complemento (opcional):</label>
                        <input type="text" id="complemento" />
                    </div>

                    <button type="submit">Salvar Endereço</button>
                </form>
            </main>
        </>
    );
};

export default FormClient;
