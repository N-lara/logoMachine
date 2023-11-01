//import needed files
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Rectangle, Circle} = require('./lib/shapes');

console.log('logo maker choose specs and make your logo!')

inquirer
  .prompt([
    /* Pass questions in here */
    {
        type: 'list',
        name: 'shape',
        message: 'pick a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'setColor',
        message: 'what color would you like your shape?',
    },
    {
        type: 'input',
        name: 'text',
        message: 'what text is going in your shape?(3 characters max, case-sensitive)',
        validate: async (input) => {
          if (input.length > 3) {
             return 'max 3 letters';
          }
    
          return true
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'what color would you like the text?',
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    let shape;
    //checks to see what shape was chosen and create that shape
    if(answers.shape=='Circle'){
        shape = new Circle(answers.text, answers.textColor, answers.setColor);
    }else if(answers.shape=='Rectangle'){
        shape = new Rectangle(answers.text, answers.textColor, answers.setColor);
    }else if(answers.shape=='Triangle'){
        shape = new Triangle(answers.text, answers.textColor, answers.setColor);
    }
    console.log(shape);
    //creates shapeSVG
    shape.render();
    //creates textSVG
    shape.renderText();
    //ccompiles them to create svg file content
    shape.makeSVG();
    console.log(shape);
    //this writes the SVG file with the compilex svg text made with makeSVG
    fs.writeFile('logo.svg',shape.masterSVG, (err)=>
    err? console.log(err) : console.log('Generated logo.svg')
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('error:' + error);
    } else {
      // Something else went wrong
      console.log('an unexpected error occurred');
    }
  });
