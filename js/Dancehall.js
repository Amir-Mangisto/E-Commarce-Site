var container = document.querySelector(".container");
var recordCard = document.getElementsByClassName("recordCard");
var recordImage = document.getElementsByClassName("recordImage");

for (let i = 0; i < myRecords.length; i++) {
  if (myRecords[i].category == "danchall") {
    container.innerHTML += `<article class= "recordCard">
        <div class="recordDetails">
        <p>${myRecords[i].name}</p>
        <p>${myRecords[i].price}</p>
        <p>${myRecords[i].description}</p>
        </div>
        <div class="recordImage"></div>
        </article>
        <div class="recordBtn"> 
        <button class="AddToCart" onclick="AddToCart(${myRecords[i].id})"> Add To Cart </button>
        <button class="RemoveFromCart" onclick= "RemoveFromCart(${myRecords[i].id})"> Remove From Cart </button>
        </div>
        <hr>
        `;
    for (let j = 0; j < myRecords[i].picture.length; j++) {
      recordImage[
        recordImage.length - 1
      ].innerHTML += `<img src="${myRecords[i].picture[j]}" class="secondRecordImg">`;
    }
  }
}

AddToCart= (id)=>{

  arrayOfCart.push(id);
  console.log(arrayOfCart);
for (let i = 0; i < arrayOfCart.length; i++) {
  for (let j = 0; j < myRecords.length; j++) {
      if (arrayOfCart[i] == myRecords[j].id) {
          
       alert(`Your record has been added:${myRecords[j].description}`)
        
      }
     
  }
  
}

};



RemoveFromCart= (id)=>{ 
for (let i = 0; i <  arrayOfCart.length; i++) {
  if (id ==  arrayOfCart[i]) {
    let itemIndex =  arrayOfCart.findIndex((ele) => id == ele )
    console.log(itemIndex);
    for (let j = 0; j < myRecords.length; j++) {
      if ( arrayOfCart[i] == myRecords[j].id) {
        arrayOfCart.splice(itemIndex, 1 )
        console.log(arrayOfCart);
       alert(`Your record has been removed:${myRecords[j].description}`)

      }
  }
  }

}

};
