import explosion from '../../resources/music/explosion.mp3';
import steal from '../../resources/music/steal.mp3'
import darkSpeak from '../../resources/music/dark.mp3'

const linfoHero = [
    {
        id: 'meg',
        name: 'Мегумин',
        text: 'Этот мир благославлён взрывами: ',
        music: explosion,
    }, 
    {
        id: 'kaz',
        name: 'Казумусик',
        text: 'В этом мире совершено краж ;): ',
        music: steal,
    }, 
    {
        id: 'dark',
        name: 'Даркнесс',
        text: 'Этот мир был "защищён": ',
        music: darkSpeak,
    }, 
];

export default linfoHero;