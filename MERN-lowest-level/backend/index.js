import express from "express";
import mongoose from 'mongoose';
import { PORT, mongoDBURL} from "./config.js";

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('This is the lowest code level of MERN stack')
})

// app.listen(PORT, () => {
//     console.log(`App is listening on port: ${PORT}`);
// });

mongoose.connect(mongoDBURL).then( () => {
    console.log('App is successfully connected to MongoDB. Starting the Web server now.');
    app.listen(PORT, () => {
        console.log(`The app server is connected to port: ${PORT}`)
    })
})
.catch( (error) => {
    console.log(error)
});