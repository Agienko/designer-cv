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
import gsap from "gsap";

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
descriptors.forEach(descriptor => createThinkingCard(cardWrapper, descriptor));


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


const cards = gsap.utils.toArray(".instruments-list p");
cards.forEach((card, i) => {
    gsap.to(card, {
        keyframes: [
            { rotate: () => i % 2 === 1 ? 15 : -15, duration: 0.5, ease: "back.out" },
            { y: 0, scale: 1,  rotate: 0, duration: 0.4, ease: "back.out" }
        ],
        repeat: -1,
        repeatDelay: cards.length * 1,
        delay: i * 0.4
    });
});


const elements = [
    // '.hero-section-left h1',
    // '.hero-section-left h1:last-of-type',
    // '.hero-section-left p',
    // '.hero-section-left p:nth-of-type(2)',
    // '.hero-section-left a button',
    //
    // '.hero-section-right .hero-section-right-bg-photo',
    // '.hero-section-right .hero-section-right-photo',
    // '.hero-section-right .hero-section-text',
    //
    // '.learn-projects-wrapper .section-header',
    // '.learn-projects-wrapper .learn-projects-card .learn-projects-card-header span',
    // '.learn-projects-wrapper .learn-projects-card .learn-projects-card-img-wrapper',
    //
    // '.learn-projects-wrapper .learn-projects-card:last-of-type .learn-projects-card-header span',
    // '.learn-projects-wrapper .learn-projects-card:last-of-type .learn-projects-card-img-wrapper',
    //
    // '.thinking-section-wrapper .section-header',
    // '.thinking-section-wrapper .thinking-card-wrapper',
    // '.thinking-section-wrapper .thinking-card-wrapper:nth-of-type(2)',
    // '.thinking-section-wrapper .thinking-card-wrapper:nth-of-type(3)',
    // '.thinking-section-wrapper .thinking-card-wrapper:nth-of-type(4)',
    // '.thinking-section-wrapper .thinking-card-wrapper:nth-of-type(5)',
    // '.thinking-section-wrapper .thinking-card-wrapper:nth-of-type(6)',
    //
    // '.instruments-section-wrapper .section-header',
    // '.instruments-section-wrapper .instruments-list p',
    // '.instruments-section-wrapper .instruments-list p:nth-of-type(2)',
    // '.instruments-section-wrapper .instruments-list p:nth-of-type(3)',
    // '.instruments-section-wrapper .instruments-list p:nth-of-type(4)',
    // '.instruments-section-wrapper .instruments-list p:nth-of-type(5)',
    // '.instruments-section-wrapper .instruments-list p:nth-of-type(6)',
    // '.instruments-section-wrapper .instruments-list p:nth-of-type(7)',
    //
    '.philosophy-wrapper .section-header',
    '.philosophy-wrapper .philosophy-card-wrapper',
    '.philosophy-wrapper .philosophy-card-wrapper:nth-of-type(2)',
    '.philosophy-wrapper .philosophy-card-wrapper:nth-of-type(3)',
    '.philosophy-wrapper .philosophy-card-wrapper:nth-of-type(4)',



].map(id => document.querySelector(id));

console.log(elements);







// const elements = document.querySelectorAll(".main-content > *");
//
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const element = entry.target;

            if (entry.isIntersecting) {
                // Елемент став видимим — притягуємо на місце
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "back.out",
                    overwrite: true
                });
            } else {
                // Елемент вийшов із зони видимості — відштовхуємо
                const direction = element.getBoundingClientRect().top > 0 ? 1 : -1;

                gsap.to(element, {
                    y: direction * 100,
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    overwrite: true
                });
            }
        });
    },
    {
        threshold: 0.2
    }
);

elements.forEach((element) => observer.observe(element));
