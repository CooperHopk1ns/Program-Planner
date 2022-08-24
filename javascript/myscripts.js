    //Page Specific Functions
    //My Ideas
    //Variables
    var ideaNameStorageKey;
    var ideaDescriptionStorageKey;
    var ideaStorageKeyCount;
    var myideas = [];
    //Add Idea
    function addIdea() {
        //Table Variable
        var totalRowCount = document.getElementById("myideastable").getElementsByTagName("tr");
        var table = document.getElementById("myideastable");
        var row = table.insertRow(totalRowCount.count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        //Idea Name input
        var ideaNameInput = document.createElement("textarea");
        ideaNameInput.id = "ideaname";
        //Description Input
        var descriptionInput = document.createElement("textarea");
        descriptionInput.id = "description";
        //New Row
        cell1.appendChild(ideaNameInput);
        cell2.appendChild(descriptionInput);
        //Storage
        ideaStorageKeyCount += 1;
    }
    function ideaStorage() {
        console.log("blue");

    }
    //Remove Idea
    function removeIdea() {
        var deleteRowPosition = document.getElementById("deleterowpositioninput").value;
        var deleteRows = document.getElementById("myideastable").getElementsByTagName("tr");
        if (deleteRows.length >= 2) {
            document.getElementById("myideastable").deleteRow(deleteRowPosition);
        }
        document.getElementById("deleterowpositioninput").value = "1";
    }
    //Create New Project
     //Variables
     var selectedPlatform;
     var selectedLayout;
     //Functions
     function createProject() {
        //Variables
        var projectName;
        var projectPlatform;
        var projectLayout;
        //Project Name
        projectName = document.getElementById("ideanametext").value;
        console.log(projectName);
        //Project Platform
        checkPlatform();
        projectPlatform = selectedPlatform;
        console.log(projectPlatform);
        //Project Layout
        checkLayout();
        projectLayout = selectedLayout;
        console.log(projectLayout);
        //Storage
        sessionStorage.setItem("newProjectName", projectName);
        sessionStorage.setItem("newProjectPlatform", projectPlatform);
        sessionStorage.setItem("newProjectLayout", projectLayout);
        //Redirect
        if (projectLayout.value != "" && projectName != "" && projectPlatform.value != "") {
        location.href = "/projects/project.html";
        }
     }
     function checkPlatform() {
        var options = document.getElementsByName("platformradiobuttons");
        for (i=0; i<options.length; i++) {
            if (options[i].checked) {
                selectedPlatform = options[i].id;
            }
        }
     }
     function checkLayout() {
        var options = document.getElementsByName("layoutradiobuttons");
        for (i=0; i<options.length; i++) {
            if (options[i].checked) {
                selectedLayout = options[i].id;
            }
        }
     }
     //Project Page
     //Variables
     var myprojects = [];
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
        var todonameinput = document.createElement("textarea");
        todonameinput.className = "textboxinputname";
        //Description Input
        var tododescriptioninput = document.createElement("teaxtarea");
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

     //All Page Functions
     function checkPage() {
        console.log(document.title);
        if (document.title == "My Ideas") {
            document.getElementById("myideaslink").style.color = "#f08700";
            document.getElementById("myideaslinkimage").style.fill = "f08700";
        } else if (document.title == "Create New Project") {
            if (myideas.length == 0) {
                document.getElementById("ideadropdown").style.display = "none";
                document.getElementById("ideah3").style.display = "none";
            }
            document.getElementById("createnewprojectlink").style.color = "#f08700";
            document.getElementById("createnewprojectlinkimage").style.fill = "#f08700";
        } else if (document.title == "My Projects" || document.title == "Project Design" || document.title == "Project To Do" || document.title == "Project") {
            document.getElementById("myprojectslink").style.color = "#f08700";
            document.getElementById("myprojectslinkimage").style.fill = "#f08700";    
        } else if (document.title == "About Us") {
            document.getElementById("aboutlink").style.color = "#f08700";
            document.getElementById("aboutlinkimage").style.fill = "#f08700";
        } else if (document.title == "Settings - Project Defaults" || document.title == "Settings - Base Settings") {
            document.getElementById("settingslink").style.color = "#f08700";
            document.getElementById("settingslinkimage").style.fill = "#f08700";
        } else if (document.title == "My Account") {
            document.getElementById("accountlink").style.color = "#f08700";
            document.getElementById("accountlinkimage").style.fill = "#f08700";
        }
    }
