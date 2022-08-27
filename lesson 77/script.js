'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { //расширяем класс Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width); //наследуем height и width
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea()); //div наследует также метод calcArea от класса Rectangle

// const square = new Rectangle(10, 10);
// console.log(square.calcArea());