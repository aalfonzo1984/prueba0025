var contenido = document.querySelector("#contenido");

/*Función para traer todos los digimones con fetch*/
function todos() {
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((datos) => {
      tabla(datos);
    });
}

/*Función para traer a los digimones por nivel elegido con fetch*/
function niveles(niv) {
  let url = `https://digimon-api.vercel.app/api/digimon/level/${niv}`;
  fetch(url)
    .then((response) => response.json())
    .then((level) => {
      nivel(level);
    });
}

/* Función para buscar al digimon por nombre */
function searchName(nombre) {
  var nombresearch = document.getElementById("search").value;
  /* If para comparar si la petición es por el input search o por el boton del digimon */
  if (nombresearch == "") {
    nombre = nombre
  } else {
    nombre = nombresearch
  }
  let url = `https://digimon-api.vercel.app/api/digimon/name/${nombre}`;
  fetch(url)
    .then((response) => response.json())
    .then((nombre) => {
      nombres(nombre);
    });
}

/* Inserto todos los digimon en el main-content */
function tabla(datos) {
  contenido.innerHTML = "";
  for (let dat of datos) {
    contenido.innerHTML += `
    <div class="col" id="content"><div class="card"><img src="${dat.img}" alt="">Nivel: ${dat.level}</div>
                <button class="boton" onclick="searchName('${dat.name}')">${dat.name}</button></div>
    `;
  }
}

/* Inserto a los digimon en el main-content según el nivel elegido */
function nivel(level) {
  contenido.innerHTML = "";
  for (let lev of level) {
    contenido.innerHTML += `
    <div class="col" id="content"><div class="card"><img src="${lev.img}" alt="">Nivel: ${lev.level}</div>
                <button class="boton" onclick="searchName('${lev.name}')">${lev.name}</button>
    `;
  }
}

/* Inserto a los digimon en el main-content por el nombre elegido */
function nombres(nombre) {
  contenido.innerHTML = "";
  for (let nomb of nombre) {
    contenido.innerHTML += `
    <div class="col" id="content"><div class="card"><img src="${nomb.img}" alt="">Nivel: ${nomb.level}</div>
                <button class="boton">${nomb.name}</button>
                <button class="boton" onclick="todos()">Inicio</butto></div>
    `;
  }
}

/* Cargo a todos los digimon al iniciar la página */
window.onload = todos;
