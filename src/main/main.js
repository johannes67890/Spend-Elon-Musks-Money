
let amount = (150000000000).toLocaleString("ja-JP"); /*amount balance avaliable. toLocaleString("ja-JP") for the comma*/ 

function balance()
{
    document.getElementById("money").innerHTML =  "$" + amount; /*prints to HTML*/
}

function sell_buy(opr, val, input_id)
{
    //change balance amount
    var x = (opr == 'sell') ? +val : -val; /* conditional */
    var new_amount = Number(amount.replace(/,/g, '')) + x; /*change 'var_amount' to number and plus with paramater*/
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
    if (Number(amount.replace(/,/g, '')) > 150000000000)
    {
        console.log(amount);
        alert("You are already over the balance limit! The page wil reload in a moment!")
        setTimeout(() => {
            location.reload();
        }, 2000);
    } 
    if (Number(amount.replace(/,/g, '')) <= 0)
    {
        alert("Congratulations! You have spend all of Elon Musks money!");
    }
}

function generateLayout(list)
{
    console.log("layout generated");
    list.map((item, index) => {
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
    var Display_price = (price).toLocaleString("ja-JP")
    var priceitem = document.createElement("div");
    priceitem.innerHTML = Display_price + "$";
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
    //btn buy
    var btnBuy = document.createElement("button");
    btnBuy.addEventListener("click", () => {balance_error(); sell_buy('buy', price, inputid)})
    btnBuy.classList.add("buy");
    btnBuy.innerHTML = "Buy";
    action.appendChild(btnBuy);
}
generateLayout();