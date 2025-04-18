import { useEffect, useState } from "react";
import "./OrcamentoPage.css";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
  observacao: string;
  favorito: boolean;
  itensReceita: {
    item: string;
    quantidade: string;
  }[];
}

const OrcamentoPage = () => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);
  const [quantidadeConvidados, setQuantidadeConvidados] = useState(1);

  useEffect(() => {
    const carregarDados = () => {
      const favs = JSON.parse(localStorage.getItem('favoritos') || '[]');
      const qtd = localStorage.getItem('quantidadeConvidados') || 1;
      setFavoritos(favs);
      setQuantidadeConvidados(Number(qtd));
    };
    carregarDados();
  }, []);

  const removerItemOrcamento = (id: number) => {
    const novosFavoritos = favoritos.filter(f => f.id !== id);
    setFavoritos(novosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
  };

  return (
    <>
      <section className="cabeçalho-inicial-mobile">
        <div className="container">
          <h1>Orçamento</h1>
        </div>
      </section>

      <main className="container">
        <section className="resumo-orcamento">
          <h2>Itens Selecionados</h2>
          <div id="itens-orcamento">
            {favoritos.length === 0 ? (
              <p className="sem-itens">Nenhum item selecionado</p>
            ) : (
              favoritos.map(produto => {
                const itemTotal = produto.preco * quantidadeConvidados;
                return (
                  <div key={produto.id} className="item-orcamento">
                    <div className="item-info">
                      <img src={produto.imagem} alt={produto.nome} className="item-imagem" />
                      <div>
                        <span className="item-nome">{produto.nome}</span>
                        <span className="item-descricao">{produto.categoria}</span>
                        <span className="item-quantidade">Quantidade: {quantidadeConvidados}</span>
                      </div>
                    </div>
                    <div className="item-actions">
                      <span className="item-preco">R$ {itemTotal.toFixed(2)}</span>
                      <a href="#" className="lixeira-btn" data-id={produto.id} onClick={(e) => {
                        e.preventDefault();
                        removerItemOrcamento(produto.id);
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icone-lixeira">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="total-orcamento">
            <h4>Total: <span id="total-valor">
              R$ {favoritos.reduce((total, produto) => total + (produto.preco * quantidadeConvidados), 0).toFixed(2)}
            </span></h4>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrcamentoPage;