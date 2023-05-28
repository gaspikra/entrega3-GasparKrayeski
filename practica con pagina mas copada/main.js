const usuarios= JSON.parse(localStorage.getItem("usuarios")) || [];
const inicioS= JSON.parse(localStorage.getItem("inicioS")) || [];
const logeo=document.getElementById("logeo");
logeo.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputs= e.target.children;
    let buscador=usuarios.find(item=>item.nombre===inputs[0].value && item.contraseña===inputs[2].value);
    if (buscador && buscador.tipo==="cliente"){
        window.location.href="ingreso/clientes.html";
    }
    else if(buscador && buscador.tipo==="trabajo"){
        let elemento={nombre:inputs[0].value,};
        inicioS.push(elemento);
        localStorage.setItem("inicioS",JSON.stringify(inicioS)); /* esto es para luego poder obtener la cuenta especifica en la cuenta de trabajador y pasar todos los registros de ganancia y promedio de puntaje. */
        window.location.href="ingreso/trabajador.html";
    }
    else{
        let error=document.getElementById("error");
        error.innerHTML="el usuario ingresado es incorrecto"
        error.className="rojo";
    }
});
const registro=document.getElementById("registro");
registro.addEventListener("click",()=>{
    let usuario=prompt("ingrese el nombre de usuario que desee: ");
    let busqueda=usuarios.find(item=>item.nombre===usuario);
        if(busqueda){
            alert("el nombre del usuario ya existe");
        }
        else{
            let contra=prompt("ingrese una contraseña: ");
            let tipocuenta=prompt("si quiere una cuenta de trabajo, ingrese [trabajo] y si quiere ser cliente introduzca [cliente]");
            while (tipocuenta!="cliente" && tipocuenta!="trabajo"){
                tipocuenta=prompt("caracteristica invalida, ponga [cliente] o [trabajo] segun lo que desee");
            }
            if(tipocuenta==="trabajo"){
                let profesion=prompt("indique su profesion: ");
                let precio=parseInt(prompt("ingrese el costo de su servicio: "));
                let nuevousuario={
                    id:usuarios.length+1,
                    nombre: usuario,
                    contraseña:contra,
                    tipo:tipocuenta,
                    especialidad:profesion,
                    costo:precio,
                    alcancia:0,
                    puntuaciones:0,
                    cantpuntuaciones:0,
                    horatotales:0,
                };
                usuarios.push(nuevousuario);
                localStorage.setItem("usuarios",JSON.stringify(usuarios));
            }
            else if (tipocuenta==="cliente"){
            let nuevousuario={
                id:usuarios.length+1,
                nombre: usuario,
                contraseña:contra,
                tipo:tipocuenta,
            };
            usuarios.push(nuevousuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
        }
}); /* hasta aca todo lo que tiene que ver con el ingreso */