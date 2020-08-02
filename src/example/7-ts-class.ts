class Animal {
    public readonly add: string;
    protected age: number;
    private name: string;
    constructor(obj) {
        this.name =  obj.name;
        this.age = obj.age;
        this.add = obj.age;
    }

    public eat() {
        return `${this.name} is eating`;
    }
}
