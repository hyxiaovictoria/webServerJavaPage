(function () {
    let userService = new AdminUserServiceClient();

    let usernameFld = $("#usernameFld").val();
    let passwordFld = $("#passwordFld");
    let firstNameFld = $("#firstNameFld");
    let lastNameFld = $("#lastNameFld");
    let roleFld = $("#roleFld");
    let userTableFld = $("#userTableFld");
    let createBtn = $("#createBtn");
    let removeBtn = $("#removeBtn");
    let editBtn = $("#editBtn");

    let users = [];
    let user1={username : "admin", password : "admin123",firstName : "Admin", lastName : "NEU", role : "ADMIN"};
    let user2={username : "hxiao", password : "hello123",firstName : "Haiyan", lastName : "Xiao", role : "FACULTY"};
    let user3={username : "alanhu", password : "alan123",firstName : "Alan", lastName : "Hu", role : "STUDENT"};
    users.push(user1)
    users.push(user2)
    users.push(user3)

    function deleteUser(index) {
        let user = users[index];
        let userId = user._id;

        userService.deleteUser(userId)
            .then(response => {users.splice(index, 1);
            renderUsers()
            })
    }

    function renderUsers() {
        var table = "";
        for (var i = 0; i < users.length; i++) {
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

            col = "<td class=\"wbdv-actions\">"
            col += "<span class=\"float-right\">"
            col += "<button id=\"removeBtn\">";
            col += "<i id=\"wbdv-remove\" class=\"fa-2x fa fa-times wbdv-remove\"></i>"
            col += "</button>";
            col += "<button id=\"editBtn\">";
            col += "<i id=\"wbdv-edit\" class=\"fa-2x fa fa-pencil-alt wbdv-edit\"></i>"
            col += "</button>";
            col += "</span></td>"
            row += col;

            row += "</tr>";
            table += row;
        }

        userTableFld.append(table);
    }

    function createUser(){
        let newUser={username : $("#usernameFld").val(),
            password : $("#passwordFld").val(),
            firstName : $("#firstNameFld").val(),
            lastName : $("#lastNameFld").val(),
            role : $("#roleFld").val()};


        userService.createUser(newUser).then (actualUser => {
            console.log(actualUser);
            users.push(actualUser);
            renderUsers();
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
