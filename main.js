function addField(argument) {
    var myTable = document.getElementById("myTable");
    var currentIndex = myTable.rows.length;
    var currentRow = myTable.insertRow(-1);

    var Customer = document.createElement("input");
    Customer.setAttribute("name", "Customer" + currentIndex);

    var Total = document.createElement("input");
    Total.setAttribute("name", "Total" + currentIndex);

    var In = document.createElement("input", placeholder = "In");
    In.setAttribute("name", "In" + currentIndex);

    var Out = document.createElement("input", type = "time");
    Out.setAttribute("name", "Out" + currentIndex);


    var addRowBox = document.createElement("input");
    addRowBox.setAttribute("type", "button");
    addRowBox.setAttribute("value", "Add another line");
    addRowBox.setAttribute("onclick", "addField();");
    addRowBox.setAttribute("class", "button");

    var currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Customer);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Total);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(In);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Out);


}

function GetDayTotal(tableId, colNumber) {
    var daytotal = 0;
    try {
        var tableElem = window.document.getElementById(tableId);
        var tablebody = tableElem.getElementsByTagName("tbody").item(0);
        var i = 0;

        var howManyRows = tablebody.rows.length; //works
        //iterate through table to acucmulate all total from the day
        for (i = 1; i < (howManyRows); i++) {
            daytotal = daytotal + parseInt(tablebody.rows[1].cells[1]);
            console.log(daytotal);

            var thistablerow = tablebody.rows[i];
            var thistablecol = thistablerow.cells[colNumber];
            var thisTextnode = thistablecol.childNodes;
            console.log(thisTextnode);

            if (debugScript) {
                window.alert("text is" + thisTextnode.data)
            }
            var thisNumber = parseFloat(thisTextNode.data);
            window.alert("Error Found");

            if (!isNaN(thisNumber))

                daytotal += thisNumber;
        }
    } catch (ex) {
        window.alert("There Seems to be a Problem");
        daytotal = 0;



    } finally {
        return daytotal;
    }
}

function DsiplayDayTotal() {
    //var tableelem = "DayTotal";
    try {
        var dayTotal = GetDayTotal("myTable", 1);
        var daytotalelem = window.document.getElementById("dayTotal");
        daytotalelem.innerHTML = dayTotal;
    } catch {
        window.alert("Unable to claculate Day Total")
    }
    return;
}

function TestStuff() {
    var total = 0;
    //var table = document.getElementById("myTayble");
    var tableElem = window.document.getElementById("myTable");

    var tablebody = tableElem.getElementsByTagName("tbody").item(0);
    var howManyRows = tablebody.rows.length;

    for (var i = 0; i < howManyRows; i++) {
        total = total + parseInt(tablebody.rows[i].cells[1].innerHTML)
    }
    final = document.getElementById("dayTotal").innerHTML = "Day Total  " + total;
    console.log(final);
    return;

}