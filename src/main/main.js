function balance()
{
    amount = (100000000000).toLocaleString("ja-JP"); /*amount balance avaliable. toLocaleString("ja-JP") for the comma*/ 
    document.getElementById("money").innerHTML =  "$" + amount; /*prints to HTML*/
}