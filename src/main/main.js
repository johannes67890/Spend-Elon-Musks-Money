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
    name: "pizza",
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

function layout(parent, name,price,imgDir)
{
    var n = document.createElement("div");
    n.innerHTML = name;
    n.classList.add("item_text");
    var element = document.getElementById(parent);
    parent.appendChild(n);

    /*
    var img = document.createElement("img");
    img.src = imgDir;
    img.classList.add("item_img");
    img = document.getElementById("item1");
    img.appendChild(src); */
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