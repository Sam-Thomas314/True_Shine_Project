function addField(argument) {
    var myTable = document.getElementById("myTable");
    var currentIndex = myTable.rows.length;
    var currentRow = myTable.insertRow(-1);

    var Customer = document.createElement("INPUT");
    Customer.setAttribute("name", "Customer" + currentIndex);

    var Total = document.createElement("INPUT");
    Total.setAttribute("name", "Total" + currentIndex);
    //document.getElementsByName("Total" + currentIndex).placeholder = "Total";


    var In = document.createElement("INPUT");
    In.setAttribute("name", "In" + currentIndex);

    var Out = document.createElement("INPUT");
    Out.setAttribute("name", "Out" + currentIndex);

    var pure_water = document.createElement("INPUT");
    pure_water.setAttribute("type", "checkbox");
    pure_water.setAttribute("name", "pure_water" + currentIndex);
    pure_water.setAttribute("onclick", "power_adjust_day_total()");

    var power_washing = document.createElement("INPUT");
    power_washing.setAttribute("type", "checkbox");
    power_washing.setAttribute("name", "power_washing" + currentIndex);


    var addRowBox = document.createElement("input");
    addRowBox.setAttribute("type", "button");
    addRowBox.setAttribute("value", "Add another line");
    addRowBox.setAttribute("onclick", "addField();");
    addRowBox.setAttribute("class", "button");
    addRowBox.setAttribute("type", "checkbox");
    addRowBox.setAttribute("type", "checkbox");

    var currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Customer);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Total);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(In);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Out);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(pure_water);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(power_washing);


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

function pure_adjust_day_total() {
    var checkBox = document.getElementById("pure_water");
    origional_total = document.getElementById("total").value;
    var current_total = document.getElementById("total").value;
    //var pure_total = origional_total;

    if (current_total < origional_total) {
        current_total = current_total;
    } else {
        if (checkBox.checked == true) {
            current_total = current_total - (origional_total * (1 / 4));
            checkBox.disabled = true;

        } else {
            current_total = current_total;
        }
    }
    document.getElementById("total").value = current_total;
}
var globaltotal = document.getElementById("total");
//console.log(globaltotal);


function power_adjust_day_total() {
    var checkBox = document.getElementById("power_washing");
    origional_total = document.getElementById("total").value;
    var current_total = document.getElementById("total").value;
    //var power_total = power_origional_total;

    if (current_total < origional_total) {
        current_total = current_total;
    } else {
        if (checkBox.checked == true) {
            current_total = current_total - (origional_total * (2 / 100));
            checkBox.disabled = true;
        } else {
            current_total = current_total;
        }
    }
    document.getElementById("total").value = current_total;
}

function onLoadListeners() {
    var pay_1 = document.getElementById("pay_tech1");
    pay_1.addEventListener("keyup", function(event) {
        document.getElementById("tech1pay").click();
    });

    var pay_2 = document.getElementById("pay_tech2");
    pay_2.addEventListener("keyup", function(event) {
        document.getElementById("tech2pay").click();
    });

    var pay_3 = document.getElementById("pay_tech3");
    pay_3.addEventListener("keyup", function(event) {
        document.getElementById("tech3pay").click();
    });

    var pay_4 = document.getElementById("pay_tech4");
    pay_4.addEventListener("keyup", function(event) {
        document.getElementById("tech4pay").click();
    });

    var tech_total = document.getElementById("tech_total");
    tech_total.addEventListener("keyup", function(event) {
        document.getElementById("tech_total_button").click();
    });

    var hours_tech1 = document.getElementById("hours_tech1");
    hours_tech1.addEventListener("keyup", function(event) {
        document.getElementById("totalhours1").click();
    });
}

function get_tech1_pay() {
    var total_pay = document.getElementById("pay_tech1");
    var tech1_hours = document.getElementById("hours_tech1").value;
    var tech1_rate = document.getElementById("rate_tech1").value;
    total_pay.value = (tech1_hours * tech1_rate);
}

function get_tech2_pay() {
    var total_pay = document.getElementById("pay_tech2");
    var tech2_hours = document.getElementById("hours_tech2").value;
    var tech2_rate = document.getElementById("rate_tech2").value;
    total_pay.value = (tech2_hours * tech2_rate);
}

function get_tech3_pay() {
    var total_pay = document.getElementById("pay_tech3");
    var tech3_hours = document.getElementById("hours_tech3").value;
    var tech3_rate = document.getElementById("rate_tech3").value;
    total_pay.value = (tech3_hours * tech3_rate);
}

function get_tech4_pay() {
    var total_pay = document.getElementById("pay_tech4");
    var tech4_hours = document.getElementById("hours_tech4").value;
    var tech4_rate = document.getElementById("rate_tech4").value;
    total_pay.value = (tech4_hours * tech4_rate);
}

function get_tech_total() {
    arr = [];
    var sum = 0;
    arr.push(document.getElementById("pay_tech1").value);
    arr.push(document.getElementById("pay_tech2").value);
    arr.push(document.getElementById("pay_tech3").value);
    arr.push(document.getElementById("pay_tech4").value);
    //convert array of strings to array of integers
    for (var i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    for (var k = 0; k < arr.length; k++) {
        sum += arr[k];
    }
    var tech_total = document.getElementById("tech_total");
    tech_total.value = sum;
}

function get_tech1_hours() {
    var tech1_in = document.getElementById("tech1_in").value;
    var tech1_out = document.getElementById("tech1_out").value;

    //if (moment(tech1_out.isBefore(tech1_in))) tech1_out.add(1, 'day');

    if (tech1_in && tech1_out) {
        tech1_in = tech1_in.ConvertToSeconds;
        tech1_out = tech1_out.ConvertToSeconds;
        var diff = Math.abs(tech1_in - tech1_out);
        //console.log("Time Difference is: " + diff);
    }
}