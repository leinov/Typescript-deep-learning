// 没有使用泛型的普通函数
const createArray = (times: number = 3, value: any): any[] => {
    return new Array(times).fill(value);
};

// 创建一个5个长度 每项值为10的数组
createArray(5, 10);
// 创建一个5个长度 每项值为字符串test的数组
createArray(5, 'test');

// 但上面这样就有一个问题 value的类型是any，我们在对插入值做进一步使用的时候就无法得到其类型，比如获取每一行的length属性，但数字类型是没有length属性的

// 1. 使用泛型改造上面的方法
// 在定义函数签名加一个<T> 泛型变量，表明这是一个泛型函数 T表示调用时传入的类型
const createArrayByGen = <T>(times: number, value: T): T[] => {
    return new Array(times).fill(value);
};

const strArrary = createArrayByGen<string>(5, 'test');
const numArrary = createArrayByGen<number>(5, 1);

// 2.多个泛型变量
const createArrayByMoreGen = <T, U> (var1: T, var2: U, times: number): [T, U][] => {
    return new Array(times).fill([var1, var2]);
};

// 调用函数前的类型也可以不用加 ts会自行判断
const mgArr = createArrayByMoreGen<number, string>(1, 'ok', 4);
console.log(mgArr);

// 3.类型别名定义泛型函数
type arrType = <T>(val: T, times: number) => T[];
const createArr: arrType = (val, times) => {
    return new Array(times).fill(val);
};
// createArr(5, 5).map((item) => {
//    return item.length;
// });

// 4.泛型约束
interface IPerson {
    name: string;
    age: number;
    add: string;
}
interface ITeacher  {
    name: string;
    age: number;
    add: string;
    class: number;
}

const getInfo = <T extends ITeacher>(parm): T => {
    return parm;
};

const t1: IPerson = {
    name: 'leinov',
    age: 18,
    add: 'beijing',
};
getInfo<ITeacher>(t1);
// getInfo<IPerson>(t1); // 报错 传入的t1中的属性不满足<T extends ITeacher> 没有class属性

// 泛型约束中使用类型参数

const getProps = <T, K extends keyof T>(object: T, prop: K) => {
    return object[prop];
};
const objInfo = {
    name: 'leinov',
    age: 18,
};
getProps(objInfo, 'age');
// getProps(objInfo, 'add'); 报错
