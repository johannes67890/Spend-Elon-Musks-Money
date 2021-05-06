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
    if (Number(amount.replace(/,/g, '')) > 100000000000)
    {
        console.log(amount);
        var warning = document.getElementById("warning");
        warning.classList.toggle("warningShow");
        console.log("test1");
        for (var i = 0; i < 5; i++)
        {
            console.log("test2");
            setTimeout(() => {
                warning.classList.toggle("warningHide");
            }, 1000);
        }


        var popup = document.getElementById("popup_error");
        popup.classList.toggle("show");
        setTimeout(() => {
            popup.classList.toggle("hidden");
        }, 2000);
    }
 }