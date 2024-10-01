const { TweetRepsitory } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepsitory = new TweetRepsitory();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); //extract hashtags
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepsitory.create(data);
    //TODO: create hashtag and add here
    /**
     * 1. bulk create in mongoose
     * 2. filter title of hashtag based on multiple tags
     * 3. How to add tweet id inside all the hashtags
     */
    return tweet;
  }
}

module.exports = TweetService;

/** This is my #first #tweet. I am so #excited */
