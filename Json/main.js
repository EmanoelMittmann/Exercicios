import Hero,{printHeroName as heroName , printHeroPower as heropower} from './script.class.js';

const hero = (new Hero('superman','superforça'))
heroName(hero);
heropower(hero);