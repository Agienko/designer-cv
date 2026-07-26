
export const createPhilosophyCard = (stage, description) => {
    const card = document.createElement('img');
    card.classList.add('philosophy-card');
    card.classList.add(`philosophy-card-${description.id}`);
    card.alt = description.text;
    card.src = `/philosophy-cards/philosophy-card-${description.id}.svg`
    stage.appendChild(card);
    return card;
};