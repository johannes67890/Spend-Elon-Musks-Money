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
        var popup = document.getElementById("popup_error");
        popup.classList.toggle("show");
        setTimeout(() => {
            popup.classList.toggle("hidden");
            setTimeout(() => {
                location.reload();
            }, 2000);
        }, 2000);
    }
 }