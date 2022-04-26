import JsonFile from "./movies-netflix.json";
import './App.css';
import Section from "./components/Section";
import logo from "./img/logo.png";

function App() {

  return (
    <div className="App">
      <img id= "logo" alt="logo" src= {logo}/>
      {JsonFile.map((categories, index) =>{
          const arrayPic = JsonFile[index].images;
          return <Section key={index} title = {categories.category} img={arrayPic}/>
      })}
    </div>
  );
}

export default App;
