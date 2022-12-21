const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig.js");
const apiRoutes = require("./routes/index.js");

// const { User } = require("./models/index.js");
// const bcrypt = require("bcrypt");
// const UserRepository = require("./repository/user-repository.js");

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        // const userRepository = new UserRepository();
        // const response = await userRepository.getById(1);
        // console.log(response);
        // const incomingPassword = "123456";
        // const user = await User.findByPk(4);
        // const response = bcrypt.compareSync(incomingPassword, user.password);
        // console.log(response);

    })
}

prepareAndStartServer();