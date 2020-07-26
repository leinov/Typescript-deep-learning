import { get } from "http";

// 创建一个长方形的类
class Rect{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
    getPerimeter(){
        return (this.width + this.height)* 2;
    }
}

const r1 = new Rect(3,4);
const r2 = new Rect(8,9);
console.log(r1.getArea(), r1.getPerimeter());
console.log(r2.getArea(), r2.getPerimeter());

// 检测一个类的自身属性
console.log(r1.hasOwnProperty('width')); // true
console.log(r1.hasOwnProperty('getArea')); // false

// 类的方法是实例__proto__对象的hasOwnProperty来检测
// getArea是实例继承来的，他定义在类的原型对象上
console.log(r1.__proto__.hasOwnProperty('getArea')); // true
console.log(Rect.prototype === r1.__proto__); // true

// 原型继承

function Animal() {
    this.name = 'animal';
}
function Dog(){
    this.band = 'dog'
}

Dog.prototype = new Animal();

const d1 = new Dog();
console.log(d1.name);

// get set

const Objs = {
    _title:'js',
    get title(){
        console.log('我的title被读取了');
        return this._title;
    },
    set title(newTitle){
        console.log(`我的title被改为${newTitle}`);
        this._title = newTitle;
    }
}
Objs.title; // 我的title被读取了
Objs.title = 'ts' // 我的title被改为ts

// 类的get set

class Person{
    constructor(name){      
        this._name = name;
    }
    get name(){
        console.log('you get my name');
        return this._name;
    }
    set name(value){
        console.log(`you set me a new name ${value}`);
        this._name = value;
    }
}

const p1 = new Person('leinov');
p1.name;
p1.name = 'world'

// 类的静态方法

class Circle{
    constructor(r){
        this.r = r;
    }
    getArea(){
        return this.r * 2 * Math.PI;
    }
    static getClassName(){
        return Circle.name;
    }
}

console.log(Circle.name);

// 私有方法1 
// 在模块儿中personalFn为私有
function personalFn(name){
    this.name = name;
}

class Student{
    fn(name){
        personalFn.call(this, name);
    }
}

const s1 = new Student();

// 私有方法二
const func1 = Symbol('myfucn');
class PC{
    [func1](){
        return 1;
    }
}

const pc1 = new PC();

// new.target 返回当前被new的类

class Parent{
    constructor(){
        console.log(new.target === Parent);
        if (new.target === Parent) {
            throw Error('不能newParent');
        }
    }
}


class Child extends Parent{
    constructor(){
        super();
    }
}
const c1 = new Child();
