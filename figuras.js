//Codigo del Cuadrado
    console.group("Cuadrados");
       function perimetroCuadrado(lado){
        return lado * 4;

    } 

     function areaCuadrado (lado){
        return lado*lado

    }
    
     console.groupEnd();


//Codigo del Triangulo
    console.group("Triangulos")
   
    function perimetroTriangulo (lado1,lado2,base){
        return lado1 + lado2 + base;

    };
    
    function areaTriangulo (base,altura){
        return (base * altura) / 2;

    }

    console.groupEnd();

function calculaisoceles(ladoa,ladob,base){
    if (ladoa === ladob && base != ladoa){
        const altura= Math.sqrt(ladoa**2 - base**2/ 4)

        return altura;
    }else {
         alert ("No es isoceles");
        }

}

//Codigo del Circulo
    console.group("Circulos");

    const radioCirculo = 4 ;
    console.log("El radio del circulo es: "+ radioCirculo + "cm");

    function diametro (radio){
        return radio * 2;
    }

    const PI = Math.PI;
    console.log("El PI: "+ PI );

    //CIRCUNFERENCIA
    function perimetroCirculo (radio){
            const diametrocirculo = diametro(radio);
            return diametrocirculo * PI ;
    };
    
    function areaCirculo(radio){
        return (radio * radio) * PI ;
    }

    console.groupEnd();


    // Introducimos el HTML

    function calcularPerimetroCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;
        
        const perimetro = perimetroCuadrado(value);
        alert(perimetro);

    }
    
    function calcularAreaCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;
        
        const area = areaCuadrado(value);
        alert(area);

        
    };

 // triangulo
    function calcularPerimetroTriangulo(){
        const ladoa = document.getElementById("InputTrianguloA");
        const valorLadoa = Number(ladoa.value);
       

        const ladob = document.getElementById("InputTrianguloB");
        const valorLadob = Number(ladob.value);

        const base = document.getElementById("InputTrianguloBase");
        const valorbase = Number(base.value);

        const altura= document.getElementById("InputTrianguloAltura");
        const valorAltura = Number(altura.value);
             

        const perimetro = perimetroTriangulo(valorLadoa,valorLadob,valorbase);
        
        alert(perimetro);

    }

   
    function calcularAreaTriangulo(){
        const ladoa = document.getElementById("InputTrianguloA");
        const valorLadoa = Number(ladoa.value);
       

        const ladob = document.getElementById("InputTrianguloB");
        const valorLadob = Number(ladob.value);

        const base = document.getElementById("InputTrianguloBase");
        const valorbase = Number(base.value);

        const altura= document.getElementById("InputTrianguloAltura");
        const valorAltura = Number(altura.value);
             

        const area = areaTriangulo(valorbase,valorAltura);
        
        alert(area);

    }

    function calculartrianguloequilatero() {
        const ladoa =document.getElementById("Inputladoa");
        const valorladoa = Number(ladoa.value);

        const ladob =document.getElementById("Inputladob");
        const valorladob = Number(ladob.value);

        const base =document.getElementById("Inputbase");
        const valorbase = Number(base.value);

        alturafinal = calculaisoceles (valorladoa,valorladob,valorbase);

        alert(alturafinal);


    }

     // circulo

     function CalcularPerimetroCirculo(){
         const inputRadio = document.getElementById("InputCirculo");
         const valorRadio = Number(inputRadio.value);

         const perimetro = perimetroCirculo(valorRadio);
         alert(perimetro);
     }
    
     function CalcularAreaCirculo(){
        const inputRadio = document.getElementById("InputCirculo");
        const valorRadio = Number(inputRadio.value);

        const area = areaCirculo(valorRadio);
        alert(area);
    }
   


    
