import React from "react";

function Testimonio(){
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-emma.png")}
        alt= "Foto de Emma"/>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"> Emma Bostian en Suecia</p>
          <p className="cargo-testimonio"> Ingeniera de Software en Spotify</p>
          <p className="texto-testimonio"> Spotify ha sido un lugar fantástico para iniciar mi carrera, porque los directivos siempre están motivándote a aprender algo nuevo y asumir nuevos retos. Se pone énfasis en las mejoras, lo que significa que nunca estamos quietos mucho tiempo, la empresa siempre está buscando nuevas y mejores maneras de hacer las cosas. ¡Siempre estás rodeado por compañeros de equipo que quieren ayudarte a tener éxito y divertirte mientras lo haces </p>

        </div>
    </div>
  );   
}