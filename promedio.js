
    

function calcularPromedio () {
    const lista = document.getElementById("InputPromedio");
    const listavalor = lista.value;
    const listafinal = listavalor.split(',');
    const listafinalnumeros = listafinal.map(Number);
   

    console.log( listafinalnumeros);

     const promedio = calcularMediaAritmetica(listafinalnumeros);

     
     const resultadopromedio =document.getElementById("PromedioResultado");
     resultadopromedio.innerHTML =" El promedio es " + promedio 
}


  function calcularMediaAritmetica(listafinal){
    

const sumaLista = listafinal.reduce(
    function (valorAcumulado = 0, nuevoElemento)  {
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista /listafinal.length;

return promedioLista

}