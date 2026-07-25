
export const createPhilosophyCard = (stage, description) => {
    const card = document.createElement('img');
    card.classList.add('philosophy-card');
    card.style.left = `${description.position.left}px`;
    card.style.top = `${description.position.top}px`;

    card.src = `/philosophy-cards/philosophy-card-${description.id}.svg`
    stage.appendChild(card);
    return card;
};