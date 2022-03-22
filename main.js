/* //notacion literal

const regExpLiteral = /helloworld/i;

//notacion de objeto

const regExpObjeto = new RegExp("helloworld", "i");

//Con el test hacemos una comprobacion de que el string que buscamos se encuentra dentro de la variable que le digamos. Devuelve un boolean.

console.log(regExpObjeto.test("helloworld")); */

//Declaramos variables y hacemos el proces con querySelector
/* const formulario = document.querySelector("#formulario");
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']"); */

const formulario = document.getElementById("formulario")
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")

const alertName = document.getElementById("alertName")
const alertEmail = document.getElementById("alertEmail")
const alertSuccess = document.getElementById("alertSuccess")

//Regular Expressions para la validacion.
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const mostrarMensajeSuccess = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Formulario enviado con exito.";
}

const mostrarMensajeError = (erroresValidacion) => {
    erroresValidacion.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //para parar el comportamiento por default que hace el navegador al pulsar el boton y asi evitamos que salgan los datos en la uri del navegador.

    const erroresValidacion = [];

    //esto devuelve true si existen espacios
    //console.log(!userName.value.trim());

    if(!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");
        erroresValidacion.push({
            tipo: alertName,
            msg: "Formato no valido en el campo. Introduce solo letras."
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    };

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");
        erroresValidacion.push({
            tipo: alertEmail,
            msg: "Introduzca un email valido."
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if(erroresValidacion.length !== 0) {
        mostrarMensajeError(erroresValidacion);
        return;
    }

    console.log("formulario enviado");

    mostrarMensajeSuccess();
});