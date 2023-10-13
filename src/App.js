import logo from './logo.svg';
import './App.css';

let sesion = true
const amigos = ['Diego','Victor','Naomi','Leon']

function Header({title}){
  return <h1 style={{color:color ? color: 'white'}}>{title ? title : "No hay nada"}</h1>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header title='Hola' color='red'/>
        <Header title='Adios' color='pink'/>
        <Header></Header>
      </header>
      {sesion === true ?
        <>
        <Header title="Bienvenido"/>
        <ul>
          {amigos.map((amigo, index) => {
            return <li key={index}>{amigo}</li>
          })}
        </ul>
        </>
        :
        <p>No has iniciado sesion...</p>
    }
    </div>
  );
}

export default App;
