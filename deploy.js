const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Функция для выполнения команды и вывода результата
const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Не удалось выполнить команду: ${command}`, error);
    process.exit(1);
  }
};

// Проверяем, существует ли директория out 
if (!fs.existsSync(path.join(process.cwd(), 'out'))) {
  console.log('Директория out не найдена. Запускаем сборку...');
  runCommand('npm run export');
}

// Создаем .nojekyll файл для GitHub Pages
fs.writeFileSync(path.join(process.cwd(), 'out', '.nojekyll'), '');

console.log('Деплой на GitHub Pages...');
runCommand('npx gh-pages -d out -t true');

console.log('Деплой успешно завершен!'); 