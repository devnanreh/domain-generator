/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let generateDomains = () => {
    let pronouns = ["el", "la", "los"];
    let nouns = ["gato", "perro", "hombre", "mujer", "eso", "hernan"];
    let adj = [
      "gran",
      "pequenio",
      "loco",
      "peligroso",
      "azul",
      "negro",
      "rojo"
    ];
    let domain = [
      "ar",
      "br",
      "ca",
      "co",
      "cl",
      "de",
      "es",
      "edu",
      "net",
      "com",
      "gov",
      "org",
      "info"
    ];

    let pronounsIndex = Math.floor(Math.random() * pronouns.length);
    let nounsIndex = Math.floor(Math.random() * nouns.length);
    let adjIndex = Math.floor(Math.random() * adj.length);
    let domainIndex = Math.floor(Math.random() * domain.length);

    return (
      "www." +
      pronouns[pronounsIndex] +
      nouns[nounsIndex] +
      adj[adjIndex] +
      "." +
      domain[domainIndex]
    );
  };

  let dominio = document.getElementById("domain");
  dominio.innerHTML = generateDomains();
};
