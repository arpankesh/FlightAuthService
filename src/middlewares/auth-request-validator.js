const validateUserAuth = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "Something went wrong during signup",
            err: "Email or password missing in the request"
        })
    }

    next();
}

const validateIsAdminRequest = (req, res, next) => {
    if (!req.body.userId) {
        return res.status(400).json({
            data: {},
            success: false,
            err: "userId not given",
            message: "Something went wrong"
        })
    }

    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
}