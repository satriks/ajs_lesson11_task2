import Char from './Character';

export default class Team {
  constructor() {
    this[0] = new Char('Лучник', 'Bowerman');
    this[1] = new Char('Лучник', 'Swordsman');
    this[2] = new Char('Лучник', 'Magician');
    this[3] = new Char('Лучник', 'Daemon');
    this[4] = new Char('Лучник', 'Zombie');
    this.length = 5;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.length; i += 1) {
      yield this[i];
    }
  }
}

// const data = new Team()
// console.log(data);
// // console.log(...data);
// for (let j of data){
//     console.log(j);
// }
