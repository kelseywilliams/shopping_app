// const express = require("express");
// const { PORT } = require("./config");
// const { databaseConnection } = require("./database");
// const expressApp = require("./express-app");

// const StartServer = async() => {

//     const app = express();

//     //await databaseConnection();

//     await expressApp(app);

//     app.listen(PORT, () => {
//         console.log(`Listening to port ${PORT}`);
//     })
//     .on("error", (err) => {
//         console.log(err);
//         process.exit()
//     })
// }

const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({"msg":"Hello from Customer"});
});

app.listen(8001, () => {
    console.log("Customer is Listening to Port 8001");
});