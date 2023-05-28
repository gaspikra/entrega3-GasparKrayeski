const usuario=JSON.parse(localStorage.getItem("usuarios"));
const usuarioss=JSON.parse(localStorage.getItem("inicioS"));
let saldo=document.getElementById("saldo");
let promedio=document.getElementById("promedio");
let buscador=usuario.find(item=>item.nombre===usuarioss[0].nombre);/* este array esta pensado para que tenga un solo elemento, y cuando cierres sesion se borre*/
if (buscador) {
  saldo.innerHTML=`${buscador.alcancia}`;
  promedio.innerHTML=`${buscador.puntuaciones}`;
}
let boton=document.getElementById("CS");
  boton.addEventListener("click",()=>{
    localStorage.removeItem("usuarioss");
    usuarioss.length=0;
    localStorage.setItem("inicioS",JSON.stringify(usuarioss));
    window.location.href="../index.html";
  });
  localStorage.setItem("usuarioss", JSON.stringify(usuarioss));

