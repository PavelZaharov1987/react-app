import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// function Animal(name, voice) {
//   this.name = name;
//   this.voice = voice;
// }

// Animal.prototype.say = function() {
//   console.log(this.name, 'goes', this.voice);
// }

// const dog = new Animal('dog', 'woof');
// dog.say();

class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }
  say() {
    console.log(this.name, 'goes', this.voice);
  }
}

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
  constructor(name, voice, canFly) {
    super(name, voice);
    super.say();
    this.say();
    this.canFly = canFly;
  }
  say() {
    console.log('Birds don\'t like to talk');
  }
}

const duck = new Bird('Duck', 'quack');
duck.say();