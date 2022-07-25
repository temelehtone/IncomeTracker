import express from "express";
import db from "../database.js";

const router = express.Router();

router.get("/createpoststable", (req, res) => {
    let sql = "CREATE TABLE posts(id int AUTO_INCREMENT, title varchar(255), body VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Posts table created...")
    })

})

export default router;