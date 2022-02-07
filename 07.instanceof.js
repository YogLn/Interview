function newInstanceOf(left, right) {
    let proto = left.__proto__;
    let prototype = right.prototype;

    while (true) {
        if (proto === prototype) return true;
        if (proto === null) return false;
        proto = proto.__proto__;
    }
}

class Parent {}
class Child extends Parent {}
const child = new Child()
console.log(
  newInstanceOf(child, Parent),
  newInstanceOf(child, Child),
  newInstanceOf(child, Array)
)