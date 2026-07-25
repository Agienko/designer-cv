import './css/fonts.css'
import './css/main.css'
import './css/hero-section.css'
import './css/learn-projects.css'
import './css/thinking.css'
import './css/buttons.css'
import {createThinkingCard} from "./thinking-card-template.js";


const cardWrapper = document.querySelector('.thinking-section-wrapper');

const descriptors = [
    {
        id: 1,
        text: 'удосконалюю',
        color: "#E0F29C",
        position: {
            left: 400,
            top: 100,
        },
        angle: 0
    },
    {
        id: 2,
        text: 'перевіряю',
        color: "#D0D4FC",
        position: {
            left: 710,
            top: 140,
        },
        angle: 8
    },
    {
        id: 3,
        text: 'я вивчаю',
        color: "#ADCAE4",
        position: {
            left: 22,
            top: 150,
        },
        angle: -8
    },
    {
        id: 4,
        text: 'переробляю',
        color: "#FFE77A",
        position: {
            left: 730,
            top: 300,
        },
        angle: 8
    },
    {
        id: 5,
        text: 'сумніваюся',
        color: "#FFE77A",
        position: {
            left: 22,
            top: 300,
        },
        angle: -8
    },
    {
        id: 6,
        text: 'розумію',
        color: "#FFDEE2",
        position: {
            left: 400,
            top: 370,
        },
        angle: 0
    }
].reverse();

descriptors.forEach(descriptor => createThinkingCard(cardWrapper, descriptor));


const resumeBtn = document.querySelector('#resume-btn');
resumeBtn.addEventListener('pointerup', () => window.open('./resume.pdf', '_blank'));