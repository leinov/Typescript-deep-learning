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

echoWithLength([1, 2, '22']);
echoWithLength('str');
