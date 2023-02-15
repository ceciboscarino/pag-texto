
import Testimonio from "./componentes/Testimonio";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
    <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp</h1>
     <Testimonio
     nombre='Emma Bostian'
     pais='Suecia'
     imagen='emma'
     cargo='Ingeniera de Software'
     empresa= 'Spotify'
     testimonio= 'Spotify ha sido un lugar fantástico para iniciar mi carrera, porque los directivos siempre están motivándote a aprender algo nuevo y asumir nuevos retos. Se pone énfasis en las mejoras, lo que significa que nunca estamos quietos mucho tiempo, la empresa siempre está buscando nuevas y mejores maneras de hacer las cosas. ¡Siempre estás rodeado por compañeros de equipo que quieren ayudarte a tener éxito y divertirte mientras lo haces'
     nombredefoto= 'Emma'
     />
     <Testimonio
     nombre='Sarah Chima'
     pais='Nigeria'
     imagen='sarah'
     cargo='Ingeniera de Software'
     empresa= 'Chat Desk'
     testimonio= 'Chat Desk ha sido un lugar fantástico para iniciar mi carrera, porque los directivos siempre están motivándote a aprender algo nuevo y asumir nuevos retos. Se pone énfasis en las mejoras, lo que significa que nunca estamos quietos mucho tiempo, la empresa siempre está buscando nuevas y mejores maneras de hacer las cosas. ¡Siempre estás rodeado por compañeros de equipo que quieren ayudarte a tener éxito y divertirte mientras lo haces'
     nombredefoto= 'Sarah'
     />
     <Testimonio
     nombre='Shawn Wang'
     pais='Singapur'
     imagen='shawn'
     cargo='Ingeniero de Software'
     empresa= 'Amazon'
     testimonio= 'Amazon ha sido un lugar fantástico para iniciar mi carrera, porque los directivos siempre están motivándote a aprender algo nuevo y asumir nuevos retos. Se pone énfasis en las mejoras, lo que significa que nunca estamos quietos mucho tiempo, la empresa siempre está buscando nuevas y mejores maneras de hacer las cosas. ¡Siempre estás rodeado por compañeros de equipo que quieren ayudarte a tener éxito y divertirte mientras lo haces'
     nombredefoto= 'Shawn'
     />
     </div>
    </div>
  );
}

export default App;
