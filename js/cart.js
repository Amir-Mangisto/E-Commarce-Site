let tableBody = document.getElementById("tableBody");
let finalPrice = document.getElementById("finalPrice");
let tableRow = document.getElementsByClassName("tableRow");
let totalPrice = 0;
let removeFromCartBtn = document.getElementsByClassName("removeFromCartBtn");

let arrayOfCart = [
  {
    name: "vinyl",
    price: "26",
    description: "Rocking Vibration",
    category: "Roots",
    id: 52,
    picture: [
      "https://images-na.ssl-images-amazon.com/images/I/91Q5Eo6-tJL._SY355_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/B1-wovP1WbS._SX355_.jpg",
    ],
  },
  {
    name: "vinyl",
    price: "26",
    description: "Live At The Rainbow",
    category: "Roots",
    id: 53,
    picture: [
      "https://images-na.ssl-images-amazon.com/images/I/81cXG%2Bdhi1L._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71YIWKZ0kdL._SY355_.jpg",
    ],
  },
  {
    name: "vinyl",
    price: "26",
    description: "Marcus Garvey",
    category: "Roots",
    id: 54,
    picture: [
      "https://images-na.ssl-images-amazon.com/images/I/71cqpP0mjYS._SY355_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81PXfPURubL._SX355_.jpg",
    ]
  },
];
console.log(arrayOfCart);


function printItems() {
  for (i = 0; i < arrayOfCart.length; i++) {
    tableBody.innerHTML += `<tr class = "tableRow"> 
         <td ><img width="100px" height="100px" src="${arrayOfCart[i].picture[0]}" class="secondRecordImg">
          <button class="removeFromCartBtn" type="button" onclick = "removeItemFromCart(findItemById(${arrayOfCart[i].id}))">Remove</button> </td>
          <td >${arrayOfCart[i].price} </td>
  <td >${arrayOfCart[i].description}</td>
            </tr>`;
  }
}

printItems();

function cartSum() {
  let totalToPay = 0;
  for (i = 0; i < arrayOfCart.length; i++) {
    totalToPay += Number(myRecords[i].price);
  }
  finalPrice.innerText = `Total Price:${totalToPay}$`;
}
cartSum();

function findItemById(id) {
  for (let i = 0; i < arrayOfCart.length; i++) {
    if (id == arrayOfCart[i].id) {
      return i;
    }
  }
}

function removeItemFromCart(index) {
  arrayOfCart.splice(index, 1);
  tableBody.innerHTML = "";
  printItems();
  cartSum();
}
