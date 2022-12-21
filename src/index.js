const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig.js");
const apiRoutes = require("./routes/index.js");

// const UserService = require("./services/user-service.js");

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        // const service = new UserService();
        // const newToken = service.createToken({
        //     email: "sanket@admin.com",
        //     id: 1
        // });
        // console.log("new token is", newToken);
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjcxNjQ2OTcwLCJleHAiOjE2NzE2NTA1NzB9.wzQLpv9jxesXsp9btlYvBSMPqTOHHzyP62NoIIbqgpg";
        // const response = service.verifyToken(token);
        // console.log(response);
    })
}

prepareAndStartServer();