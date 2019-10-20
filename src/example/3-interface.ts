// 接口基本使用
interface IStudentInfo {
    name: string;
    age: number;
}

function getStudentInfo(info: IStudentInfo) {
    return `this student is ${info.name} and ${info.age} years old`;
}
let myInfo = getStudentInfo({name: 'leinov', age: 18});
console.log(myInfo);

// 可选属性
interface  IEnginnerInof {
    name: string;
    birth: string;
    address?: string; // 在属性后加一个问号表示该字段是可选的，可有可无
}

function createNewEnginner(info: IEnginnerInof) {
    this.name = info.name;
    this.birth = info.birth;
    this.address = info.address || '无';
}
createNewEnginner.prototype.getInfo = function() {
    return `${this.name} ${this.birth} ${this.address}`;
};
const newEnginner = new createNewEnginner({name: 'one', birth: '1995', address: 'beijing'});
const newEnginner2 = new createNewEnginner({name: 'two', birth: '1998'});

console.log(newEnginner.getInfo()); // one 1995 beijing
console.log(newEnginner2.getInfo()); // two 1998 无

// 只读属性
interface IInfo {
    name: string;
    readonly IDnumber: string;
}

const Info2: IInfo = {
    IDnumber: 'xxxxxxxxx',
    name: 'leinov',
};
Info2.name = 'leilei';
// Info2.IDnumber = 'yyyyy'; // Cannot assign to 'IDnumber' because it is a read-only property

// 绕开多余属性检测
interface IHouse {
    address: string;
    size: number;
    [props: string]: any;
}
function getHouseInfo(house: IHouse) {
    console.log(house);
}
// 1. 类型断言
getHouseInfo({address: 'huilongguan', size: 50, floor: 6} as IHouse);
// 2. 索引签名
getHouseInfo({address: 'xierqi', size: 100, price: 200});
// 3.将对象赋值给另一个变量
let house2 = {address: 'chaoyangmen', size: 90, floor: 3};
getHouseInfo(house2);

// 函数类型
// ts建议函数类型使用type定义
type IFunc = (name: string, type: string) => string;
const myfun: IFunc = (name, type) => {
    return type + name;
};

// 索引类型
interface INumIndex {
    [index: number]: string;
}
interface IStrIndex {
    [x: string]: any;
}
const indexs: INumIndex = {
    1: 'a',
    2: 'b',
};
console.log(indexs[1] === indexs['1']);
const strs: IStrIndex = {
    name: 'leinov',
    1: 'a',
};
console.log(strs.name);

// 继承接口
interface ICat {
    region: string;
    breed: string;
}
interface  IShortHair extends ICat {
    color: string;
}
const piu: IShortHair = {
    region: 'England',
    breed: 'Short Hair',
    color: 'silver',
};

// 混合接口类型
interface IMixInterface {
    (): void;
    prop: number;
}

const myFun = (): IMixInterface => {
    const f = () => {
       f.prop++;
    };
    f.prop = 0;
    return f;
};
const myf = myFun();
myf();
console.log(myf.prop);
myf();
console.log(myf.prop);
