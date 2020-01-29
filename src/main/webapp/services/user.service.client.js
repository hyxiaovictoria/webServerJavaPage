function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/xiaohai/users';
    let self = this;
    function createUser(user) {
        return fetch(self.url, {method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }}).then(response => response.json())
    }

    function findAllUsers() {
        return fetch(self.url)
            .then(response => response.json())
        // console.log(self.url)
        // users = fetch(self.url, {method: 'GET'})
        // console.log(JSON.stringify(users))
        // // fetch(self.url);
        // return fetch(self.url, {method: 'GET'}).then(response => response.json())
        // .then(
        //     users=>console.log(users)
        // );
        // console.log("findAllUsers() service is called and return value is " + JSON.stringify(allUsers))
        // return allUsers
    }

    function findUserById(userId) {
        return fetch('${self.url}/${userId}')
            .then(response => response.json())
    }

    function updateUser(userId, user) {
        return fetch('${self.url}/${userId}', {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "content-type": 'application/json'
            }
        }).then(response => response.json())
    }

    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`, {method: 'DELETE'})
    }
}
