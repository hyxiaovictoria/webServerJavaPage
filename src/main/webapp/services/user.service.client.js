function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/xiaohai/users';
    var self = this;
    function createUser(user) {}
    function findAllUsers() {
        // fetch(self.url);
        fetch(self.url).then(response => response.json()).then(users=>console.log(users));
    }
    function findUserById(userId) {}
    function updateUser(userId, user) {}
    function deleteUser(userId) {}
}
