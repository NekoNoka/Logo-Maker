const inquirer = require('inquirer');

class CLI {
	constructor() {
		this.responses = {};
	}
	run() {
		return inquirer.prompt([
			{
				type: 'input',
				name: 'color',
				message: 'Enter shape color: (hex, text)'
			},
			{
				type: 'input',
				name: 'shape',
				message: 'Enter shape: [circle, triangle, square]'
			},
			{
				type: 'input',
				name: 'text',
				message: 'Enter text: (text)'
			},
			{
				type: 'input',
				name: 'textColor',
				message: 'Enter text color: (hex, text)'
			}
		]).then(({ color, shape, text, textColor }) => {
			this.responses = [[color, 1], [shape, 2], [text, 0], [textColor, 1]];
		});
	}
}

module.exports = CLI;
