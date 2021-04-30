$(document).ready(function () {
  $(window).scroll((e) => {
    // console.log($("#mainBody").height());
    // console.log( $(window).height() + $(window).scrollTop() - 16);
    let totalScroll = $("#mainBody").height();
    let currentScroll = $(window).height() + $(window).scrollTop() - 16;
    let percent = parseInt((currentScroll / totalScroll) * 100);
    let angle = 180 * (percent / 100);
    if (angle > 90) {
      $(".upperSection").css("zIndex", "-2");
    } else {
      $(".upperSection").css("zIndex", "0");
    }
    $(".upperSection").css("transform", `rotateX(${angle}deg)`);
    let bottomPercent = 10 + 70 * (percent / 100);
    bottomPercent = parseInt(bottomPercent);
    $(".message").css("bottom", `${bottomPercent}%`);
  });
});

let siteColors = ["#ffa68d", "#fd3a84"];
document
  .getElementById("screenConfetti")
  .addEventListener("click", function (e) {
    e.preventDefault();
    party.screen({
      color: siteColors,
      size: party.minmax(6, 12),
      count: party.variation(300 * (window.innerWidth / 1980), 1.0),
      angle: -180,
      spread: 180,
      angularVelocity: party.minmax(6, 9),
    });
    setTimeout(() => window.open("./birthdayWish/index.html"), 2000);
  });

function createEmoji() {
  let colors = ["#CC7DB4", "#D3C6E0", "#F5BCC1"];
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 2 + 3 + "s";
  emoji.innerText = "♥";
  emoji.style.fontSize = "5rem";
  emoji.style.color = colors[parseInt(Math.random() * 3)];
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}
setInterval(createEmoji, 300);

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
