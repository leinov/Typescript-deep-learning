## 基础类型

typescript的基础类型涵盖了JavaScript的六种数据类型(string,number,boolean,null,undefined,object),并添加了类似枚举，元祖等更丰富实用的基础数据类型

## 基础类型的标识方法
```
let val : type = value
```
可以用上面的公式来了解ts中类型的定义，其中type就是变量的类型，在定义了该类型后，所赋值必须为该类型的值，否则编译就会报错，这就是ts的意义所在，让代码更加严谨

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