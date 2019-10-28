// 定义函数类型
let myFunType: (arg1: string, arg2: string) => string;

myFunType = (arg1: string, arg2: string): string => arg1 + arg2;

console.log(myFunType('name and ', 'age'));

// 使用类型别名定义函数类型
type addFun = (arg1: string, arg2: number) => string;
type isNumber = number;
let myAddFun: addFun = (arg1: string, arg2: isNumber): string => arg1 + arg2;

// 也可以直接写成下面这种函数内不需要再写类型的方式
let myAddFun2: addFun = (arg1, arg2) => arg1 + arg2;

myAddFun('1', 2);

// 函数的可选参数
// 注意，可选参数必须在必选参数的后面，否则会报错，这点与es6不同
type optionalParameters = (arg1: number, arg2: number, arg3?: number) => number;

let opFunc1: optionalParameters = (arg1: number, arg2: number): number => arg1 + arg2;
opFunc1 = (arg1: number, arg2: number, arg3: number): number => arg1 + arg2 + arg3;
opFunc1(2, 3);

// 参数默认值

type parameterDefaultValue = (arg1: number, arg2?: number) => number;
let pDFunc: parameterDefaultValue = (arg1: number, arg2: number = 10) => arg1 * arg2;
console.log(pDFunc(1, 2));
console.log(pDFunc(2));

let pf2 = (arg1: number, arg2: number = 10) => {
    return arg1 + arg2;
};

// 剩余参数
const restParametersFun = (arg1: number, ...args: number[]) => {
    if (args.length > 0) {
        return `${arg1}-${args.join('-')}`;
    } else {
        return arg1;
    }
};
console.log(restParametersFun(1));
console.log(restParametersFun(1, 2, 3, 4));

// 函数重载
interface IPadding {
    padding: string;
}
function padding(top: number, right?: number): IPadding;
function padding(top: number, right: number, left: number, bottom: number): IPadding;
function padding(top: number, right?: number, bottom?: number, left?: number): IPadding {
    if (!right && !bottom && !left) {
        return {padding: `${top}px`};
    } else if (!bottom && !left) {
        return {padding: `${top}px ${right}px`};
    } else {
        return {padding: `${top}px ${right}px ${bottom}px ${left}px`};
    }
}
padding(5);
console.log(padding(5, 10));
padding(1, 2, 3, 4);
