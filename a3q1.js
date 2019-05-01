function findRegex() {
    var form1 = document.getElementById("form1");
    var textToDelim = form1.userText.value;
    var delimiter =form1.delimit.value;
    var regex = form1.reg.value;
    var modif = form1.mod.value;
    var regToCheck = new RegExp(regex,modif);
    var strArray = textToDelim.split(delimiter);
    var numWords=0;
    var regWorks = 0;

    for (var k in strArray) {
        if (strArray[k] !== "") {
            numWords++;
        }
        if (regToCheck.test(strArray[k])) {
            regWorks++;
        }
    }
    var result = document.getElementById("resblock");

    result.innerHTML = numWords + " correct words, " + regWorks + " of them contain the regex";
}