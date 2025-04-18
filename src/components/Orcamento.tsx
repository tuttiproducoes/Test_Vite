import React, { useEffect, useState } from 'react';
import { 
  ResumoOrcamento, 
  ItemOrcamento, 
  ItemInfo, 
  ItemImagem, 
  ItemNome, 
  ItemDescricao, 
  ItemQuantidade, 
  ItemPreco, 
  SemItens, 
  ItemActions, 
  TotalOrcamento,
  IconeLixeira
} from '../styles/orcamento';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
}

const Orcamento: React.FC = () => {
    const [favoritos, setFavoritos] = useState<Produto[]>([]);
    const [quantidadeConvidados, setQuantidadeConvidados] = useState<number>(1);

    useEffect(() => {
        const carregarDados = () => {
            const favs = JSON.parse(localStorage.getItem('favoritos') || '[]') as Produto[];
            const qtd = parseInt(localStorage.getItem('quantidadeConvidados') || '1');
            setFavoritos(favs);
            setQuantidadeConvidados(qtd);
        };
        carregarDados();
    }, []);

    const removerItemOrcamento = (id: number) => {
        const novosFavoritos = favoritos.filter(f => f.id !== id);
        setFavoritos(novosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
        
        const coracao = document.querySelector(`.favorito-btn[data-id="${id}"] .icone-coração`);
        if (coracao) {
            coracao.setAttribute('fill', 'none');
            coracao.setAttribute('stroke', 'currentColor');
            coracao.classList.remove('favoritado');
        }
    };

    const calcularTotal = (): string => {
        const total = favoritos.reduce((acc, produto) => {
            return acc + (produto.preco * quantidadeConvidados);
        }, 0);
        return total.toFixed(2);
    };

    return (
        <>
            <section className="cabeçalho-inicial-mobile">
                <div className="container">
                    <h1>Orçamento</h1>
                </div>
            </section>
            <main className="container">
                <ResumoOrcamento>
                    <h2>Itens Selecionados</h2>
                    {favoritos.length === 0 ? (
                        <SemItens>Nenhum item selecionado</SemItens>
                    ) : (
                        <>
                            {favoritos.map(produto => {
                                const itemTotal = (produto.preco * quantidadeConvidados).toFixed(2);
                                return (
                                    <ItemOrcamento key={produto.id}>
                                        <ItemInfo>
                                            <ItemImagem src={produto.imagem} alt={produto.nome} />
                                            <div>
                                                <ItemNome>{produto.nome}</ItemNome>
                                                <ItemDescricao>{produto.categoria}</ItemDescricao>
                                                <ItemQuantidade>Quantidade: {quantidadeConvidados}</ItemQuantidade>
                                            </div>
                                        </ItemInfo>
                                        <ItemActions>
                                            <ItemPreco>R$ {itemTotal}</ItemPreco>
                                            <button 
                                                className="lixeira-btn" 
                                                onClick={() => removerItemOrcamento(produto.id)}
                                            >
                                                <IconeLixeira 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    strokeWidth="2" 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </IconeLixeira>
                                            </button>
                                        </ItemActions>
                                    </ItemOrcamento>
                                );
                            })}
                            <TotalOrcamento>
                                <h4>Total: <span>R$ {calcularTotal()}</span></h4>
                            </TotalOrcamento>
                        </>
                    )}
                </ResumoOrcamento>
            </main>
        </>
    );
};

export default Orcamento;