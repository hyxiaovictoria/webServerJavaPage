(function () {
    let userService = new AdminUserServiceClient();

    let usernameFld = $("#usernameFld").val();
    let passwordFld = $("#passwordFld");
    let firstNameFld = $("#firstNameFld");
    let lastNameFld = $("#lastNameFld");
    let roleFld = $("#roleFld");
    let $userTableFld = $("#userTableFld");
    let createBtn = $("#createBtn");
    let removeBtn = $("#removeBtn");
    let editBtn = $("#editBtn");

    let users = [];
    let user1={username : "admin", password : "admin123",firstName : "Admin", lastName : "NEU", role : "ADMIN", _id : "1"};
    let user2={username : "hxiao", password : "hello123",firstName : "Haiyan", lastName : "Xiao", role : "FACULTY", _id : "2"};
    let user3={username : "alanhu", password : "alan123",firstName : "Alan", lastName : "Hu", role : "STUDENT", _id : "3"};
    users.push(user1)
    users.push(user2)
    users.push(user3)


    function renderUsers() {
        // $userTableFld.children().remove();
//        $("#userTableBodyFld").children().remove();
        for (var i = 0; i < users.length; i++) {
            let user = users[i];
            var row = "<tr>";
            var col = "<td>" + users[i].username + "</td>";
            row += col;

            col = "<td></td>";
            row += col;

            col = "<td>" + users[i].firstName + "</td>";
            row += col;

            col = "<td>" + users[i].lastName + "</td>";
            row += col;

            col = "<td>" + users[i].role + "</td>";
            row += col;

            $userTableFld.append(row);

            $td = $("<td class=\"wbdv-actions\">");
            $span = $("<span class=\"float-right\">")

            $delBtn = $("<button id=\"removeBtn\">"
                         + "<i id=\"wbdv-remove\" class=\"fa-2x fa fa-times wbdv-remove\"></i>"
                         + "</button>");
            $delBtn.click(() => deleteUser(user))
            $span.append($delBtn);

            $editBtn = $("<button id=\"editBtn\">"
                        + "<i id=\"wbdv-edit\" class=\"fa-2x fa fa-pencil-alt wbdv-edit\"></i>"
                        + "</button>");
            $span.append($editBtn);
            $td.append($span);
            $userTableFld.append($td);
        }
    }

    function createUser(){
        let newUser={username : $("#usernameFld").val(),
            password : $("#passwordFld").val(),
            firstName : $("#firstNameFld").val(),
            lastName : $("#lastNameFld").val(),
            role : $("#roleFld").val()};

        userService.createUser(newUser).then (actualUser => {
            console.log("Created a new user: " + JSON.stringify(actualUser));
            users.push(actualUser);
            renderUsers();
        })
    }


    function deleteUser(user) {
        console.log("Deleted a user: " + JSON.stringify(user));
        //let user = users[index];
        //let userId = user._id;
        let id = user._id;

        userService.deleteUser(id)
            .then(response => {users.splice(id, 1);
                renderUsers()
            })
    }

    //removeBtn.mouseup(deleteUser);
    //editBtn.click(deleteUser(0));
    function main() {
        //userService.findAllUsers().then(theusers=>console.log(theusers));
        //removeBtn.mouseup(deleteUser(0));
        createBtn.click(createUser);

        userService
            .findAllUsers()
            .then(theusers=>{
                users=theusers;
                renderUsers();
            });
        //renderUsers();
    }
    $(main)
})()
