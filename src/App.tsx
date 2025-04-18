import { useState } from 'react';
import './global.css';
import FormClient from './components/FormClient';
import FormProduto from './components/FormProduto';
import ItensPage from './components/ItensPage';
import Orcamento from './components/Orcamento';

function App() {
  const [currentPage, setCurrentPage] = useState<'client' | 'product' | 'items' | 'budget'>('client');

  return (
    <div className="App">
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        zIndex: 1000, 
        display: 'flex', 
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
      }}>
        <button 
          onClick={() => setCurrentPage('client')}
          style={{ 
            padding: '10px', 
            background: currentPage === 'client' ? '#333' : '#000', 
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Formulário de Cliente
        </button>
        <button 
          onClick={() => setCurrentPage('product')}
          style={{ 
            padding: '10px', 
            background: currentPage === 'product' ? '#333' : '#000', 
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cadastro de Produtos
        </button>
        <button 
          onClick={() => setCurrentPage('items')}
          style={{ 
            padding: '10px', 
            background: currentPage === 'items' ? '#333' : '#000', 
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cardápio de Produtos
        </button>
        <button 
          onClick={() => setCurrentPage('budget')}
          style={{ 
            padding: '10px', 
            background: currentPage === 'budget' ? '#333' : '#000', 
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Orçamento
        </button>
      </div>
      {currentPage === 'client' ? <FormClient /> : 
       currentPage === 'product' ? <FormProduto /> : 
       currentPage === 'items' ? <ItensPage /> :
       <Orcamento />}
    </div>
  );
}

export default App;