function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = {
  item: 'some value'
};

// Привязка контекста методом bind()
logger.bind(obj)(); // I output only external context: some value

// Привязка контекста методом call()
logger.call(obj); // I output only external context: some value

// Привязка контекста методом apply()
logger.apply(obj); // I output only external context: some value
