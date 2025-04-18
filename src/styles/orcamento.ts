import styled from 'styled-components';

export const ResumoOrcamento = styled.section`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
`;

export const ItemOrcamento = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    flex: 1;
`;

export const ItemImagem = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
`;

export const ItemNome = styled.span`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ItemDescricao = styled.span`
    font-size: 12px;
    color: #666;
`;

export const ItemQuantidade = styled.span`
    font-size: 12px;
    color: #666;
    display: block;
`;

export const ItemPreco = styled.span`
    font-weight: bold;
    color: #000000;
`;

export const SemItens = styled.p`
    text-align: center;
    color: #000000;
    padding: 20px;
`;

export const ItemActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
`;

export const TotalOrcamento = styled.div`
    margin-top: 20px;
    padding-top: 10px;
    border-top: 2px solid #000000;

    span {
        color: #000000;
        font-weight: bold;
    }
`;

export const IconeLixeira = styled.svg`
    width: 20px;
    height: 20px;
    cursor: pointer;
    stroke: #717171;
    transition: all 0.3s ease;

    &:hover {
        stroke: #fd0015;
    }
`;