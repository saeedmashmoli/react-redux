import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose';
import http from 'http'
import dotenv from 'dotenv';
import postRoutes from '../routes/posts'
dotenv.config()
const app = express();
const mongoConnect = 'mongodb+srv://saeed:saeed1234@cluster0.ioa1c.mongodb.net/morn?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;
class Application {
    constructor() {
        this.setupExpress();
        this.setMongoConnection();
        this.setConfig();
        this.setRouters();
    }
    setupExpress() {
        const server = http.createServer(app);
        server.listen(port , () => console.log(`Listening on port ${port}`));
    }
    setMongoConnection() {
        mongoose.Promise = global.Promise;
        mongoose.connect(mongoConnect , { useNewUrlParser : true , useUnifiedTopology : true })
            .then(() => console.log('Connected To MongoDB'))
            .catch((error) => console.log(error.message))
        mongoose.set('useFindAndModify' , false);
    }
    setConfig() {
        app.use(bodyParser.json({limit : "30mb" , extended : true}))
        app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}))
        app.use(cors())
    }
    setRouters() {
        app.use('/posts' , postRoutes)
        app.get('/' , (req , res) => {
            res.send('Hello to My Memories')
        })
    }
}

export default Application