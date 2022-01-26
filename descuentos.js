  //Lineas PRECIOS Y DESCUENTOS
console.group("precios")
  const precioOriginal= 120;
  const descuentoinicial=18;

  function calcularPrecioConDescuento(precio,descuentoinicial){
    const porcentajePrecioConDescuento = 100 - descuentoinicial;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

        return precioConDescuento;
  }

  
  function BotonCalcularPrecio(){
      const InputPrice = document.getElementById("InputPrice");
      const priceValue = InputPrice.value;

      const InputDiscount = document.getElementById("InputDiscount");
      const discount = InputDiscount.value;

      
  }

 
  const coupons =[
      "navidad_11",
      "cumpleaños3",
      "cuponweb3"
   ] ;



  function BotonCupon (){
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const inputCupon = document.getElementById ("InputCupon");
    const Cupon = inputCupon.value;
  


    let descuento;

    switch(Cupon){
        case coupons[0]:
        descuento = 15;
  
    break;

    case coupons[1]:
    descuento = 20;
    break;

    case coupons[2]:
    descuento = 25;
    break;

    case coupons[undefined]:
    descuento ="Cupon no existe";
    break;
    }
  

if (descuento == undefined) {
    const resultp = document.getElementById("ResultP");
    resultp.innerText="El cupon: "+ Cupon + ", No existe";

}else {
const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
      const resultp = document.getElementById("ResultP");
      resultp.innerText="El precio con descuento son: $"+ precioConDescuento;
    }; 
}