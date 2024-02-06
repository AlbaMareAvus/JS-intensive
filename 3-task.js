/**
 * Task 3 - Создать объект Person несколькими способами, после создать
 * объект Person2, чтобы в нём были доступны методы объекта Person.
 * Добавить метод logInfo чтоб он был доступен всем объектам.
 */

// Первый способ
const Person1_1 = {
  name: 'Max',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const Person2_1 = Object.create(Person1_1);
Person2_1.name = 'Checo';

Person2_1.sayHello();

// Второй способ
const Person1_2 = new Object;
Person1_2.name = 'Sharl'
Person1_2.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
}

const Person2_2 = Object.assign({}, {
  name: 'Carlos'
});
Object.setPrototypeOf(Person2_2, Person2_1);

Person2_2.sayHello();

// Метод logInfo
Object.prototype.logInfo = function() {
  console.log(`some more information about ${this.name}`)
};

Person1_1.logInfo();
Person2_1.logInfo();
Person1_2.logInfo();
Person2_2.logInfo();

/**
 * Создать класс PersonThree c get и set для поля name и конструктором,
 * сделать класс наследник от класса Person.
 */

class PersonThree {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Champion extends PersonThree {
  #team

  constructor(name, team) {
    super(name);
    this.#team = team;
  }

  get team() {
    return this.#team;
  }

  sayHello() {
    super.sayHello();
    console.log(`I and my team ${this.team} are the champions`);
  }
}

const newChampion = new Champion('Checo', 'Red Bull Racing');
newChampion.name = 'Max';

newChampion.sayHello();
