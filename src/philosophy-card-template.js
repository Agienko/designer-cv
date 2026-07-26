
export const createPhilosophyCard = (stage, description) => {
    const card = document.createElement('img');
    card.classList.add('philosophy-card');
    card.classList.add(`philosophy-card-${description.id}`);


    // const resizeObserver = new ResizeObserver((entries) => {
    //
    //     const realWidth = entries[0].contentRect.width;
    //     const multiplier = Math.max(realWidth / 1200, 0.6);
    //     card.style.left = `${multiplier * description.position.left}px`;
    //     card.style.top = `${multiplier * description.position.top}px`;
    //
    //     card.style.transform = `scale(${multiplier})`;
    // });
    //
    // resizeObserver.observe(stage);


    card.src = `/philosophy-cards/philosophy-card-${description.id}.svg`
    stage.appendChild(card);
    return card;
};