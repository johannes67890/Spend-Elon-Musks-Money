amount = (100000000000).toLocaleString("ja-JP"); /*amount balance avaliable. toLocaleString("ja-JP") for the comma*/ 

function balance()
{
    document.getElementById("money").innerHTML =  "$" + amount; /*prints to HTML*/
}

function sell_buy(opr, val, input_id)
{
    //change balance amount
    var x = (opr == 'sell') ? +val : -val; /* conditional */
    new_amount = Number(amount.replace(/,/g, '')) + x; /*change 'var_amount' to number and plus with paramater*/
    amount = new_amount.toLocaleString("ja-JP"); /* add back comma on 'amount' */
    document.getElementById("money").innerHTML =  "$" + amount; /* print to screen */
    //change input amount
    console.log(document.getElementById(input_id).value); //
    let input_amount = document.getElementById(input_id).value;
    input_amount = Number(input_amount) + ((opr == 'sell') ? -1 : +1) ;
    console.log(input_amount); //
    document.getElementById(input_id).value = input_amount;
}

function balance_error()
{
    if (Number(amount.replace(/,/g, '')) >= 100000000000)
    {
        console.log(amount);
        alert("You are over the balance limit! The page wil reload in a moment!")
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}

let itemlist = 
[
{
    name: "Coke",
    price: 3,
    imgDir: "../img/coke.png",
},
{
    name: "Coffee",
    price: 5,
    imgDir: "../img/coffee.png",
},
{
    name: "Pizza",
    price: 10,
    imgDir: "../img/pizza.png",
}]

function generateLayout()
{
    console.log("layout generated");
    itemlist.map((item, index) => {
        layout(index, item.name, item.price, item.imgDir);
    })
}

function layout(inputid, name,price,imgDir)
{
    //container
    var container = document.createElement("div");
    container.classList.add("item");
    document.getElementById("containerid").appendChild(container);
    //img
    var img = document.createElement("img");
    img.src = imgDir;
    img.classList.add("item_img");
    container.appendChild(img);
    //name
    var nameitem = document.createElement("div"); //n for 'name'
    nameitem.innerHTML = name; //
    nameitem.classList.add("item_text");
    container.appendChild(nameitem);
    //price
    var priceitem = document.createElement("div");
    priceitem.innerHTML = price + "$";
    priceitem.classList.add("item_price");
    container.appendChild(priceitem);
    //action
    var action = document.createElement("div");
    action.classList.add("action");
    container.appendChild(action);
    //btn sell
    var btnSell = document.createElement("button");
    btnSell.addEventListener("click", () => {balance_error(); sell_buy('sell', price, inputid)})
    btnSell.classList.add("sell");
    btnSell.innerHTML = "Sell";
    action.appendChild(btnSell);
    // input
    var input = document.createElement("input");
    input.type = "number";
    input.id = `${inputid}`;   
    input.value = "0";
    action.appendChild(input);
    //
    //btn buy
    var btnBuy = document.createElement("button");
    btnBuy.addEventListener("click", () => sell_buy('buy', price, inputid))
    btnBuy.classList.add("buy");
    btnBuy.innerHTML = "Buy";
    action.appendChild(btnBuy);
}