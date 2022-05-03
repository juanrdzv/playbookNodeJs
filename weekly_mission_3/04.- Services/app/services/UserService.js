const User = require('./../../../03.- Models/twitter/app/models/User')

class UserService{
    static create(username, name, id){
        return new User(username, name, id)
    }
    static getInfo(user) {
        return [user.id, user.username, user.firstName, user.bio];
      }
    
      static updateUserUsername(user, newUsername) {
        user.username = newUsername;
      }
    
      static getAllUsernames(users) {
        return users.map((user) => user.username);
      }
    
}

module.exports = UserService