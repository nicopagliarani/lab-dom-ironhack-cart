// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;
  product.querySelector('.subtotal > span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  //const multipleProduct=document.querySelectorAll('.product');
  //let total=0;
  //for (let product of multipleProduct) {
    //total += updateSubtotal(product);
  //}
  


  // end of test

  // ITERATION 2
  document.querySelectorAll('.product').forEach(function (product) {
    console.log(product);
    updateSubtotal(product);
  });
   
  

  // ITERATION 3
  //... your code goes here
  //const totalPriceElement=document.querySelector('#total-value span');
  //totalPriceElement.innerHTML=total;
  let total = 0;
  document.querySelectorAll('.product').forEach(function (product) {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value').innerText = `Total: $${total}`;
}

// ITERATION 4

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach(function (button) {
    button.onclick = removeProduct;
  });
});
function removeProduct(event) {
 const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode.parentNode);
  //... your code goes here
  //const productWeWantToRemove = target.parentNode.parentNode;
  //productWeWantToRemove.parentNode.removeChild(productWeWantToRemove);
  //console.log(target.parentNode.parentNode);
    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();}

  window.addEventListener('load', () => {
    // 
    const createProductBtn = document.querySelector('#create');
    createProductBtn.addEventListener('click', () => {
      createProduct();
    });
  });


 // ITERATION 5

function createProduct() {const product = document.querySelector('.product');
const newProduct = product.cloneNode(true);
newProduct.querySelector('.name span').innerText = document.querySelector('.create-product td input').value
newProduct.querySelector('.subtotal span').innerText = 0
newProduct.querySelector('.price span').innerText = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value
newProduct.querySelector('.action .btn').addEventListener('click', removeProduct)
const newTbody = document.querySelector('tbody')

newTbody.appendChild(newProduct);
}//... your code goes here
  //console.log('Creating a product');
  //const nameElement = document.querySelector(
    //'.create-product input[type="text"]'
  //);
  //const priceElement = document.querySelector(
    //'.create-product input[type="number"]'
  //);

  //const newTableRow = document.createElement('tr');
  //newTableRow.className = 'product';
  //const htmlStringOfProduct = `<td class="name">
    //<span>${nameElement.value}</span>
  //</td>
  //<td class="price">$<span>${priceElement.value}</span></td>
  //<td class="quantity">
    //<input type="number" value="0" min="0" placeholder="Quantity" />
  //</td>
  //<td class="subtotal">$<span>0</span></td>
  //<td class="action">
    //<button class="btn btn-remove">Remove</button>
  //</td>`;
  //newTableRow.innerHTML = htmlStringOfProduct;

  //const removeButton = newTableRow.querySelector('button');
  //removeButton.addEventListener('click', removeProduct);

  //const tableBodyElement = document.querySelector('tbody');
  //tableBodyElement.appendChild(newTableRow);
//}

//window.addEventListener('load', () => {
  //const calculatePricesBtn = document.getElementById('calculate');
  //calculatePricesBtn.addEventListener('click', calculateAll);

  //const createButton = document.getElementById('create');
  //createButton.addEventListener('click', createProduct);
  //... your code goes here

  //const removeButtons = document.querySelectorAll('.product button');
  //const removeButtonsArray = [...removeButtons];
  //removeButtonsArray.forEach((removeButton) => {
    //removeButton.addEventListener('click', removeProduct);
  //});
//});