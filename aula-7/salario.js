console.log("Calculadora - Valor do Desconto");

//
// let price = 2000;

// function reducePrice(price) {
//     let totalDiscount = price * 0.1;
//     let discountedPrice = price - totalDiscount;
//     console.log('O valor do item é : R$ '+ price, "e com desconto de 10%, o valor é de: R$ " + discountedPrice);
// }

// reducePrice(price)
//

// Nova função
function discountValue(discount, total) {
    let value = total - (total*(discount/100))
    console.log('O valor do item é : R$ '+ total, "e com desconto de " + discount + "%, o valor é de: R$ " + value);
}

discountValue(15, 2000)

// Faixa de desconto
let priceRange = 2000;
let rangeDiscount1 = 10;
let rangeDiscount2 = 15;
let rangeDiscount3 = 20;
let rangeDiscount4 = 25;

function reducePrice(priceRange, discountRange) {
    let totalDiscount = priceRange * (discountRange / 100);
    let discountedPrice = priceRange - totalDiscount;
    console.log('O valor do item é: R$ ' + priceRange + ' e com desconto de ' + discountRange + '%, o valor é de: R$ ' + discountedPrice);
}

// Seleção da faixa de desconto
let selectedDiscountRange = rangeDiscount4; // Altere para a faixa de desconto desejada

reducePrice(priceRange, selectedDiscountRange);

