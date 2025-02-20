// console.log("server started!")
// /*
import express from "express";
import cors from "cors"
// import mongoose from "mongoose";
import { Client } from "pg";
import {readdirSync} from "fs"                 // for easily handling file system.
const morgan = require("morgan")    // we'll face error, if we use "import"
require("dotenv").config();         // this will helps in loading env. variables


// create express app
const app = express();

// db
const db = new Client({
  user : "postgres",
  host : "localhost",
  database : "guideclasses",
  password : "Pgkapswd@1",
  port : 5432
})

// db
// mongoose.connect(process.env.DATABASE, {})
// .then(()=> console.log("**DB CONNECTED**"))
// .catch((err) => console.log("DB CONNECTION ERR => ", err))
/*
mongoose
  .connect("mongodb://localhost:27017/guideclasses")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));
*/





// apply middleware            : it'll run before any response is send back to our client.
app.use(cors())
app.use(express.json())     // data[FE -> BE] if available as JSON data.
app.use(morgan("dev"))      // we pass 'dev' flag as string.

db.connect(console.log("******* Connect with the DB *******"));

// route                                : all the routes will be in "routes" folder.
readdirSync("./routes").map((r) => 
    app.use("/api", require(`./routes/${r}`))
)

/* We used this File-system to load this files directory. We'll map each of the available files.
  each file 'r' and applied it as middleware. 
    we prefix with 'api', then we require each of them. So, that way it is applied middleware.

    So, we don't have to manually import each time we create new file.
*/


// port                                 : we can use .env file. which will be helpful in production use.
const port = process.env.PORT || 8000       // "process" is a Top Lvl obj. Where the node.js entire process run. Where we get access to "env" & many diff. Fn./properties.




// we can listen to our server...
app.listen(port, () => console.log(`Server is running on port ${port}`))


  