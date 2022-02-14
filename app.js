// Functions
function updateCasaeNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product  + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calcailate total
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// fucntion calculate total
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const totalPrice = subTotal + tax;
    // UPdate on Html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// Event Handaler=================================
// For Phone handaler
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCasaeNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCasaeNumber('phone', 1219, false);
})
// For case handaler
document.getElementById('case-plus').addEventListener('click', function(){
    updateCasaeNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateCasaeNumber('case', 59, false);
})