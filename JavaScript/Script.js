// Shared Items
let container = document.getElementById("container")
let count = container.childElementCount;
count =0;
let makePurchase =document.getElementById("btnMakePurchase");
let btnApply =document.getElementById("btnCoupon");

function getValue(ID){
    let totalField = document.getElementById(ID);
    let totalString = totalField.innerText;
    let totalPrice = parseFloat(totalString);
    return totalPrice;
}
function setValue(value,ID){
    let Field = document.getElementById(ID);
    Field.innerText = value.toFixed(2);
}

function addToCart(event){
    let item = event.childNodes[3].childNodes[1].innerText;
    let priceNode = event.childNodes[3].childNodes[5].childNodes[0].innerText;
    let price = parseFloat(priceNode);

    let p = document.createElement("p");
    count++;
    p.innerHTML = `${count}.&nbsp;&nbsp;&nbsp;${item}`
    p.classList.add("removeItems");
    container.appendChild(p);

    let totalPrice = getValue("totalPrice");
    let total = totalPrice + price;
    setValue(total,"totalPrice");
    setValue(total,"total");
    
    if(total > 0){
        makePurchase.removeAttribute("disabled");
    }
    else{
        makePurchase.setAttribute("disabled",true);
    }
    if(total >= 200){
        btnApply.removeAttribute("disabled");
    }
    else{
        btnApply.setAttribute("disabled",true);
    }
}

btnApply.addEventListener("click", function (){
  let couponField = document.getElementById("inputCoupon");
  let couponText = couponField.value;
  if(couponText == "SELL20"){
    let totalPrice = getValue("totalPrice");
    let discount = (totalPrice/100)*20;
    let Total = totalPrice - discount; 
    setValue(discount,"discount");
    setValue(Total,"total");
  }
})

// function removeElement(){
//     let removee = document.querySelectorAll(".remove");
//     for (let remove of removee) {
//       remove.style.display = "none";
//     }
//     let totalField = document.getElementById("totalPrice");
//     totalField.innerText = "00";
//     count = 0;
// }