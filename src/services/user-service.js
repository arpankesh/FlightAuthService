const UserRepository = require("../repository/user-repository.js");

class UserService {
    constructor() {
        this.repository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.repository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}

module.exports = UserService;