const express = require("express")
const connect = require('./config/database')
const app = express();
const Tweet = require('./models/tweet')
const Comment = require('./models/comments')
const TweetReposiroty = require('./repository/tweet-repository')

app.listen(3000, async()=>{
    console.log('server started');
    await connect();
    console.log('MongoDB connected');

    //!Add data
    // const tweet = await Tweet.create({
    //     content:'Forth tweet',
    // })
    //!find all data
    // const tweet = await Tweet.find();
    //!find perticular data
    // const tweet = await Tweet.find({userEmail:'user1@gmail.com'});
    
    //!edit data
    // const tweet = await Tweet.findById('66fa3f242329bf20fddfd013');
    // tweet.userEmail = 'user20@gmail.com'
    // tweet.save();


    // console.log(tweet);
    
    const repo = new TweetReposiroty();
    const tweet = await repo.create({content:'new tweet for test',userEmail:'admin@123'});
    // const tweet =await repo.getAll(0,4);
    // console.log('###');
    // console.log(tweet[1].contentWithEmail);                          
    
    
    console.log(tweet);
    // const comment = await Comment.create({content:'New 2 Comments'})
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet); 
    
    
})