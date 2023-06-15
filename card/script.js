zoom = e => {
    const curr_card = e;
    const cards = document.querySelectorAll(".cards > div");
    // console.log(cards);
    // console.log(curr_card.style.cssText);
    if (curr_card.style.cssText == "opacity: 1; z-index: 1; transform: translate(0%, 0%) scale(2.3);") {
        // console.log("cleared");
        for (const card of cards) {
            card.removeAttribute("style");
        }
    } 
    else {
        for (const card of cards) {
            if (card != curr_card) {
                card.style.transform = "none";
            }
        }
        curr_card.style.opacity = 1;
        curr_card.style.zIndex = 1;
        curr_card.style.transform = "translate(0%, 0%) scale(2.3)";
    }
}