const express     = require("express");
const morgan      = require("morgan");
const cors        = require("cors");
const compression = require("compression");
const helmet      = require("helmet");

//const connectDB = require("./config/db.config")

// access to vars in .env...
//require("dotenv").config();

// database connection...
//connectDB();

const app = express();

// server PORT...
const PORT = process.env.PORT || 3001;

// compress HTTP responce to the client...
app.use(compression());

// helmet for security...
app.use(helmet());

// use morgan for dev...
app.use(morgan("dev"));

// set cors to accept client request...
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// parsers...
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true }));

// routes...
//
//
//

// disable powered by tag...
// app.disable("x-power-by");

// hello world to see if everythings up...
app.get("/", (req, res) => {
    res.send("FUDGE.");
})

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});