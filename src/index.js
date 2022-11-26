require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./config/database");
const cors = require("cors");
const app = express();
const path = require("path");

// Routes

const profile = require("./routes/userProfile.routes");


// app.use(express.static('/controllers/uploads')); //testing

// app.use(express.static('../uploads'));


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 1000000 }));
app.use(cors());


app.use("/kms/", profile);


app.listen(8000, () => {
    // logger.info(`Server is running on ${process.env.SERVER_PORT} successfully`);


    connection
        .authenticate()
        .then(() => {
            // logger.info(
            //     "MySQL Connection using Sequelize has been established successfully."
            // );
            console.log('MySQL Connection using Sequelize has been established successfully. on ' + 8000)
        })
        .catch(err => {
            // logger.error("Unable to connect to the database:", err);
            console.log("Unable to connect to the database:", err)

        });
});