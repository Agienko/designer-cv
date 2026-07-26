import gsap from "gsap";


export const createThinkingCard = (stage, descriptor) => {
    const card = document.createElement('div');

    card.classList.add(`thinking-card-wrapper`);
    card.classList.add(`thinking-card-${descriptor.id}`);

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
                <div class="thinking-card">
                    <img src="./thinking-cards/thinking-card-img-${descriptor.id}.png" alt="photo" class="thinking-card-img">
                    <div class="thinking-card-footer">
                        <span></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.50488 9H17.4946M13.3267 12.5L17.4946 9L13.3267 5.5" stroke="#1A1712" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
    `
    card._descriptor = descriptor;
    card.tween = null;
    card.thinkingCard = card.querySelector('.thinking-card');
    card.thinkingCard.style.backgroundColor = card._descriptor.color;
    card.textSpan = card.querySelector('.thinking-card-footer span');
    card.textSpan.textContent = card._descriptor.text;
    card.svg = card.querySelector('.thinking-card-footer svg');
    stage.appendChild(card);

    const setDefault = (skipCard) => {
        for (const child of stage.children) {
            if(!child.classList.contains('thinking-card-wrapper')|| skipCard === child) continue;
            child?.tween?.kill();
            child.tween = null;
            child.textSpan.textContent = child._descriptor.text;
            child.svg.style.transform = 'rotate(0deg)';
            child.thinkingCard.style.backgroundColor = child._descriptor.color;
        }
    }

    const set = () => {
        card.svg.style.transform = 'rotate(180deg)';
        if(stage.lastChild !== card) stage.appendChild(card);
        card.thinkingCard.style.backgroundColor = card._descriptor.hoverColor;
        if(card.tween || card.textSpan.textContent === descriptor.hoverText) return;

        const obj = { length: 0 };
        card?.tween?.kill();
        card.tween = gsap.to(obj, {
            length: descriptor.hoverText.length,
            duration: descriptor.hoverText.length * 0.03,
            ease: "none",
            roundProps: "length",
            onUpdate() {
                card.textSpan.textContent = descriptor.hoverText.slice(0, obj.length);
            },
            onComplete() {
                card.tween = null;
            }
        });

    }

    card.addEventListener('mouseover', e => {
        setDefault(card)
        set()
    })

    card.addEventListener('mouseleave', setDefault)

    card.addEventListener('touchstart', () => {
        setDefault(card)
        set()
    })

    return card;
}