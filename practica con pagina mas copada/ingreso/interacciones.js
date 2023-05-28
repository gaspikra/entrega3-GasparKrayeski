const usuario= JSON.parse(localStorage.getItem("usuarios"));  /* aca llamo al local storage */
function plomero(){    /* aca empieza la funcion del plomero */
let buscar=usuario.filter(item=>item.especialidad==="plomero");
if (buscar.length>0){
buscar.forEach(item=>{
    let muestreo=document.createElement("div");
    muestreo.innerHTML=
        `
        <div class="cajatr">
       <h4> nombre de la cuenta: ${item.nombre}</h4>
        <h4>precio por hora: ${item.costo}</h4>
        <h4>puntaje:${item.puntaje}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
    ;
    document.body.append(muestreo);
    let botonContratar = document.getElementById(`cuentas${item.id}`);
      botonContratar.addEventListener("click", ()=> {
        let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
        let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
        while (puntuacion>10 || puntuacion<1){
        puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
      }
      item.cantpuntuaciones++;
        item.alcancia +=salario*item.costo;
        item.puntuaciones=(item.puntuaciones+puntuacion)/item.cantpuntuaciones;
        item.horatotales+=salario;
        localStorage.setItem("usuarios",JSON.stringify(usuario));
      });
    });
  } else {
    alert("No se encontró usuario");
  }
}   /* hasta aca que termina la funcion, se va a repetir la misma funcion hasta la linea 199, lo unico que cambia es el item.especialidad que busca */

function limpiadora(){
let buscar=usuario.filter(item=>item.especialidad==="limpiadora");
if (buscar.length > 0){
buscar.forEach(item=>{
    let muestreo=document.createElement("div");
    muestreo.innerHTML=
        `
        <div class="cajatr">
       <h4> nombre de la cuenta: ${item.nombre}</h4>
        <h4>precio por hora: ${item.costo}</h4>
        <h4>puntaje:${item.puntaje}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
    ;
    document.body.append(muestreo);
    let botonContratar = document.getElementById(`cuentas${item.id}`);
      botonContratar.addEventListener("click", ()=> {
        let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
        let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
        while (puntuacion>10 || puntuacion<1){
        puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
        item.cantpuntuaciones++;
        }
        item.alcancia +=salario*item.costo;
        item.puntuaciones=(item.puntuaciones+puntuacion)/item.cantpuntuaciones;
        item.horatotales+=salario;
        localStorage.setItem("usuarios",JSON.stringify(usuario));
      });
    });
  } else {
    alert("No se encontró usuario");
  }}

  function electricista(){
      let buscar=usuario.filter(item=>item.especialidad==="electricista");
      if (buscar.length > 0){
          buscar.forEach(item=>{
              let muestreo=document.createElement("div");
              muestreo.innerHTML=
              `
        <div class="cajatr">
        <h4> nombre de la cuenta: ${item.nombre}</h4>
        <h4>precio por hora: ${item.costo}</h4>
        <h4>puntaje:${item.puntaje}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
        ;
        document.body.append(muestreo);
        let botonContratar = document.getElementById(`cuentas${item.id}`);
        botonContratar.addEventListener("click", ()=> {
            let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
            let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
            while (puntuacion>10 || puntuacion<1){
                puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
                item.cantpuntuaciones++;
            }
            item.alcancia +=salario*item.costo;
            item.puntuaciones=(item.puntuaciones+puntuacion)/item.cantpuntuaciones;
            item.horatotales+=salario;
            localStorage.setItem("usuarios",JSON.stringify(usuario));
        });
    });
} else {
    alert("No se encontró usuario");
}}
function gasista(){
let buscar=usuario.filter(item=>item.especialidad==="gasista");
if (buscar.length > 0){
buscar.forEach(item=>{
    let muestreo=document.createElement("div");
    muestreo.innerHTML=
        `
        <div class="cajatr">
       <h4> nombre de la cuenta: ${item.nombre}</h4>
        <h4>precio por hora: ${item.costo}</h4>
        <h4>puntaje:${item.puntaje}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
    ;
    document.body.append(muestreo);
    let botonContratar = document.getElementById(`cuentas${item.id}`);
      botonContratar.addEventListener("click", ()=> {
        let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
        let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
        while (puntuacion>10 || puntuacion<1){
        puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
        item.cantpuntuaciones++;
        }
        item.alcancia +=salario;
        item.puntuaciones=(item.puntuaciones+puntuacion)/item.cantpuntuaciones;
        localStorage.setItem("usuarios",JSON.stringify(usuario));
      });
    });
  } else {
    alert("No se encontró usuario");
  }}

function pintor(){
    let buscar=usuario.filter(item=>item.especialidad==="pintor");
    if (buscar.length > 0){
        buscar.forEach(item=>{
            let muestreo=document.createElement("div")
            muestreo.innerHTML=
            `
            <div class="cajatr">
            <h4> nombre de la cuenta: ${item.nombre}</h4>
            <h4>precio por hora: ${item.costo}</h4>
        <h4>puntaje:${item.puntaje}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
        ;
        document.body.append(muestreo);
        let botonContratar = document.getElementById(`cuentas${item.id}`);
        botonContratar.addEventListener("click", ()=> {
            let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
            let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
            while (puntuacion>10 || puntuacion<1){
                puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
                item.cantpuntuaciones++;
            }
            item.alcancia +=salario*item.costo;
            item.puntuaciones=(item.puntuaciones+puntuacion)/item.cantpuntuaciones;
            item.horatotales+=salario;
            localStorage.setItem("usuarios",JSON.stringify(usuario));
        });
    });
} else {
    alert("No se encontró usuario");
}}

function arquitecto(){
    let buscar=usuario.filter(item=>item.especialidad==="arquitecto");
    if (buscar.length > 0){
    buscar.forEach(item=>{
        let muestreo=document.createElement("div")
        muestreo.innerHTML=
            `
            <div class="cajatr">
           <h4> nombre de la cuenta: ${item.nombre}</h4>
            <h4>precio por hora: ${item.costo}</h4>
            <h4>puntaje:${item.puntaje}</h4>
            <button id="cuentas${item.id}">Contratar</button>
            </div>
            `
        ;
        document.body.append(muestreo);
        let botonContratar = document.getElementById(`cuentas${item.id}`);
          botonContratar.addEventListener("click", ()=> {
            let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
            let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
            while (puntuacion>10 || puntuacion<1){
            puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
            item.cantpuntuaciones++;
            }
            item.alcancia +=salario*item.costo;
            item.puntuaciones=(item.puntuaciones+puntuacion)/item.cantpuntuaciones;
            item.horatotales+=salario;
            localStorage.setItem("usuarios",JSON.stringify(usuario));
          });
        });
      } else {
        alert("No se encontró usuario");
      }
}
let boton=document.getElementById("contratar");
boton.addEventListener("click", () => {plomero();});
let boton1=document.getElementById("contratar1");
boton1.addEventListener("click",()=>{limpiadora()});
let boton2=document.getElementById("contratar2");
boton2.addEventListener("click",()=>{electricista()});
let boton3=document.getElementById("contratar3");
boton3.addEventListener("click",()=>{gasista()});
let boton4=document.getElementById("contratar4");
boton4.addEventListener("click",()=>{pintor()});
let boton5=document.getElementById("contratar5");
boton5.addEventListener("click",()=>{arquitecto()});
   /* me podria ahorrar 180 lineas de codigo si en vez de botones huibiese puesto un buscador de trabajo con input, la proxima lo hago asi, perdon jeje */