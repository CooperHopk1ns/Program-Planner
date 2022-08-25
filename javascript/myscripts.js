    //Variables
    //Page Specific Functions
    //My Ideas
    //Variables
    var ideaNameStorageKey;
    var ideaDescriptionStorageKey;
    var ideaStorageKeyCount;
    var myideas = [];
    var myideasdescription = [];
    var myideasID = [];
    //JSON Check
    function JSONCheck() {
        if (myideas === null) {
            myideas = [];
        }
        if (myideasdescription === null) {
            myideasdescription = [];
        }
        if (myideasID === null) {
            myideasID = [];
        }
        if (myideas === [] && myideasdescription === []) {
            myideasID = [];
        }
        console.log("JSON Checked");
    }
    //Add Idea
    function addIdea() {
        //Fetch Local Storage
        myideas = JSON.parse(localStorage.getItem("myideas"));
        myideasdescription = JSON.parse(localStorage.getItem("myideasdescription"));
        myideasID = JSON.parse(localStorage.getItem("myideasID"));
        JSONCheck();
        //Random Id Variable
        var randomId = Math.floor(Math.random() * 1000);
        //Table Variable
        var totalRowCount = document.getElementById("myideastable").getElementsByTagName("tr");
        var table = document.getElementById("myideastable");
        var row = table.insertRow(totalRowCount.count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        //Idea Name input
        var ideaNameInput = document.createElement("textarea");
        ideaNameInput.className = "ideaname";
        ideaNameInput.id = "idea" + randomId;
        //Description Input
        var descriptionInput = document.createElement("textarea");
        descriptionInput.className = "description";
        descriptionInput.id = "description" + randomId;
        //New Row
        cell1.appendChild(ideaNameInput);
        cell2.appendChild(descriptionInput);
        //Storage
        myideasID.push(randomId);
        localStorage.setItem("myideas", JSON.stringify(myideas));
        localStorage.setItem("myideasdescription", JSON.stringify(myideasdescription));
        localStorage.setItem("myideasID", JSON.stringify(myideasID));
        localStorage.setItem("idea"+randomId, ideaNameInput.value)
        localStorage.setItem("description"+randomId, descriptionInput.value);
    }
     //Remove Idea
    //Remove Idea From Arrays Then Add Storage
    function removeIdea() {
        //Fetch Local Storage
        myideas = JSON.parse(localStorage.getItem("myideas"));
        myideasdescription = JSON.parse(localStorage.getItem("myideasdescription"));
        myideasID = JSON.parse(localStorage.getItem("myideasID"));
        JSONCheck();
        //Delete
        var deleteRowPosition = document.getElementById("deleterowpositioninput").value;
        var deleteRows = document.getElementById("myideastable").getElementsByTagName("tr");
        if (deleteRows.length >= 2) {
            document.getElementById("myideastable").deleteRow(deleteRowPosition);
        }
        //Arrays
        document.getElementById("deleterowpositioninput").value = document.getElementById("deleterowpositioninput").value - 1;
        var index = document.getElementById("deleterowpositioninput");
        //Splicing
        myideas.splice(index.value, 1);
        myideasdescription.splice(index.value, 1);
        myideasID.splice(index.value, 1);
        console.log(myideas);
        //Storage
        localStorage.removeItem("idea" + myideasID[index.value]);
        localStorage.removeItem("description" + myideasID[index.value]);
        localStorage.setItem("myideas", JSON.stringify(myideas));
        localStorage.setItem("myideasdescription", JSON.stringify(myideasdescription));
        localStorage.setItem("myideasID", JSON.stringify(myideasID));
        //Reset
        document.getElementById("deleterowpositioninput").value = "1";
    }
    function ideaStorage() {
        //Fetch Local Storage
        myideas = JSON.parse(localStorage.getItem("myideas"));
        myideasdescription = JSON.parse(localStorage.getItem("myideasdescription"));
        myideasID = JSON.parse(localStorage.getItem("myideasID"));
        JSONCheck();
        //Array Push
        for (i=0; i<myideasID.length; i++) {
            var ideaText = document.getElementById("idea" + myideasID[i]);
            if (ideaText != null) {
            myideas[i] = document.getElementById("idea" + myideasID[i]).value;
            myideasdescription[i] = document.getElementById("description" + myideasID[i]).value;
            }
        }
        //Storage
        localStorage.setItem("myideas", JSON.stringify(myideas));
        localStorage.setItem("myideasdescription", JSON.stringify(myideasdescription));
        localStorage.setItem("myideasID", JSON.stringify(myideasID));
    }
    //Create New Project
    //Variables
    var selectedPlatform;
    var selectedLayout;
    var newProject = false;
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
        if (projectLayout != "" && projectName != "" && projectPlatform != "") {
        location.href = "/projects/my-projects.html";
        newProject = true;
        sessionStorage.setItem("newprojectcreated", newProject);
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
     //My Projects Page
     function newProjectLink() {
        var newDefaultLayout = sessionStorage.getItem("defaultlayout");
        document.getElementById("projectlinklayout").text = newDefaultLayout.value;
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
     
     //Project Page
     var newPage;
     //SVG Variables
     var reversesidebarlayout = document.getElementById("reversesidebarlayout");
     var newreversesidebarlayout = document.createElement(reversesidebarlayout);
     function showDesignAddPage() {
        document.getElementById("designpageselector").style.display = "block";
     } 
     function addDesignPage() {
        checkLayout();
        newreversesidebarlayout;
        newreversesidebarlayout.style.display = "block";
        console.log("w")
     }
     function checkLayout() {
        var options = document.getElementsByName("pagelayoutradiobuttons");
        for (i=0; i<options.length; i++) {
            if (options[i].checked) {
                newPage = options[i].id;
            }
        }
     }
     //My Account Page
     function createNewAccount() {
        //Variabls
        //Account Variables
        var username;
        var password;
        var hasaccount = Boolean;
        //Signup Variables
        var passwordcheck;
        //Account Creation
        username = document.getElementById("newuserinput").value;
        password = document.getElementById("newpasswordinput").value;
        passwordcheck = document.getElementById("newpasswordinputcheck").value;
        if (password == passwordcheck && password != "" && username != "") {
            alert("Account Created!")
            document.getElementById("createnewaccount").style.display = "none";
            document.getElementById("loginaccount").style.display = "none";
            document.getElementById("createaccountorlogintext").style.display = "none";
            document.getElementById("accountpage").style.display = "block";
            localStorage.setItem("username", username);
            localStorage.setItem("password", password); 
            hasaccount = true;   
            sessionStorage.setItem("hasaccount", hasaccount);        
        } else {
            alert("Account Error, Please Retry Later");
        }
        document.getElementById("newuserinput").value = "";
        document.getElementById("newpasswordinput").value = "";
        document.getElementById("newpasswordinputcheck").value = "";
     }
     function accountLogin() {
        username = localStorage.getItem("username");
        password = localStorage.getItem("password");
        console.log(password)
        var usernamelogincheck;
        var passwordlogincheck;
        usernamelogincheck = document.getElementById("usernamelogininput").value;
        passwordlogincheck = document.getElementById("passwordlogininput").value;
        if (username == usernamelogincheck && password == passwordlogincheck) {
            alert("Login Successful")
            document.getElementById("createnewaccount").style.display = "none";
            document.getElementById("loginaccount").style.display = "none";
            document.getElementById("createaccountorlogintext").style.display = "none";
            document.getElementById("accountpage").style.display = "block";
            hasaccount = true;
            sessionStorage.setItem("hasaccount", hasaccount);
        } else {
            alert("Account Error, Please Retry Later");
        }
        document.getElementById("newuserinput").value = "";
        document.getElementById("newpasswordinput").value = "";
        document.getElementById("newpasswordinputcheck").value = "";
     }
     //Settings Page
     //Base Settings Page
     function changeColor() {
        var newcolor = document.getElementById("changecolorinput").value;
        document.getElementById("wrapper").style.backgroundColor = newcolor;
        localStorage.setItem("backgroundColor", newcolor);
        document.getElementById("changecolorinput").value = "";
     }
     function resetColor() {
        document.getElementById("wrapper").style.backgroundColor = "white";
        localStorage.setItem("backgroundColor", "white");
     }
     //Project Defaults Page
     var defaultplatform;
     var defaultlayout;
     function setDefaultPlatform() {
        checkDefaultPlatform();
        localStorage.setItem("defaultplatform", defaultplatform);
        checkDefaultLayout();
        localStorage.setItem("defaultlayout", defaultlayout);
        clearDefaultLayout();
        clearDefaultPlatform();        
     }
     function checkDefaultPlatform() {
        var options = document.getElementsByName("defaultplatformradiobuttons");
        for (i=0; i<options.length; i++) {
            if (options[i].checked) {
                defaultplatform = options[i].id;
            }
        }
     }
     function checkDefaultLayout() {
        var options = document.getElementsByName("defaultlayoutradiobuttons");
        for (i=0; i<options.length; i++) {
            if (options[i].checked) {
                defaultlayout = options[i].id;
            }
        }
     }
     function clearDefaultLayout() {
        var options = document.getElementsByName("defaultlayoutradiobuttons");
        for(i=0; i<options.length; i++) {
            if (options[i].checked) {
                options[i].checked = false;
            }
        }
     }
     function clearDefaultPlatform() {
        var options = document.getElementsByName("defaultplatformradiobuttons");
        for(i=0; i<options.length; i++) {
            if (options[i].checked) {
                options[i].checked = false;
            }
        }
     }
     //All Page Functions
     function checkPage() {
        document.getElementById("wrapper").style.backgroundColor = localStorage.getItem("backgroundColor");
        console.log(document.title);
        if (document.title == "My Ideas") {
            document.getElementById("myideaslink").style.color = "#f08700";
            document.getElementById("myideaslinkimage").style.fill = "f08700";
            //Fetch Local Storage
            myideas = JSON.parse(localStorage.getItem("myideas"));
            myideasdescription = JSON.parse(localStorage.getItem("myideasdescription"));
            myideasID = JSON.parse(localStorage.getItem("myideasID"));
            JSONCheck();
            //Set Local Storage
            if (myideasID.length != null && myideas[0] != undefined) {
                for (i=0; i<myideasID.length; i++) {
                //Table Variable
                var totalRowCount = document.getElementById("myideastable").getElementsByTagName("tr");
                var table = document.getElementById("myideastable");
                var row = table.insertRow(totalRowCount.count);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                //Idea Name input
                var ideaNameInput = document.createElement("textarea");
                ideaNameInput.className = "ideaname";
                ideaNameInput.id = "ideas" + myideasID[i];
                ideaNameInput.value = myideas[i];
                //Description Input
                var descriptionInput = document.createElement("textarea");
                descriptionInput.className = "description";
                descriptionInput.id = "description" + myideasID[i];
                descriptionInput.value = myideasdescription[i];
                //New Row
                cell1.appendChild(ideaNameInput);
                cell2.appendChild(descriptionInput);
                }
            }
        } else if (document.title == "Create New Project") {
            var defaultPlatformSelected = localStorage.getItem("defaultplatform");
            if (defaultPlatformSelected === "defaultdesktopinput") {
                document.getElementById("createnewdesktopinput").checked = true;
            } else if (defaultPlatformSelected === "defaultmobileinput") {
                document.getElementById("createnewmobileinput").checked = true;
            } else if (defaultPlatformSelected === "defaultwebinput") {
                document.getElementById("createnewwebinput").checked = true;
            } else if (defaultPlatformSelected === "defaultmultiinput") {
                document.getElementById("createnewmultiinput").checked = true;
            }
            var defaultLayoutSelected = localStorage.getItem("defaultlayout");
            if (defaultLayoutSelected === "reversesidebarlayout") {
                document.getElementById("reversesidebarlayout").checked = true;
            } else if (defaultLayoutSelected == "sidebarlayout") {
                document.getElementById("sidebarlayout").checked = true;
            } else if (defaultLayoutSelected == "reversenavsidebarlayout") {
                document.getElementById("reversenavsidebarlayout").checked = true;
            } else if (defaultLayoutSelected == "navsidebarlayout") {
                document.getElementById("navsidebarlayout").checked = true;
            } else if (defaultLayoutSelected == "twocolumnlayout") {
                document.getElementById("twocolumnlayout").checked = true;
            } else if (defaultLayoutSelected == "threecolumnlayout") {
                document.getElementById("threecolumnlayout").checked = true;
            } else if (defaultLayoutSelected == "nolayout") {
                document.getElementById("nolayout").checked = true;
            }
            document.getElementById("createnewprojectlink").style.color = "#f08700";
            document.getElementById("createnewprojectlinkimage").style.fill = "#f08700";
        } else if (document.title == "My Projects" || document.title == "Project Design" || document.title == "Project To Do" || document.title == "Project") {
            document.getElementById("myprojectslink").style.color = "#f08700";
            document.getElementById("myprojectslinkimage").style.fill = "#f08700";   
            newProject = sessionStorage.getItem("newprojectcreated");
            console.log(newProject);
            if (newProject == true) {
                console.log("ran");
                newProjectLink();
                newProject = false;
                sessionStorage.setItem("newprojectcreated", newProject);
            } 
        } else if (document.title == "About Us") {
            document.getElementById("aboutlink").style.color = "#f08700";
            document.getElementById("aboutlinkimage").style.fill = "#f08700";
        } else if (document.title == "Settings - Project Defaults" || document.title == "Settings - Base Settings") {
            document.getElementById("settingslink").style.color = "#f08700";
            document.getElementById("settingslinkimage").style.fill = "#f08700";
        } else if (document.title == "My Account") {
            document.getElementById("accountlink").style.color = "#f08700";
            document.getElementById("accountlinkimage").style.fill = "#f08700";
            hasaccount = sessionStorage.getItem("hasaccount");
            console.log(hasaccount);
            if (hasaccount === "false") {
                console.log("x");
                document.getElementById("createnewaccount").style.display = "block";
                document.getElementById("loginaccount").style.display = "block";
                document.getElementById("createaccountorlogintext").style.display = "block";
                document.getElementById("accountpage").style.display = "none";
            } 
            if (hasaccount === "true") {
                console.log("w")
                username = localStorage.getItem("username");
                password = localStorage.getItem("password");
                document.getElementById("createnewaccount").style.display = "none";
                document.getElementById("loginaccount").style.display = "none";
                document.getElementById("createaccountorlogintext").style.display = "none";
                document.getElementById("accountpage").style.display = "block";
                //Account Details
                document.getElementById("accountdetailsusername").innerText = "Username: " + username;
                document.getElementById("accountdetailspassword").innerText = "Password: " + password;
            }
        }
    }
