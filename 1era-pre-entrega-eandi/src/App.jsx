import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ContentProducts from './Components/ContentProducts/ContentProducts';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bienvenidos a Shared Company"/>
      {/* <ContentProducts /> */}
    </>
  );
}

export default App;