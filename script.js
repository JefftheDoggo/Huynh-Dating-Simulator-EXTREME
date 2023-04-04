import { characters } from './characters.js';
import { matchUsers, getRandomCharacter } from './matching.js';

const user = {
    name: 'Edward',
    age: 16,
    interests: ['chemistry', 'specialist', 'methods', 'music', 'edward'],
    personality: 'dominant',
    bio: 'Edward is a brilliant and dedicated student who is pursuing a degree in Chemistry. He has a passion for science and a natural talent for math, which he uses to solve complex problems and conduct innovative experiments. He also has a massive crush on Shang-Mei although he never admits it.'
};

const randomCharacter = getRandomCharacter(characters);

console.log(`You matched with ${randomCharacter.name}!`);