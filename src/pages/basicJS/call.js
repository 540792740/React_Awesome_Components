/*  情景1: this指向变更  */
function greet() {
    var reply = [this.person, 'Is An Awesome', this.role].join(' ');
    console.log(reply);
}

var i = {
    person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer

/* 情景2. 简单使用 call 来实现的继承操作 */
function person(x, y) {
    this.old = x;
    this.sex = y;
}
function Foo2(x, y) {
    person.call(this, x, y)
}

var f = new Foo2(12, "男");

console.log(f);   //Object{old:12,sex:'男'}
console.log(new person(0, "女"))
