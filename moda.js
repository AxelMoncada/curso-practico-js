function calcularModa () {
    const valorinput = document.getElementById("InputModa");
    const inputmodavalue= valorinput.value;
    const Modasplit = inputmodavalue.split(',');
    const ModaNum = Modasplit.map(Number);

    console.log(ModaNum)

    const operacion = Operacionmoda(ModaNum);

    const Printhtml = document.getElementById("ModaFinal");
    Printhtml.innerHTML = "La moda final es " + operacion;

}

function Operacionmoda (lista1Moda) {

const lista1Count = {};
    lista1Moda.map(
        function (elemento) {
            if (lista1Count[elemento]){
            lista1Count[elemento] += 1 ;
        }else{
            lista1Count[elemento] = 1;
        };
    }
    );

  
    
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB [1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1]
    const modafinal = parseInt(moda);
        return modafinal
}