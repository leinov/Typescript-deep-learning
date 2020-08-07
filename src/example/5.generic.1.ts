function echo<T>(arg: T): T {
 return arg;
}

const result = echo('str');

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const result2  = swap(['string', 123]);

// 泛型约束

interface IWithLength {
    length: number;
}

function echoWithLength <T extends IWithLength>(arg: T): T {
    const len = arg.length;
    return arg;
}

const arr = echoWithLength([1, 2, '22']);
const str2 = echoWithLength('str');

// 在类中的使用
class Queue<T> {
    private data: T[] = [];
    public push(item: T) {
        this.data.push(item);
    }
    public pop() {
        return this.data.pop();
    }
}

const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop()?.toFixed());
const queue2 = new Queue<string>();
queue2.push('111');
console.log(queue2.pop()?.length);

// interface中使用
interface IKeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: IKeyPair < string, number> = {key: 'str', value: 1};
let kp2: IKeyPair < number, string> = {key: 1, value: 'str'};

let arrr: number[] = [1, 2, 3];
let arrr2: Array<number> = [1, 2, 3];

// 函数中使用
type IPlus<T> = (a: T, b: T) => T;
function plus(a: string, b: string): string  {
    return a + b;
}

const resultsss: IPlus<string> = plus;
