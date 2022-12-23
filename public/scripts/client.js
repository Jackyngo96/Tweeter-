/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
$(document).ready(function () {
  console.log("ready");

  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweets) {
    //  $tweetsContatiner.empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
   console.log($tweet)
    }
  };

  const createTweetElement = function(tweet) {
    const $tweet = $(`
    <article class="tweets">
    <header>
     <div class = header-right>  
     <img class ="avatar" src=${tweet.user.avatars} />
      <h5 class ="name" >${tweet.user.name}</h5> 
      </div> 
      <h5 class ="handle">${tweet.user.handle}</h5>
    </header>

    <p>${tweet.content.text}</p> 
    
    <footer class="posted-tweet-footer">
      <h5>${tweet.created_at}</h5>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
    </article>
  `);

    return $tweet;
  };

  renderTweets(data);

});

const postTweet = function (data) {
  const url = "/jacky";
  return $.post(url, data, (response) => {
  data.push(response)
    return "test"
  });
};