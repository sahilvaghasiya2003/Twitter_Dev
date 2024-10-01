const express = require("express")
const connect = require('./config/database')
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async()=>{
    console.log('server started');
    await connect();
    console.log('MongoDB connected');
    const tweets = await Tweet.find({
        content:
            ["First tweet","Third tweet","123ed"]
    })
    console.log(tweets);
    
    
})