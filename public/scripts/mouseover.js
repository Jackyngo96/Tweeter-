$(document).ready(function () {
  console.log("ready");
  // --- our code goes here ---

  const $posted = $(".posted-tweets");
  const $flag = $(".fa-solid.fa-flag");
  const $retweet = $(".fa-solid.fa-retweet");
  const $heart = $(".fa-solid.fa-heart");

  $posted.on("mouseover", function (event) {
    $posted.addClass("shadow");
  });

  $posted.on("mouseout", function (event) {
    $posted.removeClass("shadow");
  });

  $flag.on("mouseover", function (event) {
    $flag.addClass("flag");
  });

  $flag.on("mouseout", function (event) {
    $flag.removeClass("flag");
  });

  $retweet.on("mouseover", function (event) {
    $retweet.addClass("retweet");
  });

  $retweet.on("mouseout", function (event) {
    $retweet.removeClass("retweet");
  });

  $heart.on("mouseover", function (event) {
    $heart.addClass("heart");
  });

  $heart.on("mouseout", function (event) {
    $heart.removeClass("heart");
  });
});
