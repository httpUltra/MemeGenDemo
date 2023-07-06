const form = document.getElementById("mainForm");
const link = document.querySelector("#url");
const topT = document.querySelector("#topText");
const botT = document.querySelector("#botText");
const memeForm = document.querySelector("#memeContainer");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newImage = document.createElement("img");
  const topTValue = topT.value;
  const botTValue = botT.value;
  const linkValue = link.value;
  newImage.src = linkValue;
  const whole = document.createElement("div");
  whole.classList.add("meme");

  whole.addEventListener("click", function (e) {
    this.remove()
    console.log("image deleted?");
});


  if (linkValue) {
    whole.appendChild(newImage);

    const topOverlay = document.createElement("div");
    const botOverlay = document.createElement("div");
    topOverlay.classList.add("topOverlay");
    botOverlay.classList.add("botOverlay");
    const topText = document.createTextNode(topTValue);
    const botText = document.createTextNode(botTValue);
    topOverlay.appendChild(topText);
    botOverlay.appendChild(botText);
    whole.prepend(botOverlay);
    whole.prepend(topOverlay);
    memeForm.appendChild(whole);
  } else {
    alert("No Image URL");
  }

  topText.value = "";
  botText.value = "";
  url.value = "";
});