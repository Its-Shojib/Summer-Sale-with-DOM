// Shared Items
let container = document.getElementById("container")
let count = container.childElementCount;
count = 0;
let makePurchase = document.getElementById("btnMakePurchase");
let btnApply = document.getElementById("btnCoupon");

function getValue(ID) {
    let totalField = document.getElementById(ID);
    let totalString = totalField.innerText;
    let totalPrice = parseFloat(totalString);
    return totalPrice;
}
function setValue(value, ID) {
    let Field = document.getElementById(ID);
    Field.innerText = value.toFixed(2);
}

function Clear() {
    document.getElementById("inputCoupon").value = "";
    document.getElementById("totalPrice").innerText = "00.00";
    document.getElementById("discount").innerText = "00.00";
    document.getElementById("total").innerText = "00.00";
}

function addToCart(event) {
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
    setValue(total, "totalPrice");
    setValue(total, "total");
    /* Make Purchase button Enable/Disable */
    if (count > 0) {
        makePurchase.removeAttribute("disabled");
    }
    else {
        makePurchase.setAttribute("disabled", true);
    }
    /* Apply button Enable/Disable */
    if (total >= 200) {
        btnApply.removeAttribute("disabled");
    }
    else {
        btnApply.setAttribute("disabled", true);
    }
}

/* Apply Coupon Button and Set the Discount Value */
btnApply.addEventListener("click", function () {
    let couponField = document.getElementById("inputCoupon");
    let couponText = couponField.value;
    if (couponText == "SELL20") {
        let totalPrice = getValue("totalPrice");
        let discount = (totalPrice / 100) * 20;
        let Total = totalPrice - discount;
        setValue(discount, "discount");
        setValue(Total, "total");
    }
})



/*Go Home Button Event and Clear all the Field */
document.getElementById("goHome").addEventListener("click", function () {
    let items = document.querySelectorAll(".removeItems");
    for (let item of items) {
        item.style.display = "none";
    }
    count = 0;
    Clear();
    makePurchase.setAttribute("disabled", true)
    /*This line is so so easy😁 but i have created the difficult one😐 */
    /*location.reload();*/
})