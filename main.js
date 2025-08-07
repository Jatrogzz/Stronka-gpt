const sounds = [
  "audio/1.mp3",
  "audio/2.mp3",
  "audio/3.mp3",
  "audio/4.mp3",
];

let audio = new Audio();

function playRandomSound() {
  const soundFile = sounds[Math.floor(Math.random() * sounds.length)];
  audio.src = soundFile;
  audio.play();
  console.log("Playing:", soundFile);
}

function changeIcon(anchor) {
  const icon = anchor.querySelector("i");
  icon.classList.toggle('fa-volume-xmark');
  icon.classList.toggle('fa-volume-high');
  
  // opcjonalnie zmien tekst, tutaj dajesz spację więc luz
  anchor.querySelector("span").textContent = icon.classList.contains('fa-volume-xmark') ? " " : " ";
}
