import './App.css';
import SayMyName from "./components/SayMyName"
import HelloWorld from "./components/HelloWorld"
import Pessoa from "./components/Pessoa"
import Frase from "./components/Frase"
import List from "./components/List"

function App() {

  const newName = "Lucas";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName name="João" />
      <SayMyName name={newName} />
      <Pessoa nome="Lucas" idade="20" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  );
}

export default App;
