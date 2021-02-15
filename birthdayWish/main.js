let siteColors = ["#ffa68d", "#fd3a84"];
$(".next").click(function () {
  $(".darkScreen").fadeOut(1000);
  setTimeout(() => {
    $(".playMusic").fadeIn();
  }, 1500);
});
$(".frame").hide();
$(".table").hide();
$(".getDecoration").hide();
$(".cake").hide();
$(".banner").hide();
$(".container").hide();
$(".getCake").hide();
$(".playMusic").hide();
$("#story").hide();

$(".playMusic").click(() => {
  $("#music")[0].play();
  $(".frame").fadeIn();
  $(".playMusic").fadeOut();
  setTimeout(() => {
    $(".bgold").addClass("bulb-glow-dim");
    $(".bblue").addClass("bulb-glow-dim");
    $(".borange").addClass("bulb-glow-dim");
    $(".brandom2").addClass("bulb-glow-dim");
    $(".bred").addClass("bulb-glow-dim");
    setTimeout(() => {
      $(".bpurple").addClass("bulb-glow-dim");
      $(".bgreen").addClass("bulb-glow-dim");
      $(".bpink").addClass("bulb-glow-dim");
      $(".brandom").addClass("bulb-glow-dim");
    }, 200);
  });
  setTimeout(() => {
    $(".getDecoration").fadeIn();
  }, 3000);
});
$(".getDecoration").click(() => {
  $(".getDecoration").fadeOut();
  $(".table").fadeIn();
  setTimeout(() => {
    $(".banner").slideDown();
    $(".container").fadeIn(1000);
    $(".getCake").fadeIn();
  }, 2000);
});
function partyPopper() {
  console.log("party popper");
  party.screen({
    color: siteColors,
    size: party.minmax(6, 12),
    count: party.variation(300 * (window.innerWidth / 1980), 0.4),
    angle: -180,
    spread: 80,
    angularVelocity: party.minmax(6, 9),
  });
}

$(".getCake").click(() => {
  $(".getCake").hide();
  $(".cake").slideDown();
  setTimeout(() => {
    $(".baloonsBorder").addClass("baloonsAnimation");
    var partyPopperInterval = setInterval(partyPopper, 300);
    setTimeout(() => {
      clearInterval(partyPopperInterval);
      $(".tableAndCakeContainer").delay(3500).fadeOut();
      $("#story").delay(3500).fadeIn();
    }, 4000);
  }, 500);
});

// Message Loop

$("#story").click(function () {
  $(".frame").css("opacity", "0");
  $(this).fadeOut("slow");
  $(".cake")
    .fadeOut("fast")
    .promise()
    .done(function () {
      $(".message").fadeIn("slow");
    });

  var i;

  function msgLoop(i) {
    $("p:nth-child(" + i + ")")
      .fadeOut("slow")
      .delay(1000)
      .promise()
      .done(function () {
        i = i + 1;
        $("p:nth-child(" + i + ")")
          .fadeIn("slow")
          .delay(1200);
        if (i == 50) {
          $("p:nth-child(49)")
            .fadeOut("slow")
            .promise()
            .done(function () {
              $(".tableAndCakeContainer").fadeIn("fast");
              $(".cake").fadeIn("fast");
              $(".frame").css("opacity", "1");
            });
        } else {
          msgLoop(i);
        }
      });
    // body...
  }

  msgLoop(0);
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "H".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "A".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "F".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
    return false;
  }
  if (event.ctrlKey && event.keyCode == 85) {
    alert(
      "This function has been disabled to prevent you from stealing my code!"
    );
    return false;
  }
  if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert(
      "This function has been disabled to prevent you from stealing my code!"
    );
    return false;
  }
};
document.attachEvent("oncontextmenu", function () {
  alert(
    "This function has been disabled to prevent you from stealing my code!"
  );
  window.event.returnValue = false;
});
document.addEventListener("contextmenu", function (e) {
  alert(
    "This function has been disabled to prevent you from stealing my code!"
  );
});
