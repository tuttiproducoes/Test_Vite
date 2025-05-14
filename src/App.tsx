import { useState } from 'react';
import './global.css';
import FormClient from './components/FormClient';
import CadastroProduto from "./components/FormProduto";
import ItensPage from './components/ItensPage';
import OrcamentoPage from './components/OrcamentoPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'client' | 'product' | 'items' | 'budget'>('client');

  // Ícones em SVG diretamente no código
  const icons = {
    book: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
        <path d="M240-80q-50 0-85-35t-35-85v-560q0-51 35-85.5t85-34.5h560v200H240v560h560v80H240Zm0-640h560v-80H240v80Zm80 240v-80h400v80H320Zm0 160v-80h280v80H320Zm-80 240v-560 560Z"/>
      </svg>
    ),
    add: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
      </svg>
    ),
    list: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
        <path d="M300-360q-25 0-42.5-17.5T240-420q0-25 17.5-42.5T300-480q25 0 42.5 17.5T360-420q0 25-17.5 42.5T300-360Zm0-160q-25 0-42.5-17.5T240-580q0-25 17.5-42.5T300-640q25 0 42.5 17.5T360-580q0 25-17.5 42.5T300-520Zm0-160q-25 0-42.5-17.5T240-740q0-25 17.5-42.5T300-800q25 0 42.5 17.5T360-740q0 25-17.5 42.5T300-680Zm120 320v-80h360v80H420Zm0-160v-80h360v80H420Zm0-160v-80h360v80H420ZM240-160q-33 0-56.5-23.5T160-240v-480q0-33 23.5-56.5T240-800h480q33 0 56.5 23.5T800-720v480q0 33-23.5 56.5T720-160H240Zm0-80h480v-480H240v480Zm0 0v-480 480Z"/>
      </svg>
    ),
    note: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
        <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
      </svg>
    )
  };

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
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Formulário de Cliente"
        >
          {icons.book}
        </button>
        <button 
          onClick={() => setCurrentPage('product')}
          style={{ 
            padding: '10px', 
            background: currentPage === 'product' ? '#333' : '#000', 
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Cadastro de Produtos"
        >
          {icons.add}
        </button>
        <button 
          onClick={() => setCurrentPage('items')}
          style={{ 
            padding: '10px', 
            background: currentPage === 'items' ? '#333' : '#000', 
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Itens"
        >
          {icons.list}
        </button>
        <button 
          onClick={() => setCurrentPage('budget')}
          style={{ 
            padding: '10px', 
            background: currentPage === 'budget' ? '#333' : '#000', 
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Orçamento"
        >
          {icons.note}
        </button>
      </div>
      
      {currentPage === 'client' && <FormClient />}
      {currentPage === 'product' && <CadastroProduto />}
      {currentPage === 'items' && <ItensPage />}
      {currentPage === 'budget' && <OrcamentoPage />}
    </div>
  );
}

export default App;