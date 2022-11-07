const fs = require('fs');
const path = require('path');
const { stdin: input, stdout: output } = require('process');
const readline = require('readline'); // модуль построчного считывания

const thePathToFile = path.join('02-write-file', 'text.txt');
const fileText = new fs.createWriteStream(thePathToFile);

//создаем интерфейс который принимает ввод и вывод

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  
});

output.write('Вводи в меня полностью!\n');

rl.on('line', (text) => {
  if (text.trim() === 'exit') {
    rl.close();
  } else {
    fileText.write(text +'\n');
  }

});

rl.on('close',() =>{
  output.write('Всего хО-рО-шЕ-гО!\n');
  rl.close();

});

