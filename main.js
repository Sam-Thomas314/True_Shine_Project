function addField(argument) {
    var myTable = document.getElementById("myTable");
    var currentIndex = myTable.rows.length;
    var currentRow = myTable.insertRow(-1);

    var Customer = document.createElement("input");
    Customer.setAttribute("name", "Customer" + currentIndex);

    var Total = document.createElement("input");
    Total.setAttribute("name", "Total" + currentIndex);
    //document.getElementsByName("Total" + currentIndex).placeholder = "Total";


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

function add_customer_total() {
    var totals = document.getElementsByTagName("input");
    var Day_Total = document.getElementById("dayTotal");
    var total = 0;

    for (var i = 0; i < totals.length; i++) {
        var ip = totals[i];
        if (ip.name && ip.name.indexOf("total") < 0) {
            total += parseInt(ip.value) || 0;
        }
    }
    var daytotalelem = window.document.getElementById("dayTotal");
    daytotalelem.innerHTML = total;
}