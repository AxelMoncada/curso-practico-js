
 const lista1 = [
     100,
     800,
     500,
     62,
     4000000,
 ];

 function CalcularMedianaAritmetica (lista1){

 const listaordenada = lista1.sort(function(a,b){
     return a - b
 });

 const mitadLista1 = parseInt(lista1.length / 2);

 function esPar (numerito) {
    if (numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
 }

 let mediana;

 if (esPar(lista1.length)) {
     const elemento1 = lista1[mitadLista1 - 1 ];
     const elemento2 = lista1[mitadLista1];

     const promedio1y2 = calcularMediaAritmetica ([
         elemento1,
         elemento2,
     ]);

     mediana = promedio1y2
     return mediana



 }else{
    mediana = lista1 [mitadLista1];
    return mediana
 }

}

 function calcularMediana(){
    const valoresinput = document.getElementById("InputMediana");
    const valoresinputvalue =valoresinput.value;
    const valoresinputseparados = valoresinputvalue.split(',');
    const valoresfinales = valoresinputseparados.map(Number);

    console.log(valoresfinales)

    const resultadomedia = CalcularMedianaAritmetica(valoresfinales);

    const resultadomediatexto=document.getElementById("ResultadoMediana");
    resultadomediatexto.innerHTML = "La mediana es " + resultadomedia ;
}