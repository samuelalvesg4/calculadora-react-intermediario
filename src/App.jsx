import { useState } from 'react';
import './Calculadora.css';

function App() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const adicionarInput = (valor) => {
    if (valor === '.' && input.endsWith('.')) return;
    setInput((prev) => prev + valor);
  };

  const limpar = () => {
    setInput('');
    setResultado('');
  };

  const calcular = () => {
    try {
      const resultadoCalculado = eval(input.replace('%', '/100'));
      setResultado(resultadoCalculado);
    } catch {
      setResultado('Erro');
    }
  };

  const inverterSinal = () => {
    if (input) {
      const invertido = String(-parseFloat(input));
      setInput(invertido);
    }
  };

  return (
    <div className="calculadora">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="resultado">{resultado}</div>
      </div>
      <div className="botoes">
        <button onClick={limpar}>C</button>
        <button onClick={inverterSinal}>+/-</button>
        <button onClick={() => adicionarInput('%')}>%</button>
        <button onClick={() => adicionarInput('/')}>÷</button>

        <button onClick={() => adicionarInput('7')}>7</button>
        <button onClick={() => adicionarInput('8')}>8</button>
        <button onClick={() => adicionarInput('9')}>9</button>
        <button onClick={() => adicionarInput('*')}>×</button>

        <button onClick={() => adicionarInput('4')}>4</button>
        <button onClick={() => adicionarInput('5')}>5</button>
        <button onClick={() => adicionarInput('6')}>6</button>
        <button onClick={() => adicionarInput('-')}>−</button>

        <button onClick={() => adicionarInput('1')}>1</button>
        <button onClick={() => adicionarInput('2')}>2</button>
        <button onClick={() => adicionarInput('3')}>3</button>
        <button onClick={() => adicionarInput('+')}>+</button>

        <button onClick={() => adicionarInput('0')} className="zero">0</button>
        <button onClick={() => adicionarInput('.')}>.</button>
        <button onClick={calcular}>=</button>
      </div>

      {/* Marca pessoal */}
      <div className="marca">Samuel Alves</div>
    </div>
  );
}

export default App;
