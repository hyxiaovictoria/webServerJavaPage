let usernameFld = $("#usernameFld");
let passwordFld = $("#passwordFld");
let firstNameFld = $("#firstNameFld");
let lastNameFld = $("#lastNameFld");
let roleFld = $("#roleFld");
let userTableFld = $("#userTableFld1");

let users = [];
let user1={username : "admin", password : "admin123",firstName : "Admin", lastName : "NEU", role : "ADMIN"};
let user2={username : "hxiao", password : "hello123",firstName : "Haiyan", lastName : "Xiao", role : "FACULTY"};
let user3={username : "alanhu", password : "alan123",firstName : "Alan", lastName : "Hu", role : "STUDENT"};
users.push(user1)
users.push(user2)
users.push(user3)

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
    col += "<i id=\"wbdv-remove\" class=\"fa-2x fa fa-times wbdv-remove\"></i>"
    col += "<i id=\"wbdv-edit\" class=\"fa-2x fa fa-pencil-alt wbdv-edit\"></i>"
    col += "</span></td>"
    row += col;

    row += "</tr>";
    table += row;
}

userTableFld.append(table)
//var table = "";
//for (var i = 1; i < userTableFld.length; i++) {
//    var row = "<tr>";
//    var col = "<td>" + userTableFld[i].username + "</td>";
//    row += col;
//
//    col = "<td></td>";
//    row += col;
//
//    col = "<td>" + userTableFld[i].firstName + "</td>";
//    row += col;
//
//    col = "<td>" + userTableFld[i].lastName + "</td>";
//    row += col;
//
//    col = "<td>" + userTableFld[i].role + "</td>";
//    row += col;
//
//    col = "<td class=\"wbdv-actions\">"
//    col += "<span class=\"float-right\">"
//    col += "<i id=\"wbdv-remove\" class=\"fa-2x fa fa-times wbdv-remove\"></i>"
//    col += "<i id=\"wbdv-edit\" class=\"fa-2x fa fa-pencil-alt wbdv-edit\"></i>"
//    col += "</span></td>"
//    row += col;
//
//    row += "</tr>";
//    table += row;
//}
//
//userTableFld.append(table)
