const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig.js");
const apiRoutes = require("./routes/index.js");

const db = require("./models/index.js");
const { User, Role } = require("./models/index.js");

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        if (process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }

        const u1 = await User.findByPk(5);
        const r1 = await Role.findByPk(2);
        // u1.addRole(r1);
        // const response = await u1.getRoles();
        const response = await r1.getUsers();
        console.log(response);


    })
}

prepareAndStartServer();