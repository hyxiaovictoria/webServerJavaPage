(function () {
    let userService = new AdminUserServiceClient();

    let $usernameFld = $("#usernameFld");
    let $passwordFld = $("#passwordFld");
    let $firstNameFld = $("#firstNameFld");
    let $lastNameFld = $("#lastNameFld");
    let $roleFld = $("#roleFld");
    let $userTableFld = $("#userTableFld");
    let $createBtn = $("#createBtn");
    let $searchBtn = $("#searchBtn");
    let $updateBtn = $("#updateBtn");
    let id_to_update

    let users = []

    function createUser(){
        let newUser={username : $("#usernameFld").val(),
            password : $("#passwordFld").val(),
            firstName : $("#firstNameFld").val(),
            lastName : $("#lastNameFld").val(),
            role : $("#roleFld").val()};

        userService.createUser(newUser).then (actualUser => {
            console.log("Created a new user: " + JSON.stringify(actualUser));

            // Force reloading the page to refresh cached data. TODO: Find a better way
            location.reload(true)
        })
    }

    function findAllUsers() {
        return userService.findAllUsers()
    }

    function deleteUser(user) {
        console.log("Deleted a user: " + JSON.stringify(user));
        let id = user._id;

        userService.deleteUser(id)
            .then(response => {users.splice(id, 1);
                location.reload(true)
            })
    }

    function updateUser(user) {
        console.log("Update a user before: " + JSON.stringify(user));
        const updatedUser = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role: $roleFld.val()
        }
        console.log("Update a user: " + JSON.stringify(updatedUser));

        $userTableFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
        $roleFld.val("")

        userService.updateUser(id_to_update, updatedUser)
            .then(branchNewUser => {
                location.reload(true)
            })
    }

    function renderUsers() {
        console.log("Start rendering all users...")
        findAllUsers()
            .then(theusers=>{
                users=theusers;
                console.log("Fetched all users are: ")
                console.log(JSON.stringify(users))

                for (let i = 0; i < users.length; i++) {
                    let user = users[i];
                    let row = "<tr>";
                    let col = "<td>" + users[i].username + "</td>";
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
                    // console.log(row)

                    let $td = $("<td class=\"wbdv-actions\">");
                    let $span = $("<span class=\"float-right\">")

                    let $delBtn = $("<button id=\"removeBtn\">"
                        + "<i id=\"wbdv-remove\" class=\"fa-2x fa fa-times wbdv-remove\"></i>"
                        + "</button>");
                    $delBtn.click(() => deleteUser(user))
                    $span.append($delBtn);

                    let $editBtn = $("<button id=\"editBtn\">"
                        + "<i id=\"wbdv-edit\" class=\"fa-2x fa fa-pencil-alt wbdv-edit\"></i>"
                        + "</button>");

                    $editBtn.click(() => editUser(user))
                    $span.append($editBtn);
                    $td.append($span);
                    //$td = "<td>X</td>"
                    // console.log("td[0] = " + $td[0].innerHTML)
                    // good = "<td>" + $td[0].innerHTML + "</td></tr>"
                    // console.log("good = " + good)
                    $userTableFld.append($td);
                    //$userTableFld.append("<tr><td>hannanhu</td><td></td><td>Hannah</td><td>Hu</td><td>STUDENT</td><td>X</td></tr>")
                    //$userTableFld.append("<tr><td>hannanhu</td><td></td><td>Hannah</td><td>Hu</td><td>STUDENT</td>")
                    //$userTableFld.append("<td>X</td></tr>")
                    //$userTableFld.last().after("<td>X</td></tr>")
                    // console.log($td)
                }
            });
    }

    function editUser(user) {
        id_to_update = user._id
        console.log("Edit a user: " + JSON.stringify(user))
        $usernameFld.val(user.username)
        $passwordFld.val(user.password)
        $firstNameFld.val(user.firstName)
        $lastNameFld.val(user.lastName)
        $roleFld.val(user.role)
    }

    function main() {
        $createBtn.click(createUser);
        $updateBtn.click(updateUser);

        renderUsers()
    }

    $(main)
})()
