//creates shape classtocontain some commen variables
class Shape{
    constructor(text, textColor, shape){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape
    }
}
//creates triangle class
class Triangle extends Shape {
    constructor(text, textColor, setColor) {
      super(text, textColor);
      this.shape = 'Triangle';
      this.setColor = setColor;
    }
}
// creates rectangle class
class Rectangle extends Shape {
    constructor(text, textColor, setColor) {
      super(text, textColor);
      this.shape = 'Rectangle';
      this.setColor = setColor;
    }
  } 
//Creates circle class
class Circle extends Shape {
    constructor(text, textColor, setColor) {
      super(text, textColor);
      this.shape = 'Circle';
      this.setColor = setColor;
    }
}
//uses variables from object to create line of svg code for shape
Shape.prototype.render= function(){
    let shapeSVG = ''
    if(this.shape == 'Circle'){
        shapeSVG = `<circle cx="150" cy="100" r="80" fill="${this.setColor}" />`
    }else if(this.shape == 'Triangle'){
        shapeSVG = `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor}" />`
    }else if(this.shape == 'Rectangle'){
        shapeSVG = `<rect x="60" y="10" rx="10" ry="10" width="160" height="160" fill="${this.setColor}"/>`
    }
    this.shapeSVG = shapeSVG
    return shapeSVG;
}
//uses variables from object to create line of svg code for text
Shape.prototype.renderText = function(){
    this.textSVG =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    return this.textSVG;
}
//uses created SVG code lines to compile completed SVG content
Shape.prototype.makeSVG= function(){
    console.log('compiling SVG file ...');
    const svgContent =`  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${this.shapeSVG}
  
    ${this.textSVG}
  
  </svg>`;
  this.masterSVG = svgContent;
  return svgContent;
}

exports.Triangle = Triangle;
exports.Circle = Circle;
exports.Rectangle = Rectangle;

