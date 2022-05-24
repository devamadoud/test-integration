// Recuperer le revealBlock
const revealBlock = document.querySelectorAll('.revealBlock');
// Recuperer le revealText
const revealText = document.querySelectorAll('.revealText');
// Recuperer le revealWidth
const revealWidth = document.querySelectorAll('.revealWidth');
// Recuperer le revealBtn
const revealBtn = document.querySelectorAll('.revealBtn');

// On crée un observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
};

const handleIntersect = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            // Reveal the text
            entry.target.classList.add('revealText-visible');
            // Annim the width of the revealWidth
            entry.target.classList.add('revealWidth-visible');
            // Remove the class revealWidth
            entry.target.classList.remove('revealWidth');
            // Reveal the content of revealBlock
            entry.target.classList.add('revealBlock-visible');
            // Reveal the button
            entry.target.classList.add('revealBtn-visible');
            observer.unobserve(entry.target);
        }
    });
}

var observer = new IntersectionObserver(handleIntersect, options);
// On observe tous les revealBlock
revealBlock.forEach(block => {
    observer.observe(block);
});

// On observe tous les revealText
revealText.forEach(text => {
    observer.observe(text);
});

// On observe tous les revealWidth
revealWidth.forEach(width => {
    observer.observe(width);
});

// On observe tous les revealBtn
revealBtn.forEach(btn => {
    observer.observe(btn);
});