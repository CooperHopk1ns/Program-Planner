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
        //Project Platform
        checkNewPlatform();
        projectPlatform = selectedPlatform;
        //Project Layout
        checkNewLayout();
        projectLayout = selectedLayout;
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
     function checkNewPlatform() {
        var options = document.getElementsByName("platformradiobuttons");
        for (i=0; i<options.length; i++) {
            if (options[i].checked) {
                selectedPlatform = options[i].id;
            }
        }
     }
     function checkNewLayout() {
        var options = document.getElementsByName("layoutradiobuttons");
        for (o=0; o<options.length; o++) {
            if (options[o].checked) {
                selectedLayout = options[o].id;
            }
        }
     }
     //My Projects Page
     //Variables
     var linkClicked = "";
     var projectDesign;
     var projectCounter = 0;
     function newProjectLink() {
        //Storage Fetch
        var newprojectname = sessionStorage.getItem("newProjectName");
        var newprojectplatform = sessionStorage.getItem("newProjectPlatform")
        var newprojectlayout = sessionStorage.getItem("newProjectLayout");
        //Create Element
        var newDiv = document.createElement("div");
        var newlayout = document.createElement("p");
        var newplatform = document.createElement("p");
        var newname = document.createElement("p");
        var newnamelink = document.createElement("a");
        //Assign Id, Class Name, And Append
        document.getElementById("masterprojectlink").appendChild(newDiv);
        newDiv.className = "projectlink";
        newDiv.appendChild(newlayout);
        newDiv.appendChild(newplatform);
        newDiv.appendChild(newname);
        newDiv.appendChild(newnamelink);
        newlayout.id = "projectlinklayout";
        newplatform.id = "projectlinkplatform";
        newname.className = "projectlinktitle";
        newnamelink.href = "/projects/project.html";
        //Assign String Value
        newplatform.innerHTML = newprojectplatform;
        newlayout.innerHTML = newprojectlayout;
        newnamelink.innerText = newprojectname;
        newname.appendChild(newnamelink);
        newnamelink.onclick = linkTitleClick(newnamelink);
        //Conversion
        convertPlatform(newplatform);    
        convertLayout(newlayout);   
        //Storage
        localStorage.setItem("project" + projectCounter, newDiv.innerHTML);
        projectCounter = ++projectCounter;
        localStorage.setItem("projectCounter", projectCounter);
     }
     function linkTitleClick(x) {
        linkClicked = x.innerHTML;
        localStorage.setItem("linkClicked", linkClicked);
     }
     function convertPlatform(x) {
        if (x.innerText == "createnewdesktopinput") {
            x.innerText = "Desktop";
        } else if (x.innerText == "createnewmobileinput") {
            x.innerText = "Mobile";
        } else if (x.innerText == "createnewwebinput") {
            x.innerText = "Web";
        } else if (x.innerText == "createnewmultiinput") {
            x.innerText = "Multi-Platform";
        }
     }
     function convertLayout(x) {
        if (x.innerText == "reversesidebarlayout") {
            x.innerText = "Reverse Side Bar Layout";
        } else if (x.innerText == "sidebarlayout") {
            x.innerText = "Side Bar Layout";
        } else if (x.innerText == "reversenavsidebarlayout") {
            x.innerText = "Reverse Nav Side Bar layout";
        } else if (x.innerText == "navsidebarlayout") {
            x.innerText = "Nav Side Bar Layout";
        } else if (x.innerText == "twocolumnlayout") {
            x.innerText = "Two Column Layout";
        } else if (x.innerText == "Three Column Layout") {
            x.innerText = "Three Column Layout";
        } else if (x.innerText == "nolayout") {
            x.innerText = "No Layout Selected";
        }
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
        var todonameinput = document.createElement("textarea");
        todonameinput.className = "textboxinputname";
        //Description Input
        var tododescriptioninput = document.createElement("textarea");
        tododescriptioninput.className = "textboxinputdescription";
        //New Row
        cell1.appendChild(statusSelect);
        cell2.appendChild(todonameinput);
        cell3.appendChild(tododescriptioninput);
     }
     //Delete To Do Row
     function deleteToDoRow() {
        var deleteRowPosition = document.getElementById("deletetodorowbuttoninput").value;
        var deleteRows = document.getElementById("todotable").getElementsByTagName("tr");
        if (deleteRows.length >= 2) {
            document.getElementById("todotable").deleteRow(deleteRowPosition);
        }
        document.getElementById("deletetodorowbuttoninput").value = "1";
     }
     //Project Design Page
     var newPage;
     var newDesign;
     var newPageLayout;
     function showDesignAddPage() {
        document.getElementById("designpageselector").style.display = "block";
     }
     var pagedesigncounter = 0;
     function addDesignPage() {
        var design = document.getElementById("designimages");
        var newimage = document.createElement("img");
        checkLayoutForImage();
        if (newPageLayout == "reversesidebarlayout") {
            newimage.src = "/assets/navbarleft.png";
        } else if (newPageLayout == "sidebarlayout") {
            newimage.src = "/assets/navbarright.png";
        } else if (newPageLayout == "reversenavsidebarlayout") {
            newimage.src = "/assets/navtopleft.png";
        } else if (newPageLayout == "navsidebarlayout") {
            newimage.src = "/assets/navtopright.png";
        } else if (newPageLayout == "twocolumnlayout") {
            newimage.src = "/assets/twocolumn.png";
        } else if (newPageLayout == "threecolumnlayout") {
            newimage.src = "/assets/threecolumn.png";
        }
        newimage.className = "designimage";
        design.appendChild(newimage);
        document.getElementById("designpageselector").style.display = "none";
        pagedesigncounter = ++pagedesigncounter;
        if (pagedesigncounter >= 5) {
            document.getElementById("addDesignPageButton").style.display = "none";
        }
    }
    function checkLayoutForImage() {
        var options = document.getElementsByName("pagelayoutradiobuttons");
        for (o=0; o<options.length; o++) {
            if (options[o].checked) {
                newPageLayout = options[o].id;
                console.log(newPageLayout);
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
        //My Ideas
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
        //Create New Project
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
        } else if (document.title == "Project Design") {
        //Project Design
            document.getElementById("myprojectslink").style.color = "#f08700";
            document.getElementById("myprojectslinkimage").style.fill = "#f08700";
        } else if (document.title == "Project To Do") {
        //Project To Do
            document.getElementById("myprojectslink").style.color = "#f08700";
            document.getElementById("myprojectslinkimage").style.fill = "#f08700";
            linkClicked = localStorage.getItem("linkClicked");
            document.getElementById("projecttitle").innerHTML = "Project Name: " + linkClicked;
        } else if (document.title == "Project") {
        //Project
            document.getElementById("myprojectslink").style.color = "#f08700";
            document.getElementById("myprojectslinkimage").style.fill = "#f08700";
            linkClicked = localStorage.getItem("linkClicked");
            document.getElementById("projecttitle").innerHTML = "Project Name: " + linkClicked;
        } else if (document.title == "My Projects") {
        //My Projects
            document.getElementById("myprojectslink").style.color = "#f08700";
            document.getElementById("myprojectslinkimage").style.fill = "#f08700";    
            newProject = sessionStorage.getItem("newprojectcreated");
            projectCounter = localStorage.getItem("projectCounter");
            if (projectCounter == null) {
                projectCounter = 0;
            }
            for (i=0; i<projectCounter; i++) {
                if (localStorage.getItem("project" + i) != null) {
                var div = localStorage.getItem("project" + i);
                var master = document.getElementById("masterprojectlink");
                console.log(div);
                var child = document.createElement("div");
                child.className = "projectlink";
                child.innerHTML = div;
                master.appendChild(child);
                }
            }
            if (newProject == "true") {
                newProjectLink();
                localStorage.getItem("")
                newProject = false;
                sessionStorage.setItem("newprojectcreated", newProject);
            } 
        }else if (document.title == "About Us") {
        //About Us
            document.getElementById("aboutlink").style.color = "#f08700";
            document.getElementById("aboutlinkimage").style.fill = "#f08700";
        } else if (document.title == "Settings - Project Defaults" || document.title == "Settings - Base Settings") {
        //Settings
            document.getElementById("settingslink").style.color = "#f08700";
            document.getElementById("settingslinkimage").style.fill = "#f08700";
        } else if (document.title == "My Account") {
        //Account
            document.getElementById("accountlink").style.color = "#f08700";
            document.getElementById("accountlinkimage").style.fill = "#f08700";
            hasaccount = sessionStorage.getItem("hasaccount");
            console.log(hasaccount);
            if (hasaccount === "false") {
                document.getElementById("createnewaccount").style.display = "block";
                document.getElementById("loginaccount").style.display = "block";
                document.getElementById("createaccountorlogintext").style.display = "block";
                document.getElementById("accountpage").style.display = "none";
            } 
            if (hasaccount === "true") {
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
