const card = document.querySelector('.container');

card.addEventListener('mousemove', cardEffect);
card.addEventListener('mouseleave', cardBack);
card.addEventListener('mouseenter', cardEnter);

function cardEffect(event)
{
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth/2;
    const centerY = card.offsetTop + cardHeight/2;
    const positionX = event.clientX - centerX;
    const positionY = event.clientY - centerY;
    

    const rotateX = (+1)*25*positionY/(cardHeight/2);
    const rotateY = (-1)*25*positionX/(cardWidth/2);
    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function cardBack(event)
{
    card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    cardTransition()
}

function cardTransition()
{
    clearInterval(card.TransitionId);
    card.style.transition = 'transform 400ms'
    card.transitionId = setTimeout(()=>{
        card.style.transition = '';
    },400)
}

function cardEnter(event)
{
    cardTransition();
}