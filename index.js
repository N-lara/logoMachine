// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//input 3char, txtColor, shape, shape Color => logo.svg 300x200

// import inquirer from './node_modules/inquirer/lib/inquirer.js';

// import fs from "fs";
const {Triangle, Rectangle, Circle} = require('./lib/shapes');

// console.log('logo maker choose specs and make your logo!')

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//         type: 'list',
//         name: 'shape',
//         message: 'pick a shape:',
//         choices: ['Circle', 'Square', 'Triangle'],
//     },
//     {
//         type: 'input',
//         name: 'shapeColor',
//         message: 'what color would you like your shape?',
//     },
//     {
//         type: 'input',
//         name: 'text',
//         message: 'what text is going in your shape?(3 characters max)',
//     },
//     {
//         type: 'input',
//         name: 'textColor',
//         message: 'what color would you like the text?',
//     }
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     console.log(answers);

//     // fs.writeFile('logo.svg',''''''''''''''''''''content'''''''''''''''''''', (err)=>
//     // err? console.log(err) : console.log('Generated logo.svg')
//     // );
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//       console.log('error:' + error);
//     } else {
//       // Something else went wrong
//       console.log('an unexpected error occurred');
//     }
//   });
const shape = new Rectangle;
shape.setColor="blue";
shape.text="WIN";
shape.textColor='red'
shape.render();
shape.renderText();
shape.makeSVG();
console.log(shape);
console.log(shape.masterSVG);