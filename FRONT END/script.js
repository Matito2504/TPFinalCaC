
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcc6c19c78msh1de2a83824e53d8p1b077cjsn0e0fd08e0778',
		'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
	}
};


  let mostrar=document.querySelector("#container-api");
  let i=10;
  
  let boton2=document.getElementsByClassName("boton2")

  function traer_datos(){
  fetch("https://burgers-hub.p.rapidapi.com/burgers",options)
  .then(data => data.json())
  .then(data => {
    console.log(data);
    mostrar.innerHTML =
    `<div class="tarjeta">
      <img src="${data[10].images[0].sm}"></img><br>
      <div class="tarjeta-titulo"> <h3 class"titulo-oferta">${data[10].name}</h3><br>
      <h4 class"titulo-oferta">USD:${data[10].price}</h4></div><br>
    </div>
    <div class="tarjeta">
      <img src="${data[8].images[0].sm}"></img><br>
      <div class="tarjeta-titulo"><h3 class"titulo-oferta"> ${data[8].name}</h3><br>
      <h4 class"titulo-oferta">USD:${data[8].price}</h4></div><br>
    </div>
    <div class="tarjeta">
      <img src="${data[14].images[0].sm}"></img><br>
      <div class="tarjeta-titulo"><h3 class"titulo-oferta"> ${data[14].name}</h3><br>
      <h4 class"titulo-oferta">USD: ${data[14].price}</h4></div><br>
    </div>`

  }) 
}
traer_datos();











  