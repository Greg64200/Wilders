const names = ["Koldo","Bastien", "Laurent", "Marie" ];
const colors = ["green", "blue", "yellow","red"];
const chalk = require('chalk');

for (let i = 0; i < names.length; i++) {
console.log(chalk.keyword(colors[i]) (names[i]));
}
