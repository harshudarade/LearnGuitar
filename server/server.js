const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");


const userRoutes = require("./routes/authRoutes");
const songRoutes = require("./routes/songRoutes");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(express.json());

app.use("/api/user" , userRoutes);
app.use("/api/songs" , songRoutes);

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`error ${error.message}`);
    }
}

connectDB();

// Serve frontend

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '.../frontend/build')));

//     app.get('*', (req, res) => res.sendFile(
//         path.resolve(__dirname, '../', 'frontend', 'build' , 'index.html')
//     )
//     );
// } else {
//     app.get('/', (req, res) => res.send('Please set to production'));
// }

// https://www.youtube.com/watch?v=gWIbT1fbLlA&list=LL&index=1&ab_channel=IndianCodersz