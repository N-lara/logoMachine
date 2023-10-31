class Shape{
    constructor(text, textColor, shape, setColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape
        this.setColor = setColor;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, setColor, textSVG) {
      super(text, textColor, setColor, textSVG);
      this.shape = 'Triangle'
      this.shapeSVG = ``;
    }
}

class Rectangle extends Shape {
    constructor(text, textColor, setColor, textSVG) {
      super(text, textColor, setColor, textSVG);
      this.shape = 'Rectangle'
      this.shapeSVG = ``;
    }
  } 

class Circle extends Shape {
    constructor(text, textColor, setColor, textSVG) {
      super(text, textColor, setColor, textSVG);
      this.shape = 'Circle'
      this.shapeSVG = ``;
    }
}

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

Shape.prototype.renderText = function(){
    this.textSVG =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
}

Shape.prototype.makeSVG= function(){
    console.log('compiling SVG file ...');
    const svgContent =`  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${this.shapeSVG}
  
    ${this.textSVG}
  
  </svg>`;
  this.masterSVG = svgContent;
  return svgContent
}

module.exports = {
    Triangle,
    Circle,
    Rectangle
}

