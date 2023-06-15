const track = document.getElementById("image-track");
// console.log(track)
// track starting point of mouse
window.onmousedown = e => {
    // console.log("DOWN")
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

// percentage of slider 
window.onmousemove = e => {
    // console.log("MOVING")
    if (track.dataset.mouseDownAt === "0")  return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    // prevent infinite scrolling
    nextPercentage = Math.max(-75, Math.min(nextPercentage, 0));
    track.dataset.percentage = nextPercentage;
    
    track.style.transform = `translate(${nextPercentage}%, -50%)`;
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1500, fill:"forwards" });
    
    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${nextPercentage + 90}% center`
        }, {duration: 1500, fill: "forwards"});
    }
}

let isScrolling = false;
function handleMouseWheel(event) {
    const deltaY = event.deltaY;
    const maxScroll = 100;
    const minScroll = 0;

    // adjusted to 5% to slow down displacement
    const scrollPercentage = ((deltaY - minScroll) / (maxScroll - minScroll)) * -5;
    let nextScrollPercentage = parseFloat(track.dataset.prevPercentage) + scrollPercentage;
    nextScrollPercentage = Math.max(-75, Math.min(nextScrollPercentage, 0));
    track.dataset.percentage = nextScrollPercentage;
    
    track.style.transform = `translate(${nextScrollPercentage}%, -50%)`;
    track.animate({
        transform: `translate(${nextScrollPercentage}%, -50%)`
    }, { duration: 1500, fill:"forwards" });
    
    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${nextScrollPercentage + 90}% center`
        }, {duration: 1500, fill: "forwards"});
    }
  
    // console.log('Scroll;', scrollPercentage);
    if (isScrolling) {
        clearTimeout(isScrolling);
      }
    isScrolling = setTimeout(function() {
        // User has stopped scrolling
        track.dataset.prevPercentage = track.dataset.percentage;
        isScrolling = false;
    }, 0);
}
// Add event listener to the window object
window.addEventListener('wheel', handleMouseWheel);

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
    audio.loop = true;
  });
