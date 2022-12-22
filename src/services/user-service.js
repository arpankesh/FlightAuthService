const UserRepository = require("../repository/user-repository.js");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig.js");
const bcrypt = require("bcrypt");

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

    async signIn(email, plainPassword) {
        try {
            // step 1 => fetch user by email
            const user = await this.repository.getByEmail(email);
            // step 2 => compare incoming plainpassword with stored encrypted password
            const passwordsMatch = this.checkPassword(plainPassword, user.password);

            if (!passwordsMatch) {
                console.log("Passwords doesn't match");
                throw { error: "Incorrect Password" };
            }
            //step 3 => if passwords match, then create a token and send it to the user
            const newJWT = this.createToken({
                email: user.email,
                id: user.id
            });
            return newJWT;
        } catch (error) {
            console.log("Something went wrong in signin process");
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

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }

}

module.exports = UserService;