class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    reanme(newName) {
        this.name = newName;
    }
}
class UsersList extends User {
    constructor(currentId) {
        this.users = [];
        this.currentId = currentId;
    }
    addUser(name) {
        this.users.push(name);
    }
    removeUser(id) {
        delete this.users(id);
    }
    renameUser(id, name) {
        this.name(id) = newName;
    }
}








// const app = new Application();
// app.init();