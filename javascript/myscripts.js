    //Page Specific Functions
    //My Ideas
    function createFunction() {
        var ideaname = document.getElementById("ideaname");
        var description = document.getElementById("description");
        var totalRowCount = document.getElementById("myideastable").getElementsByTagName("tr");
        var table = document.getElementById("myideastable");
        var row = table.insertRow(totalRowCount.count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = ideaname.value;
        cell2.innerHTML = description.value;
        localStorage.setItem("ideaname", ideaname.value);
        document.getElementById("ideaname").value="";
        document.getElementById("description").value="";
        console.log(localStorage.getItem("ideaname"));
    }

    function deleteFunction() {
        var totalRowCount = document.getElementById("myideastable").getElementsByTagName("tr");
        if (totalRowCount.length > 1) {
            document.getElementById("myideastable").deleteRow(totalRowCount.length - 1);
        } else {
           console.log("At Top")
        }
    }