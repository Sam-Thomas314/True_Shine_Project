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

function GetDayTotal(tableId, columnnumber) {
    var daytotal = 0;
    
    var table = document.getElementById(tableId);
    document.getElementsByClassName("total")

    for (var r = 1, n = table.rows.length; r < n; r++) {
        var x = r.getElementById("myNumber").value;
        daytotal += thiscell;
        console.log(daytotal);

          //  console.log(table.rows[r].cells[columnnumber].value);
        }
    
   // console.log(daytotal);

    //var rows = table.getElementsByTagName("tr");
    
    //var rowlength = table.rows.length;
    //console.log(rowlength);
    return daytotal;
}

function DisplayDayTotal() {
    //var tableelem = "DayTotal";
       // var tableElemname = "myTable";

        var dayTotal = GetDayTotal("myTable", 1);
        var daytotalelem = window.document.getElementById("dayTotal");
        daytotalelem.innerHTML = dayTotal;

       // window.alert("Unable to claculate Day Total")
 
        return;
}
function AdjustedTotal(){

}