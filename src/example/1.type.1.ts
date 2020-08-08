type PlusType = (x: number, y: number) => number;

function sum(x: number, y: number): number {
    return x + y;
}

const sum2: PlusType = sum;

interface IFunctionComponent<P = {}> {
    (props: any): any;
    propTypes?: string;
}

interface ITS {
    msg: string;
}
const fn: IFunctionComponent<ITS> = (props) => {
    return props;
};
