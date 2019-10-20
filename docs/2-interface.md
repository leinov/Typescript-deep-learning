## 接口
接口的作用就是为类型命名或为第三方代码定义契约

#### 接口的基本用法

接口使用interface关键字来为对象定义类型格式,建议用大写的I开头
```
interface IStudentInfo {
    name: string; // 属性之间可以用逗号或分号，建议使用分号
    age: number; 
}

function getStudentInfo(info: IStudentInfo) {
    return `this student is ${info.name} and ${info.age} years old`;
}
let myInfo = getStudentInfo({name: 'leinov', age: 18});

```
通过上面的例子我们可以看出接口的主要目的是为对象定义格式和类型，getStudentInfo需要一个info的参数，这个参数是一个对象需要一个string类型的name字段和一个number类型的age字段。如果缺失或多于其他字段都不符合参数的标准，在编译时都会报错。但类型检查不检查定义的每个字段的顺序。只检查是否包含该属性和该属性的类型。接口的好处就是一处定义多处使用，如果其他地方也需要使用到这个类型的接口直接引用就可以

##### 可选属性
有时候我们程序逻辑里的某个属性不是必须的，那我们接口应该怎么处理呢，比如我们想获取一个工程师的姓名，生日和住址，但住址并不是必须的。

```
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

```

#### 只读属性
在程序中有些属性我们是不希望被修改的，这里我们在属性前加上```readonly```关键字那么该属性就不能被修改
```
interface IInfo {
    name: string;
    readonly IDnumber: string;
}

const Info2: IInfo = {
    IDnumber: 'xxxxxxxxx',
    name: 'leinov',
};
Info2.name = 'leilei';
Info2.IDnumber = 'yyyyy'; // Cannot assign to 'IDnumber' because it is a read-only property

```

#### 绕开多于属性检查
有时候可能我们对象需要一些不确定的属性，也就是实际的对象中包含了接口中没有的属性，为了使编译成功我们需要绕开检查，比如
```
interface IHouse {
    address: string;
    size: number

}
```
定义了这样的一个接口 但是我们在使用的时候传入了多于的属性floor

```
function getHouseInfo (house: IHouse) {
    //  
}

getHouseInfo({address: 'huilongguan', size: '50', floor:6});
```
我们多传了一个floor的属性，这样的话在编译就会报错了，在接口IHouse里不存在floor属性，为了编译通过我们有三种方式可以解决

1.类型断言

```
getHouseInfo({address: 'huilongguan', size: 50, floor: 6} as IHouse);

```

2.索引签名

定义一个索引类型为任何类型，这样就可以添加任何属性
```
interface IHouse {
    address: string;
    size: number
    [props: string]: any
}
```

3.将对象赋给另一个变量
```
let house = {address: 'chaoyangmen', size:90, floor:3}
getHouseInfo(house);
```
上面三种都可以绕过多余属性检测

#### 函数类型
同样可以使用interface来定义一个函数的类型,下面定义了一个函数类型，需要两个string类型的参数，返回一个string类型的值
```
interface IFunc {
    (name: string, type: string): string;
}

const myfun: IFunc = (name, type) => {
    return type + name;
};
```

但在我们编写的上面的类型时tslint提醒我们改为type的方式，所以建议函数的话用type的方式来定义类型。

```
type IFunc = (name: string, type: string) => string;
```

#### 索引类型
索引类型是可以通过索引访问属性值的类型，在官网上描述的很多，但我们只需要记住两点，ts支持两种类型的索引签名：字符串和数字
```
interface INumIndex {
    [index: number]: string; // 数字类型索引签名
}
interface IStrIndex {
    [prop: string]: any; // 字符串类型索引签名
}
const indexs: INumIndex = {
    1: 'a',
    2: 'b',
};
console.log(indexs[1]);
const strs: IStrIndex = {
    name: 'leinov',
};
console.log(strs.name);

```
因为以数字作为字段名在被访问时会被转换为字符串，并且数字类型的返回值是字符串索引类型返回值的子类
```
index['1'] === index[1];
const str2: IStrIndex = {
    1: a,
    props: 'red'
}
```

#### 继承接口

接口可以像类一样可以继承，子接口可以拥有父接口的所有属性和自己独有的属性

```
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
```


#### 混合类型
混合类型描述了一个可以包含对象属性，函数多种类型的接口
```
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
```