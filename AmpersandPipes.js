var dom;
function getElementAmpersandPipes() {
    dom = document.getElementById("field");
    dom.addEventListener("blur", convertAmpersandPipes, false);
}
function convertAmpersandPipes() {
    var val = dom.value;
    var ampSearch = val.search(/&/);
    var sub1 = "null1";
    var sub2 = "null2";
    while (ampSearch != -1) {
        sub1 = val.substring(0, ampSearch);
        sub2 = " and " + val.substring(ampSearch + 1);
        val = sub1.concat(sub2);
        ampSearch = val.search(/&/);
    }
    var pipeSearch = val.search(/\|/);
    while (pipeSearch != -1) {
        sub1 = val.substring(0, pipeSearch);
        sub2 = " or " + val.substring(pipeSearch + 1);
        val = sub1.concat(sub2);
        pipeSearch = val.search(/\|/);
    }
    document.getElementById("res").value = val;
}
window.addEventListener("load", getElementAmpersandPipes, false); 