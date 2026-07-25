export const createThinkingCard = (stage, descriptor) => {


    const card = document.createElement('div');

    card.addEventListener('pointerover', () => {
        if(stage.lastElementChild !== card) stage.appendChild(card);
    }, {passive: true})



    card.classList.add('thinking-card-wrapper');
    card.style.left = `${descriptor.position.left}px`;
    card.style.top = `${descriptor.position.top}px`;
    card.style.transform = `rotate(${descriptor.angle}deg)`;
    card.innerHTML = `
        <svg class="thinking-card-scotch" xmlns="http://www.w3.org/2000/svg" width="64" height="77" viewBox="0 0 64 77" fill="none">
                    <path d="M57.2054 0L0 3.77049L3.07143 68.4973L35.7054 73.8388L63.7321 76.3525L57.2054 0Z" fill="#DDDAD0" fill-opacity="0.9"/>
                    <path d="M57.2054 0L0 3.77049L3.07143 68.4973L35.7054 73.8388L63.7321 76.3525L57.2054 0Z" fill="url(#paint0_linear_193_600)" fill-opacity="0.1" style="mix-blend-mode:multiply"/>
                    <defs>
                        <linearGradient id="paint0_linear_193_600" x1="31.8661" y1="0" x2="31.8661" y2="76.3525" gradientUnits="userSpaceOnUse">
                            <stop offset="0.453125" stop-color="white"/>
                            <stop offset="0.765625"/>
                            <stop offset="1" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div class="thinking-card" style="background-color: ${descriptor.color}">
                    <img src="./thinking-cards/thinking-card-img-${descriptor.id}.png" alt="photo" class="thinking-card-img">
                    <div class="thinking-card-footer">
                        ${descriptor.text}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.50488 9H17.4946M13.3267 12.5L17.4946 9L13.3267 5.5" stroke="#1A1712" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
    `
    stage.appendChild(card);
    return card;
}