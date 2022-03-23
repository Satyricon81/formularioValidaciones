document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

//Funcion principal
const fetchData = async () => {
    try {
        loadingData(true);
        //Solcitud a la API -->
        //Creamos una constante para obtener una respuesta con el await (promesa).
        const response = await fetch("https://rickandmortyapi.com/api/character");
        //Vamos a transformar la respuesta en un JSON.
        const data = await response.json();
        mostrarDatos(data);
    } catch (error) {
        console.log(error)
    } finally {
        loadingData(false);
    }
};

//Con el data ya en formato JSON, ahora los pasaremos a las cards creadas en el template del HTML.
const mostrarDatos = (data) => {
    const cards = document.getElementById("cardsDinamicas");
    const templateCard = document.getElementById("templateCard").content;
    //Creamos la constante fragment para evitar el reflow.
    const fragment = document.createDocumentFragment();
    data.results.forEach((item) => {
        //Creamos un clone para utilizar el template del HTML.
        const clone = templateCard.cloneNode(true);
        //Seleccionamos las etiquetas, ids, clases,etcs.. que queremos cambiar de forma dinamica. Por ejemplo en el "h5" queremos que pase dinamicamente el "name" del item del JSON.
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector(".card-img-top").setAttribute("src", item.image);
        //Pasamos al fragment el clone creado con los items del JSON dentro, para evitar el reflow.
        fragment.appendChild(clone);
    })
        //Finalmente pasamos a las cardsDinamicas que es objetivo final donde queremos que se muestren los datos, el fragment creado antes.
        cards.appendChild(fragment);
};

// Creamos una funcion para controlar el spinner de loading. Lo atrapamos con el id y luego lo pasamos a un if para removerlo o añadirlo segun de un true o un false, en el try y en el finally de la funcion principal de arriba.
const loadingData = (estado) => {
    const loading = document.getElementById("loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }  
};

