let endListener = false;

clickElement.addEventListener("click", () => {
  endListener = !endListener; // Simpler toggle
});

video.addEventListener("ended", () => {
  if (endListener) {
    console.log("listener ended");
    return;
  }
  console.log("Video has ended");
});