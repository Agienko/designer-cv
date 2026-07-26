import './css/fonts.css'
import './css/main.css'
import './css/hero-section.css'
import './css/learn-projects.css'
import './css/thinking.css'
import './css/instruments.css'
import './css/philosophy.css'
import './css/buttons.css'
import {createThinkingCard} from "./thinking-card-template.js";
import {createPhilosophyCard} from "./philosophy-card-template.js";


document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    return false;
});


const resumeBtn = document.querySelector('#resume-btn');
resumeBtn.addEventListener('pointerup', () => window.open('./resume.pdf', '_blank'));


const cardWrapper = document.querySelector('.thinking-section-wrapper');

const descriptors = [
    {
        id: 1,
        text: 'удосконалюю',
        hoverText: 'Не боюся видаляти те, що сама ж і придумала',
        color: "#E0F29C"
    },
    {
        id: 2,
        text: 'перевіряю',
        hoverText: 'Не сприймаю правки як особисту критику',
        color: "#D0D4FC",
    },
    {
        id: 3,
        text: 'я вивчаю',
        hoverText: 'Малюю людину, а не абстрактного "користувача"',
        color: "#ADCAE4",
    },
    {
        id: 4,
        text: 'переробляю',
        hoverText: 'Несу цей досвід у наступний проєкт',
        color: "#FFE77A",
    },
    {
        id: 5,
        text: 'сумніваюся',
        hoverText: 'Даю собі право визнати, що варіант був сильнішим',
        color: "#FFE77A"
    },
    {
        id: 6,
        text: 'розумію',
        hoverText: 'Відділяю "незручно мені" від "незручно користувачу"',
        color: "#FFDEE2"
    }
].reverse();
descriptors.forEach(descriptor => createThinkingCard(cardWrapper, descriptor));






const philosophyCardDescriptors = [
    {
        id: 1,
        text: 'Це не про сумніви.',
        position: {
            left: 22,
            top: 120,
        },
    },
    {
        id: 2,
        text: 'Це про цікавість.',
        position: {
            left: 180,
            top: 70,
        },
    },
    {
        id: 3,
        text: 'Це про те, щоб побачити ціле.',
        position: {
            left: 390,
            top: 100,
        },
    },
    {
        id: 4,
        text: 'Це про деталі, що створюють довіру.',
        position: {
            left: 570,
            top: 60,
        },
    }
]

const philosophyCardWrapper = document.querySelector('.philosophy-wrapper');
philosophyCardDescriptors.forEach(descriptor => createPhilosophyCard(philosophyCardWrapper, descriptor));