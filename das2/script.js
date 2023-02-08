class Transport {
    constructor(speed) {
        this.distance = distance;
    }
    move() {
        this.distance++
    }
}


class Car extends Transport {
    constructor(door, color, speed) {
        this.door = door;
        this.color = color;
        this.speed = speed;
        this.distance = distance;
    }

}
let Mercedes = new Car(4, "black", 300);
console.log(Mercedes.distance); 