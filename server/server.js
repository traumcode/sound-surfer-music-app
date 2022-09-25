require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const DB = require("./config/keys").mongoURI;

const users = require("./routes/api/users");

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json(), urlencodedParser);

mongoose
    .connect(DB, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
