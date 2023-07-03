const linksEls = document.querySelector('.socials-list');

console.log(linksEls);

linksEls.addEventListener('mouseover', handleMouseover);
linksEls.addEventListener('mouseout', handleMouseout);

function handleMouseover({target}) {
    if(!target.classList.contains('socials-link')) {
        return;
    }
    target.firstElementChild.classList.add('socials-icon__hover');
    target.lastElementChild.classList.remove('socials-icon__hover');
};

function handleMouseout({target}) {
    if(!target.classList.contains('socials-link')) {
        return;
    }
    target.lastElementChild.classList.add('socials-icon__hover');
    target.firstElementChild.classList.remove('socials-icon__hover');
};