
// *******************************************************
// * Infomatik hjemmeside: 'Spend Elon Musks Money'      *
// * -----------------------------------------------     *
// * Programmeret og konstrukteret af Johannes Jørgensen *
// * I samarbejde med Hector Schreiner og Emil Juhl      *
// * (Med lidt hjælp fra Sebastian Bech)                 *
// *******************************************************

let amount = (150000000000).toLocaleString("ja-JP"); // amount balance avaliable. toLocaleString("ja-JP") for the comma between large numbers

function balance() //display of activ balance amount
{
    document.getElementById("money").innerHTML =  "$" + amount;  // prints to HTML
}

function sell_buy(opr, val, input_id) //event fuction for balance/input by buy/sell options
{
    /* change balance amount */
    var paramater = (opr == 'sell') ? +val : -val;                  // conditional for paramater for what buttons is pressed 'buy or sell'
    var new_amount = Number(amount.replace(/,/g, '')) + paramater;  // change 'var_amount' to number and plus with paramater
    amount = new_amount.toLocaleString("ja-JP");                    // add back comma on 'amount' 
    document.getElementById("money").innerHTML =  "$" + amount;     // print to screen
    
    /* change input amount */
    let input_amount = document.getElementById(input_id).value;         // Get value of input and assign it to new variable (value is '0' by default)
    input_amount = Number(input_amount) + ((opr == 'sell') ? -1 : +1) ; // Assign variable to new value from conditional (+1 or -1, depends on operator) 
    document.getElementById(input_id).value = input_amount;             // Print new input value.
}

function balance_error() //balance overflow and end-game when balance == 0.
{
    if (Number(amount.replace(/,/g, '')) > 150000000000) //check if balance is over start amount
    {
        alert("You are already over the balance limit! The page wil reload in a moment!") //alert
        setTimeout(() => {
            location.reload(); // reload page after 2 secs for resting balance amount back to default.
        }, 2000); 
    } 
    if (Number(amount.replace(/,/g, '')) <= 0) //check if balance reached under 0.
    {
        alert("Congratulations! You have spend all of Elon Musks money!"); //endgame alert
    }
}

function generateLayout(list) //layout generation fuction from 'list' paramater (see list.js for itemlist)
{
    list.map((item, index) => {
        layout(index, item.name, item.price, item.imgDir); //paramaters name,price and imgDir taken from 'list.js' to be used for layout()
    })
}



function layout(inputid, name,price,imgDir) //fuction to generate layout to HTML file (paramaters taken from list.map from generateLayout())
{
    /* Generate container */
    var container = document.createElement("div");                  // create element
    container.classList.add("item");                                // add class 'item' to element
    document.getElementById("containerid").appendChild(container);  // append element to parant (containerid)
    /* Generate img */
    var img = document.createElement("img");                        // create element
    img.src = imgDir;                                               // add img src from imgDir paramater
    img.classList.add("item_img");                                  // add class 'item_img to element
    container.appendChild(img);                                     // append element to parant (container)
    /* Generate name */
    var nameitem = document.createElement("div");                   // create element
    nameitem.innerHTML = name;                                      // insert name to element
    nameitem.classList.add("item_text");                            // add class 'item_text' to element
    container.appendChild(nameitem);                                // append element to parant (container)
    /* Generate price */
    var Display_price = (price).toLocaleString("ja-JP")             // convert 'price' to 'Display_price' to commas between large numbers 
    var priceitem = document.createElement("div");                  // create element
    priceitem.innerHTML = Display_price + "$";                      // insert 'Display_price' to element
    priceitem.classList.add("item_price");                          // add class 'item_price' to element
    container.appendChild(priceitem);                               // append element to parant (container)
    /* Generate action */
    var action = document.createElement("div");                     // create element
    action.classList.add("action");                                 // add class 'action' to element
    container.appendChild(action);                                  // append element to parant (container)
    /* Generate btn sell */
    var btnSell = document.createElement("button");                 // create element
    btnSell.addEventListener("click", () =>                         // event listener to functions
    {balance_error(); sell_buy('sell', price, inputid)})        
    btnSell.classList.add("sell");                                  // add class 'sell' to element
    btnSell.innerHTML = "Sell";                                     // insert "Sell" to element
    action.appendChild(btnSell);                                    // append elemet to parant (action)
    /* Generate input */
    var input = document.createElement("input");                    // create element  
    input.type = "number";                                          // enter type for element
    input.id = `${inputid}`;                                        // enter id for elemet from paramater
    input.value = "0";                                              // enter default value for element
    action.appendChild(input);                                      // append elemet for parant (action)
    /* Generate btn buy */
    var btnBuy = document.createElement("button");                  // create element 
    btnBuy.addEventListener("click", () =>                          // event listener to functions
    {balance_error(); sell_buy('buy', price, inputid)})
    btnBuy.classList.add("buy");                                    // add class 'buy' to element
    btnBuy.innerHTML = "Buy";                                       // insert "Buy" to element
    action.appendChild(btnBuy);                                     // append element to parant (action)
}
generateLayout(); // Generate layout after all calculations from layout()