import express from "express";
import { connectDB } from "./db.js";
import dotenv from "dotenv";
import User from "./models/user.model.js";

dotenv.config({ 
    path: "./.env" 
});

const app = express();
const port = process.env.PORT || 3000;

connectDB()
.then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
.catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public')); 



app.get('/', (req, res) => {
    res.redirect('/users')
});

app.get('/users',(req,res)=>{
     User.find().sort({createdAt:-1})//it will find all data and show it in descending order
      .then(result => { 
        res.render('index', { users: result ,title: 'Home' }); //it will then render index page along with users
      })
      .catch(err => {
        console.log(err);
      });
  })