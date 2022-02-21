// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const priceValue=product.querySelector('.price span');
const price= Number(priceValue.innerText);
console.log(price);
const quantityValue=product.querySelector('.quantity input');
const quantity=Number(quantityValue.value);
console.log(quantity);
const subtotal=product.querySelector('.subtotal span');
const subtotalValue= price*quantity;
subtotal.innerHTML=subtotalValue;
console.log(subtotalValue)
return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  const multipleProduct=document.querySelectorAll('.product');
  let total=0;
  for (let product of multipleProduct) {
    total += updateSubtotal(product);
  }
  


  // end of test

  // ITERATION 2
  
   
  

  // ITERATION 3
  //... your code goes here
  const totalPriceElement=document.querySelector('#total-value span');
  totalPriceElement.innerHTML=total;
}

// ITERATION 4

//to check
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode.parentNode);
  //... your code goes here
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    const removeProductBtns = document.querySelectorAll('.btn btn-remove');
    removeProductBtns.forEach(function (button) {
      button.onclick = removeProduct;
    });
  });
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}
  


 




// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
