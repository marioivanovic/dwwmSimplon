import { createTimeline, waapi, stagger, utils, splitText } from 'https://esm.sh/animejs';
import { animate } from "https://cdn.jsdelivr.net/npm/motion@11.15.0/+esm"


const { words, chars1 } = splitText('p', {
    words: { wrap: 'clip' },
    chars: true,
});

createTimeline({
    loop: true,
    defaults: { ease: 'inOut(3)', duration: 650 }
})
    .add(words, {
        y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
    }, stagger(125))
    .add(chars1, {
        y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
    }, stagger(10, { from: 'random' }))
    .init();


const { chars } = splitText('h2', { words: false, chars: true });

waapi.animate(chars, {
    translate: `0 -2rem`,
    delay: stagger(100),
    duration: 800,
    loop: true,
    alternate: true,
    ease: 'inOut(2)',
});

const { charsSecond } = splitText('h3', { words: false, charsSecond: true });

waapi.animate(charsSecond, {
    translate: `0 -2rem`,
    delay: stagger(100),
    duration: 800,
    loop: true,
    alternate: true,
    ease: 'inOut(2)',
});