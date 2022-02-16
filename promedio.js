
    const lista = document.getElementById("InputPromedio");

function calcularPromedio (iterable) {
    let listaInput = lista.value;
    let resultado = 
   

   
    
    console.log (" cadena final" + lista);
    
}


  

function calcularMediaAritmetica(listaInput){
    
//    let sumaLista = 0;
//for (let i = 0; i < lista.length; i++){
//    sumaLista = sumaLista + lista[i];
//}

const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento)  {
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista /lista.length;

return promedioLista

}