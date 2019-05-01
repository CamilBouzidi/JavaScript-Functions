function expSuggesAppear() {
    resNode = document.getElementById("res");
    dtown = document.getElementById("dtown");
    lowerbound = document.getElementById("50to80").value;
    upperbound = document.getElementById("80to100").value;
    pRange = document.frm.pRange.value;
    if (dtown.checked == true) {
        if ((upperbound == pRange) || (lowerbound == pRange)) {
            resNode.style.visibility = "visible";
        }
        else {
            resNode.style.visibility = "hidden";
        }
    }
    else {
        resNode.style.visibility = "hidden";
    }
    
}