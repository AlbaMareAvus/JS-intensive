Function.prototype.myBind = function (context, ...args) {
  const func = this;

  return function(...newArgs) {
    func.apply(context, args.concat(newArgs));
  };
}

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = {
  item: 'some value'
};

logger.myBind(obj)(); // I output only external context: some value
