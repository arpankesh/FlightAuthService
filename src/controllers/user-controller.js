const UserService = require("../services/user-service.js");

const userService = new UserService();

const create = async (req, res) => {
    try {
        const user = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: user,
            message: "Successfully created an user",
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Cannot create the user",
            success: false,
            data: {},
            err: error
        })
    }
}

module.exports = {
    create
}