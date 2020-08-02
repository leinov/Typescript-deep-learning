interface IAirConditioner {
    openConditioner(): void;
}
interface IRefrigerator {
    openRefrigerator(): void;
}
// 定义class Car来实现接口IAirConditioner
class Car implements IAirConditioner {
    public openConditioner() {
        // dosomething
    }
}

class Room implements IAirConditioner, IRefrigerator {
    public openConditioner() {
        // dosomthing
    }
    public openRefrigerator() {
        // dosomthing
    }
}
