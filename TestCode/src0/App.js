import logo from './logo.svg';
import './App.css';
import MovingDot from 'components/MovingDot';
import DangerButton from 'components/DangerButton';
import TestJsx from 'components/TestJsx';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" style={{width: '50px',height: '50px', margin: 'auto'}}/>
      <div className='text-3xl font-bold underline'> Hello World! Home Pages</div>
      <DangerButton />
      <MovingDot />
      <TestJsx />
    </div>
    
  );
}

export default App;
