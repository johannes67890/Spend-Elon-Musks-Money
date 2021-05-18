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


let itemlist = [{
    parentid: "containerid",
    name: "pizza",
    price: 10,
    imgDir: "../img/pizza.png",
}]

function generateLayout()
{
    console.log("layout generated");
    itemlist.map((item, index) => {
        layout(index,item.parentid, item.name, item.price, item.imgDir);
    })
}

function layout(inputid, parentid, name,price,imgDir)
{
    //container
    var container = document.createElement("div");
    container.classList.add("item");
    //img
    var img = document.createElement("img");
    img.src = imgDir;
    img.classList.add("item_img");
    //name
    var nameitem = document.createElement("div"); //n for 'name'
    nameitem.innerHTML = name; //
    nameitem.classList.add("item_text");
    //price
    var priceitem = document.createElementById("div");
    priceitem.innerHTML = price + "$";
    priceitem.classList.add("item_price");
    //action
    var action = document.createElement("div");
    action.classList.add("action");
    //btn sell
    var btnSell = document.createElement("button");
    btnSell.onclick = `balance_error(); sell_buy('sell', ${price}, ${inputid})`;
    btnSell.classList.add("sell");
    btnSell.innerHTML = "Sell";
    //btn buy
    var btnBuy = document.createElement("button");
    btnBuy.onclick = `sell_buy('buy', ${price}, ${inputid})`;
    btnBuy.classList.add("buy");
    btnBuy.innerHTML = "Buy";
    // input
    var input = document.createElement("input");
    input.type = "number";
    input.id = `${inputid}`;
    input.value = "0";
    //
}

/*
function item_count(input_id)
{
    console.log(document.getElementById(input_id).value);
    let input = document.getElementById(input_id).value;
    input = Number(input) + 1;
    document.getElementById(input_id).innerText = input;
    console.log(input);
}*/