import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
  // creo una etiqueta h2
  console.log("Creando etiqueta h2");
  const h2 = document.createElement("h2");
  h2.innerText = `Hola, ${nombre}`;
  document.body.append(h2);
  // creo una etiqueta img
  // console.log(webpacklogo);
  // const img = document.createElement("img");
  // img.src = webpacklogo;
  // document.body.append(img);
};
