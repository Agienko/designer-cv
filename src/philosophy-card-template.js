
export const createPhilosophyCard = (stage, description) => {

    const wrapper = document.createElement('div');
    wrapper.classList.add('philosophy-card-wrapper');


    const card = document.createElement('img');
    card.classList.add('philosophy-card');
    card.classList.add(`philosophy-card-${description.id}`);
    card.alt = description.text;
    card.src = `/philosophy-cards/philosophy-card-${description.id}.svg`
    wrapper.appendChild(card);
    stage.appendChild(wrapper);
    return card;
};