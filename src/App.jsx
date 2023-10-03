import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a la tienda!'} color={'oscuro'}/>
      <ItemCount initial={1} stock={15} onAdd={(quantity)=> console.log('Cantidad Agregada', quantity)}/>
    </div>
  );
}

export default App;
