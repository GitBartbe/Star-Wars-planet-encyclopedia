import "./App.scss";
import data from "./components/data.json";
import FilmComponent from "./components/film-component/film-component";
import {ReactComponent as Logo} from './assets/LOGO.svg'


function App() {
  const filmData = data.data;
  const { films, planets } = filmData;
  return (
    <div className="App">
      <div className="logo-container" ><Logo className="logo" /></div>
      
      {
        films.map((film,idx) => (
          <FilmComponent key={idx} filmTitle = {film.title} filmId = {film.id} planets={planets} />
        ) )
      }
   
    </div>
  );
}

export default App;
