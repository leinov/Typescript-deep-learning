// 1. 布尔型
let isOk: boolean = true;
let isNice: boolean = false;

// 2. 字符串类型
let str: string;
str = "leinov";
str = `my name is ${str}`;
console.log(str);

// 3. 数字类型
let num1: number = 3; // 十进制
let num2: number = 0xf00d; // 十六进制
let num3: number = 0b1010; // 二进制
let num4: number = 0o744; // 八进制
// 4. 数组类型
let arr1: string[] = ["beijing", "shanghai"]; // 形式1
let arr2: Array<number> = [1, 2, 3]; // 形式2

// 5. 元祖类型
let tuple: [string, number, boolean];
tuple = ["hello", 2, false]; // 必须与上面定义的元祖类型数量一一对应

// 6.枚举类型
enum Day {
    Sun,
    Mon,
    Tues,
    Wed,
    Thurs,
    Fri,
    Set,
}
// 默认从0开始为元素编号
console.log(Day.Fri); // 5

// 手动赋值
enum City {
    BeiJing = 100000,
    ShangHai = 200000,
    ShenZhen = 518000,
}
if (City.BeiJing) {
    console.log(City.BeiJing);
}

// 7. any类型
let anyone: any;
anyone = 1;
anyone = false;
// anyone.ok();
let arr3: any[];
arr3 = [1, false, {name: "leinov"}];

// 8. void类型
// 与any相反，没哟任何类型,一般作为没有返回值的函数类型
function doIt(): void {
    console.log("执行函数");
}

// 9. null类型
// null是所有类型的子类
let isNull: null = null;

// 10. undefined类型
let u: undefined;
u = undefined;
// 11 never类型
// never类型表示的是那些永不存在的值的类型
function error(msg: string): never {
    throw new Error(msg);
}
// error("这是一个异常");

function loop(): never {
    while (true) {
        console.log("没有终点");
    }
}
// loop();

// 12. object
declare function create(o: object | null): void;
let obj: object;
obj = new Date();

// create({name: "leinov"});

// 类型断言
// 1. as语法
function getLen(key: (string | number)) {
    if ((key as string).length) {
        return (key as string).length;
    } else {
        return key.toString().length;
    }
}
// 2. 尖括号语法 （不推荐这种用法）
let test: any = "string";
let len = (<string> test).length;
