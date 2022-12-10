$(document).ready(function () {
  console.log("ready");
  // --- our code goes here ---

  const $input = $("#tweet-text");
  const $counter = $("#tweet-counter");

  $input.on("input", function (event) {
    const tweetLength = this.value?.length;
    const lettersAllowed = 140 - tweetLength;
    $counter.val(lettersAllowed);
    if (lettersAllowed < 0) {
      $counter.addClass("negative");
    }else{ 
      $counter.removeClass("negative");
    }
  });
});
