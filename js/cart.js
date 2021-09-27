let tableBody = document.getElementById("tableBody");
let finalPrice = document.getElementById("finalPrice");
let totalPrice = 0;
// console.log(arrayOfCart);

for (let i = 0; i < arrayOfCart.length; i++) {
  for (let j = 0; j < myRecords.length; j++) {
    if (arrayOfCart[i] == myRecords[j].id) {
      tableBody.innerHTML += `<tr> <td><img width="100px" height="100px" src="${myRecords[j].picture[0]}" class="secondRecordImg"></td> <td>${myRecords[j].price}</td>    
            <td>${myRecords[j].description}</td>`;
      totalPrice += Number(myRecords[j].price);
      finalPrice.innerHTML = `Total Price:${totalPrice}$`;
    }
  }
}
