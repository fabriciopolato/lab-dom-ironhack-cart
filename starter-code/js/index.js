// ITERATION 1
//PRODUTO
// let product = document.querySelectorAll(".product");

//removeBtn
let removeBtn = document.querySelectorAll(".btn-remove");
//table
const table = document.querySelector('tbody');
//createBtn
const createBtn = document.querySelector('#create')

// unit.addEventListener("change", function() {
  //   console.log(`
  //   Produto: ${product}
  //   Preço: ${JSON.stringify{price}}
  //   Unidade: ${JSON.stringify(unit.value)}
  //   `);
  // })
  
  
  function updateSubtotal() {
    
    let price = document.querySelectorAll(".price span");
    let accumulator = 0;
    let subtotal = document.querySelectorAll(".subtotal span");

  [...price].map(($price, i) => {
    let unit = document.querySelectorAll("input[type = 'number']");
  
    unit = [...unit][i].value;
    let parcial = Number($price.innerHTML) * unit;
  
    [...subtotal][i].innerHTML = parcial;

    accumulator += parcial;
  })

  return accumulator;
}

function calculateAll() {
  
  let total = document.querySelector('#total-value span')
  let totalSum = updateSubtotal();

  // ITERATION 3
  //...
  total.innerHTML = totalSum;
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);

  //click event to remove
  [...removeBtn].map(elem => elem.addEventListener('click', function(e) {
    productRemoveListener(e)
  }));
});

createBtn.addEventListener('click', function() {
  createProduct();
})
// ITERATION 4

function productRemoveListener(event) {
  // ...
  console.log(event)
  let currentProduct = event.target.parentNode.parentNode;
  table.removeChild(currentProduct);

  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  let productName = document.querySelector(".create-product input[type='text']");
  let productPrice = document.querySelector(".create-product input[type='number']")

  table.innerHTML += `<tr class="product">
  <td class="name">
    <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

  removeBtn = document.querySelectorAll(".btn-remove");

  [...removeBtn].map(elem => elem.addEventListener('click', function(e) {
    productRemoveListener(e)
  }));

  productName.value = "";
  productPrice.value = 0;
  // ...
}
