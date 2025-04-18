import { useState } from 'react';
import './global.css';
import FormClient from './components/FormClient';
import FormProduto from './components/FormProduto';
import ItensPage from './components/ItensPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'client' | 'product' | 'items'>('client');

  return (
    <div className="App">
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => setCurrentPage('client')}
          style={{ padding: '10px', background: currentPage === 'client' ? '#333' : '#000', color: '#fff' }}
        >
          Formulário de Cliente
        </button>
        <button 
          onClick={() => setCurrentPage('product')}
          style={{ padding: '10px', background: currentPage === 'product' ? '#333' : '#000', color: '#fff' }}
        >
          Cadastro de Produtos
        </button>
        <button 
          onClick={() => setCurrentPage('items')}
          style={{ padding: '10px', background: currentPage === 'items' ? '#333' : '#000', color: '#fff' }}
        >
          Cardápio de Produtos
        </button>
      </div>
      {currentPage === 'client' ? <FormClient /> : 
       currentPage === 'product' ? <FormProduto /> : 
       <ItensPage />}
    </div>
  );
}

export default App;