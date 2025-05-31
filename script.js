const lines = [
  '> Привет, я Шарипов Абдулазиз.',
  '> Backend разработчик. Пишу Телеграм-ботов, работаю с базами данных и API.',
  '> ',
  '> 📫 Контакты:',
  '> Номер Телефона: +998931201734',
  '> Telegram: @BlackObamalol',
  '> Email: amudarya.add@gmail.com',
  '> GitHub: https://github.com/Abdulaziz-spec',
  '> ',
  '> 👨‍💻 Навыки:',
  '> - Python, SQLite3',
  '> - PostgreSQL',
  '> - Docker',
  '> - GitHub Actions, Aiogram, Telebot',
  '> ',
  '> 🚀 Проекты:',
  '> 1) Music-Finder — https://github.com/Abdulaziz-spec/Music-Finder',
  '> 2) API-bot-NASA-ISS — https://github.com/Abdulaziz-spec/API-bot-NASA-ISS',
  '> 3) tg-bot-translator — https://github.com/Abdulaziz-spec/tg-bot-translator',
  '> 4) Registration-Bot — https://github.com/Abdulaziz-spec/Registration-Bot',
  '> ',
  '> 💡 О себе:',
  '> Люблю решать сложные задачи и писать чистый код.',
  '> Всегда в поиске новых технологий и инструментов.',
  '> ',
  '> Жми "Esc" чтобы очистить терминал и начать заново.',
];

const textElem = document.getElementById('text');
let lineIndex = 0;
let charIndex = 0;

function type() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      textElem.textContent += lines[lineIndex][charIndex];
      charIndex++;
      setTimeout(type, 40);
    } else {
      textElem.textContent += '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 600);
    }
  }
}

type();

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    textElem.textContent = '';
    lineIndex = 0;
    charIndex = 0;
    type();
  }
});
