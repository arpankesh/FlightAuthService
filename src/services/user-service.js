const UserRepository = require("../repository/user-repository.js");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig.js");

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

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }

}

module.exports = UserService;