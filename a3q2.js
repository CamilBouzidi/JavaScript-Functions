var varChosen;
var arrayVar = [" "];
function validate() {
    varChosen = document.getElementById("chosen").value;
    if (varChosen.search(/^[a-z][\w\_]*/) != -1) {
        document.getElementById("chosen").className = "regular";
        return true;
    }
    else {
        document.getElementById("chosen").className = "incorrect";
        return false;
    }
}

function add() {
    var res = document.getElementById("res");
    varChosen = document.getElementById("chosen").value;
    var arrayMatch = true;
    if (validate()) {
        for (var k in arrayVar) {
            if (arrayVar[k] === varChosen) {
                arrayMatch = false;
                break;
            }
        }
        if (arrayMatch == true) {
            arrayVar.push(varChosen);
            var item = document.createElement("li");
            var txt = document.createTextNode(varChosen);
            item.appendChild(txt);
            res.appendChild(item);
        }
    }
}