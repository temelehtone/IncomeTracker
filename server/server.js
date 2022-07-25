import express from 'express';
import cors from 'cors';
import db from "./database.js"
import dbRouter from "./routes/database.js"

const app = express();
app.use(cors())
app.use("/db", dbRouter);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Toimii"})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Server running on port " + PORT);
})