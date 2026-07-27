import './css/fonts.css'
import './css/main.css'
import './css/hero-section.css'
import './css/learn-projects.css'
import './css/thinking.css'
import './css/instruments.css'
import './css/philosophy.css'
import './css/buttons.css'
import './css/footer.css'
import {createThinkingCard} from "./thinking-card-template.js";
import {createPhilosophyCard} from "./philosophy-card-template.js";
import gsap from "gsap";
import {sorter} from "./helpers.js";
import {intersectionElementsList} from "./intersection-elements-list.js";

const resumeBtn = document.querySelector('#resume-btn');
resumeBtn.addEventListener('pointerup', () => window.open('./resume.pdf', '_blank'));

const cardWrapper = document.querySelector('.thinking-section-wrapper');
const descriptors = [
    {
        id: 1,
        text: 'удосконалюю',
        hoverText: 'Не боюся видаляти те, що сама ж і придумала',
        color: "#E0F29C",
        hoverColor: "#BBCA83"
    },
    {
        id: 2,
        text: 'перевіряю',
        hoverText: 'Не сприймаю правки як особисту критику',
        color: "#D0D4FC",
        hoverColor: "#B5B8D7"
    },
    {
        id: 3,
        text: 'я вивчаю',
        hoverText: 'Малюю людину, а не абстрактного "користувача"',
        color: "#ADCAE4",
        hoverColor: "#8EAFCD"
    },
    {
        id: 4,
        text: 'переробляю',
        hoverText: 'Несу цей досвід у наступний проєкт',
        color: "#FFE77A",
        hoverColor: "#EECD3A"
    },
    {
        id: 5,
        text: 'сумніваюся',
        hoverText: 'Даю собі право визнати, що варіант був сильнішим',
        color: "#FFE77A",
        hoverColor: "#EECD3A"
    },
    {
        id: 6,
        text: 'розумію',
        hoverText: 'Відділяю "незручно мені" від "незручно користувачу"',
        color: "#FFDEE2",
        hoverColor: "#E6B6BC"
    }
].reverse();
const thinkingCards = descriptors.map(descriptor => createThinkingCard(cardWrapper, descriptor));
const resizeObserver = new ResizeObserver(([entry]) => sorter(cardWrapper, thinkingCards));
resizeObserver.observe(cardWrapper);

const philosophyCardDescriptors = [
    {
        id: 1,
        text: 'Це не про сумніви.',
    },
    {
        id: 2,
        text: 'Це про цікавість.',
    },
    {
        id: 3,
        text: 'Це про те, щоб побачити ціле.',
    },
    {
        id: 4,
        text: 'Це про деталі, що створюють довіру.',
    }
]
const philosophyCardWrapper = document.querySelector('.philosophy-wrapper');
philosophyCardDescriptors.forEach(descriptor => createPhilosophyCard(philosophyCardWrapper, descriptor));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            const element = entry.target;

            if (entry.isIntersecting) {
                gsap.to(element, {y: 0, scale: 1, opacity: 1, duration: 0.4, ease: "power3.out", overwrite: true});
            } else {
                const direction = element.getBoundingClientRect().top > 0 ? 1 : -1;
                const y = direction * 100;
                gsap.to(element, {y, scale: 0.8, opacity: 0, duration: 0.25, ease: "power3.in", overwrite: true});
            }
        });
    },
    {
        threshold: 0.2
    }
);

intersectionElementsList.forEach(id => {
    const element = document.querySelector(id);
    element.style.opacity = '0';
    element.style.scale = '0.8';
    observer.observe(element)
});

const mainPhoto = document.querySelector('.hero-section-right .hero-section-right-photo')
window.addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    gsap.to(mainPhoto, {x: x * 3, y: y * 3, duration: 0.3, ease: "power2.out"});
});
