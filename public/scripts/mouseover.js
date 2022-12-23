$(document).ready(function () {
  console.log("ready");
  // --- our code goes here ---

  const $tweet = $(".tweets");
  const $flag = $(".fa-solid.fa-flag");
  const $retweet = $(".fa-solid.fa-retweet");
  const $heart = $(".fa-solid.fa-heart");

  $tweet.on("mouseover", function (event) {
    $(this).addClass("shadow");

  });

  $tweet.on("mouseout", function (event) {
    $tweet.removeClass("shadow");
  });

  $flag.on("mouseover", function (event) {
    $(this).addClass("flag");
  });

  $flag.on("mouseout", function (event) {
    $flag.removeClass("flag");
  });

  $retweet.on("mouseover", function (event) {
    $(this).addClass("retweet");
  });

  $retweet.on("mouseout", function (event) {
    $retweet.removeClass("retweet");
  });

  $heart.on("mouseover", function (event) {
    $(this).addClass("heart");
  });

  $heart.on("mouseout", function (event) {
    $heart.removeClass("heart");
  });
});
