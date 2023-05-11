class Vec{
    #x;
    #y;

    constructor(x, y){
        this.#x = x;
        this.#y = y;
    };

    getX() {return this.#x};
    getY() {return this.#y};
    plus(another) {
        this.#x += another.getX();
        this.#y += another.getY();
        return `Vec[ x: ${this.#x}, y:${this.#y} ]`;
    };
    minus(another) {
        this.#x -= another.getX();
        this.#y -= another.getY();
        return `Vec[ x: ${this.#x}, y:${this.#y} ]`;
    };

    get length() {
        return Math.sqrt(Math.pow(this.#x) + Math.pow(this.#y));
    };
    }

console.log(new Vec(1, 2).plus(new Vec(2, 3)))
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
// → Vec{x: -1, y: -1}

//this one does't work for me
console.log(new Vec(3, 4).length)
// → 5