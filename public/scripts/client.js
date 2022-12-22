/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

// Fake data taken from initial-tweets.json
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
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $(".posted-tweets").append($tweet);
  }
};

const createTweetElement = function (tweet) {
  const $tweet = $(`
  <article>
          <header class="tweet-header">
            <div class="posted-tweet-left">
            <img src="https://i.imgur.com/73hZDYK.png" />
            <span> ${tweet.user.name}</span>
            </div>
            <div class="posted-tweet-right">
              <span>${tweet.user.handle}</span>
            </div>
          </header>

          <section class="tweet">${tweet.content.text}</section>

          <footer class="posted-tweet-footer">
            <span>${tweet.created_at}</span>
            <div class="icons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>`);

  return $tweet;
};

renderTweets(data);
