    function checkPage() {
        console.log(document.title);
        if (document.title == "My Ideas") {
            
        }
    }
    //Page Specific Functions
    //My Ideas
    function addIdea() {
        //Table Variable
        var totalRowCount = document.getElementById("myideastable").getElementsByTagName("tr");
        var table = document.getElementById("myideastable");
        var row = table.insertRow(totalRowCount.count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        //Idea Name input
        var ideaNameInput = document.createElement("input");
        ideaNameInput.id = "ideaname";
        //Description Input
        var descriptionInput = document.createElement("input");
        descriptionInput.id = "description";
        //New Row
        cell1.appendChild(ideaNameInput);
        cell2.appendChild(descriptionInput);
    }

    function removeIdea() {
        var deleteRowPosition = document.getElementById("deleterowpositioninput").value;
        var deleteRows = document.getElementById("myideastable").getElementsByTagName("tr");
        if (deleteRows.length >= 2) {
            document.getElementById("myideastable").deleteRow(deleteRowPosition);
        }
        document.getElementById("deleterowpositioninput").value = "1";
    }

     //Project Page
     //Project Page To Do
     function addToDoRow() {
        //Table Variable
        var totalRowCount = document.getElementById("todotable").getElementsByTagName("tr");
        var table = document.getElementById("todotable");
        var row = table.insertRow(totalRowCount.count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        //Status Select
        var statusSelect = document.createElement("select");
        statusSelect.className = "statusselect";
        //Options
        var option1 = document.createElement("option");
        var option2 = document.createElement("option");
        var option3 = document.createElement("option");
        var option4 = document.createElement("option");
        option1.text = "Not Started";
        option2.text = "Started";
        option3.text = "Debugging";
        option4.text = "Done";
        statusSelect.options.add(option1);
        statusSelect.options.add(option2);
        statusSelect.options.add(option3);
        statusSelect.options.add(option4);
        //Input
        //Name Input
        var todonameinput = document.createElement("input");
        todonameinput.className = "textboxinputname";
        //Description Input
        var tododescriptioninput = document.createElement("input");
        tododescriptioninput.className = "textboxinputdescription";
        //New Row
        cell1.appendChild(statusSelect);
        cell2.appendChild(todonameinput);
        cell3.appendChild(tododescriptioninput);
     }

     function deleteToDoRow() {
        var deleteRowPosition = document.getElementById("deletetodorowbuttoninput").value;
        var deleteRows = document.getElementById("todotable").getElementsByTagName("tr");
        if (deleteRows.length >= 2) {
            document.getElementById("todotable").deleteRow(deleteRowPosition);
        }
        document.getElementById("deletetodorowbuttoninput").value = "1";
     }

     function changeOptionColor() {
        var statusSelectOption = document.getElementsByClassName("statusselect").getElementsByTagName("option");
        if (statusSelectOption.value == "1") {
            console.log("cheese");
        }
     }
     //Project Page Design
     function designAddPage() {
        var page = document.createElement("div");
     }


