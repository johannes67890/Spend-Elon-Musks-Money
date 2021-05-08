amount = (100000000000).toLocaleString("ja-JP"); /*amount balance avaliable. toLocaleString("ja-JP") for the comma*/ 
function balance()
{
    document.getElementById("money").innerHTML =  "$" + amount; /*prints to HTML*/
}

function sell_buy(opr, val)
{
    var x = (opr == 'sell') ? +val : -val; /* conditional */
    new_amount = Number(amount.replace(/,/g, '')) + x; /*change 'var_amount' to number and plus with paramater*/
    amount = new_amount.toLocaleString("ja-JP"); /* add back comma on 'amount' */
    document.getElementById("money").innerHTML =  "$" + amount; /* print to screen */
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