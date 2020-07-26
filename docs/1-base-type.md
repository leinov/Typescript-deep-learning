## 基础类型

typescript的基础类型涵盖了JavaScript的六种数据类型(string,number,boolean,null,undefined,object),并添加了类似枚举，元祖等更丰富实用的基础数据类型

#### 基础类型的写法
```
let val : type = value
```
可以用上面的公式来了解ts中类型的定义，其中type就是变量的类型，在定义了该类型后，所赋值必须为该类型的值，否则编译就会报错，这就是ts的意义所在，让代码更加严谨，注意：基础类型都是小写 ```let name: string = 10```

####  布尔
布尔类型是TS中最简单的类型，只有true/false两个值，用boolean表示
```
let isOk: boolean = true;
let isNice: boolean = false;
```
#### 字符串
用```string```标识字符串类型
```
let name: string = 'leinov'
str = 4 // Error 不能将数值赋给string
```
同样支持es6的模板字符串
```
let info = `my name is ${name}`
```

#### 数字
Ts中所有数字都是浮点数，类型为```number```，除了支持10进制，还支持16进制2进制和8进制
```
let num1: number = 3; // 十进制
let num2: number = 0xf00d; // 十六进制
let num3: number = 0b1010; // 二进制
let num4: number = 0o744; // 八进制
```

#### 数组
JavaScript的基本类型中没有数组类型。ts的数组类型有两种表达方式

1. 元素类型+[]

```
let arr1: string[] = ["beijing", "shanghai"];
```

2. 数组泛型(不推荐)

```
let arr2: Array<number> = [1, 2, 3];
```
推荐使用上面第一种方式

#### 元组 Tupe

元组表示类型表示一个已知**元素数量**和**元素类型**的数组，并且所赋值的数组元素个数和元素类型一一对应。

```
let tuple: [string, number, boolean];
tuple = ["hello", 2, false];
```
虽然官方说可以访问越界的元素，但都不推荐使用，严格按照类型的格式来赋值

#### 枚举 Enum

枚举enum在后端语言中使用较多，枚举类型最大的作用就是让数字拥有直观的名字，便于代码的阅读和维护，比如
```
enum Day {
    Sun,
    Mon,
    Tues,
    Wed,
    Thurs,
    Fri,
    Set
}
```
上面定义的枚举类型，我们一眼就能看出来是一周的七天，默认情况下从0开始为元素编号，所以Sun代表0，Fri代表5，我们可以像访问对象一样来获取枚举类型的值
```
if (Day.Fri) {
    console.log('今天是个工作日');
}
```
我们也可以手动为制定枚举元素的值,比如我们指定城市的邮编，如果某个没有指定，则按照上一个+1往下排
```
enum City {
    BeiJing = 100000,
    ShangHai = 200000,
    ShenZhen = 518000,
}
```

#### Any
any表示任意类型，用在我们不确定该值是何种类型的时候，主要是动态的内容，比如用户的输入或第三方代码库，我们希望在ts编译过程中可以通过
```
let anyone: any;
anyone = 1;
anyone = false;
anyone.ok();
let arr3: any[];
arr3 = [1, false, {name: "leinov"}];
```
但不建议大面积使用any，这样就失去了使用ts的最大意义

#### Void
void类型跟any恰恰相反，any代表任意类型，void表示没有任何类型，主要用在没有返回值的函数
```
function doIt(): void {
    console.log("执行函数");
}
```
不要声明一个void类型的变量

#### Null 和 Undefined

ts中null和undefined和js中一样都各自表示一种类型。他们本身的用处不是很大。
```
let isNull: null = null;
let un: undefined; // 如果初始化值时ts会警告没必要舒适化一个undefined的值给一个undefined类型
```

#### Nerver
never类型表示的是那些永不存在的值的类型，该类型应该是开发中使用最少的类型，有下面两种情况可以用到never类型。
1. 抛出异常的函数
```
function error(msg: string): never {
    throw new Error(msg);
}
error("这是一个异常");
```
2. 无法达到终点的函数
```
function loop(): never {
    while (true) {
        console.log("没有终点");
    }
}
loop(); // don't do this
```

#### Object
object表示非原始类型之外的类型
```
let obj: object;
obj = {
    name: 'leinov'
}
obj = new Date();
```

## 类型断言 
有时候我们的代码在执行判断时并不知道这是什么类型，而在调用了某个类型的方法，但编译器就会报错，比如下面的参数key是string或number类型，当编译到key.length的时候，编译器就会报错表示number没有length属性，类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”，让代码通过编译。
类型断言有两种形式。 

1. as语法：
```
function getLen(key: (string | number)) {
    if ((key as string).length) {
        return (key as string).length;
    } else {
        return key.toString().length;
    }
}
```

2. 尖括号语法 （不推荐这种用法）

```
let test: any = "string";
let len = (<string> test).length;
```