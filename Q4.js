function calculateTotal() {
    var resNode = document.createElement("div");
    var resText;

    var numRose = parseInt(document.getElementById("rose").value);
    if (isNaN(numRose)) {
        alert("Please enter a number for Red Roses.");
        return;
    }
    var priceRose = numRose * 5.50;

    resText = document.createTextNode("Number of Red Roses: " + numRose + ", price of Red Roses: $" + priceRose);
    resNode.appendChild(resText);
    resNode.innerHTML += "<br/>";

    var numLily = parseInt(document.getElementById("lily").value);
    if (isNaN(numLily)) {
        alert("Please enter a number for Yellow Lillies.");
        return;
    }
    var priceLily = numLily * 7.50;

    resText = document.createTextNode("Number of Yellow Lillies: " + numLily + ", price of Yellow Lillies: $" + priceLily);
    resNode.appendChild(resText);
    resNode.innerHTML += "<br/>";

    var numCalla = parseInt(document.getElementById("scalla").value);
    if (isNaN(numCalla)) {
        alert("Please enter a number for White Mini Calla.");
        return;
    }
    var priceCalla = numCalla * 4.00;

    resText = document.createTextNode("Number of White Mini Callas: " + numCalla + ", price of White Mini Callas: $" + priceCalla);
    resNode.appendChild(resText);
    resNode.innerHTML += "<br/>";

    var numOrchid = parseInt(document.getElementById("orchid").value);
    if (isNaN(numOrchid)) {
        alert("Please enter a number for Pink Orchids.");
        return;
    }
    var priceOrchid = numOrchid * 8.00;

    resText = document.createTextNode("Number of Orchids: " + numOrchid + ", price of Orchids: $" + priceOrchid);
    resNode.appendChild(resText);
    resNode.innerHTML += "<br/>";

    var numDaisy = parseInt(document.getElementById("daisy").value);
    if (isNaN(numDaisy)) {
        alert("Please enter a number for Orange Daisies.");
        return;
    }
    var priceDaisy = numDaisy * 7.00;

    resText = document.createTextNode("Number of Daisies: " + numDaisy + ", price of Daisies: $" + priceDaisy);
    resNode.appendChild(resText);
    resNode.innerHTML += "<br/>";

    var totalPrice = priceRose + priceLily + priceCalla + priceOrchid + priceDaisy;
    var dev = 0.00;

    if (document.getElementById("standard").checked) {
        dev = 2.00;
        totalPrice += 2.00;
    }
    else if (document.getElementById("premium").checked) {
        dev = 6.00;
        totalPrice += 6.00;
    }
    else {
        alert("Please choose a delivery mode. ");
        return;
    }
    resText = document.createTextNode("Delivery: $" + dev);
    resNode.appendChild(resText);
    resNode.innerHTML += "<br/>";
    resText = document.createTextNode("Final Total price is: $" + totalPrice);
    var cont = document.getElementById("container");
    resNode.appendChild(resText);
    resNode.className = "result";
    cont.appendChild(resNode);
}