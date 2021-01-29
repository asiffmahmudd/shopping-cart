

document.getElementById("item-1-minus").addEventListener("click", function(){
    subtractAmount("item-1");
});
document.getElementById("item-2-minus").addEventListener("click", function(){
    subtractAmount("item-2");
});
document.getElementById("item-1-plus").addEventListener("click", function(){
    addAmount("item-1");
});
document.getElementById("item-2-plus").addEventListener("click", function(){
    addAmount("item-2");
});


function subtractAmount(id){
    var x = document.getElementById(id).value;
    var price = parseInt(document.getElementById(id+"-price").textContent.substr(1,));
    if(x > 0){
        document.getElementById(id).value = parseInt(x) - 1;
        if(id[id.length-1] == 1){
            document.getElementById(id+"-price").textContent = "$" +(price-1219);
        }else{
            document.getElementById(id+"-price").textContent = "$" +(price-59);
        }
        calculateTotal();
    }
}

function addAmount(id){
    var x = document.getElementById(id).value;
    document.getElementById(id).value = parseInt(x) + 1;
    var price = parseInt(document.getElementById(id+"-price").textContent.substr(1,));
    if(id[id.length-1] == 1){
        document.getElementById(id+"-price").textContent = "$" +(price+1219);
    }else{
        document.getElementById(id+"-price").textContent = "$" +(price+59);
    }
    calculateTotal();
}

function calculateTotal(){
    var item_len = document.getElementsByClassName('cart-item').length -1;
    var sum = 0;
    for(var i = 1; i <= item_len; i++){
        var x = "item-"+i+"-price";
        var sum = sum + parseInt(document.getElementById(x).textContent.substr(1,));
    }
    document.getElementById("sub-total").textContent = "$"+sum;
    document.getElementById("total").textContent = "$"+sum;
}