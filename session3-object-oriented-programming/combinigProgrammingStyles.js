
const createCircle = (createPoint, radius) => {
    const center = createPoint;
    const getRadius = () => {return radius};
    const getCenterX = () => center.getX();
    const getCenterY = () => center.getY();
    const moveCenterTo = (newX, newY) => center.moveTo(newX, newY);
    const toString = () => `Center: ${center.toString()} , Radius: ${radius}`
   return {getRadius, getCenterX, getCenterY, moveCenterTo, toString};
}

const createPoint = (x, y) => {
    const getX = () => { return x};
    const getY = () => {return y};
    const moveTo = (newX, newY) => {this.x = newX; this.y = newY;}
    const toString = () => `This point has x = ${x} and y = ${y}.`;

    return {getX, getY, moveTo, toString};
}



//console.log(createCircle(createPoint(1, 2), 4).toString())

const arrayOfCircles = [createCircle(createPoint(1, 2), 5), createCircle(createPoint(1, 2), 6), createCircle(createPoint(1, 2), 7)];
const arrayOfRad = arrayOfCircles.map((item) => item = item.getRadius());
console.log(arrayOfRad);