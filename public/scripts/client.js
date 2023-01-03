/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escaped = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (tweet) {
  const timeDelta = moment(tweet.created_at).fromNow()
  const $tweet = $(`
  <article class="tweets">
  <header>
  <div class = header-right>  
  <img class ="avatar" src=${tweet.user.avatars} />
  <h5 class ="name" >${tweet.user.name}</h5> 
  </div> 
  <h5 class ="handle">${tweet.user.handle}</h5>
  </header>
  
  <p>${escaped(tweet.content.text)}</p> 
  
  <footer class="posted-tweet-footer">
  <h5>${timeDelta}</h5>
  <div class="icons">
  <i class="fa-solid fa-flag" id="flag"></i>
  <i class="fa-solid fa-retweet" id="retweet"></i>
  <i class="fa-solid fa-heart" id="heart"></i>
  </div>
  </footer>
  </article>
  `);
  return $tweet;
};

const resetCounter = function () {
  $(".counter").text(140);
};

const renderTweets = function (tweets) {
  const $container = $("#tweets-container");
  $container.empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $container.prepend($tweet);
  }
};

const loadtweets = function () {
  $.ajax({
    url: "tweets",
    method: "GET",
    dataType: "json",
    success: function (tweets) {
      renderTweets(tweets);
    },
    error: function (error) {
      console.log(error);
    },
  });
};

const appendError = function (error){
  $(".new-tweet").prepend(
    $("<span class='error'>")
      .text('⚠️ ' + error + ' ⚠️')
      .slideDown()
      .delay(4000)
      .hide(600)
  );
}; 

const removeError = () => {
  $('.error').remove();
};

$(document).ready(function () {
  console.log("ready");
  loadtweets();

  const $form = $("form");
  $form.on("submit", function (event) {
    event.preventDefault();
    removeError();
    const serializedData = $(this).serialize();
    if ($("#tweet-text").val() === "" || null) {
      appendError("You cannot post a blank tweet");
    } else if ($("#tweet-text").val().length > 140) {
      appendError("Your tweet is too long!");
    } else {
      $.post("/tweets", serializedData).then((response) => {
        loadtweets();
        $(this).children("textarea").val("");
        resetCounter();
      });
    }
  });
});
