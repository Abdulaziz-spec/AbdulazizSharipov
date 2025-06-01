const input = document.getElementById('command-input');
const output = document.getElementById('output');

const commands = {
    help: `
  Доступные команды:
   - about      - Информация обо мне
   - projects   - Мои проекты
   - contact    - Контакты
   - hack       - Запустить фейковый взлом
   - clear      - Очистить экран
   - ls         - Показать список файлов
   - pwd        - Показать текущий каталог
   - top        - Показать процессы
   - htop       - То же, что и top
   - cat        - Просмотреть содержимое файла (например, cat secret.txt)
   - decrypt    - Расшифровать файл (например, decrypt darknet_secret.txt)
    `,
    about: `
  Имя: Abdulaziz Sharipov
  Роль: Backend-разработчик
  Навыки: Python, Linux, API, Telegram Bots, OOP
    `,
    projects: `
    📁 <a href="https://github.com/Abdulaziz-spec/Music-Finder" target="_blank" rel="noopener noreferrer">TelegramMusicBot</a><br>
    📁 <a href="https://github.com/Abdulaziz-spec/AbdulazizSharipov" target="_blank" rel="noopener noreferrer">My Site</a><br>
    📁 <a href="https://github.com/Abdulaziz-spec/API-bot-NASA-ISS" target="_blank" rel="noopener noreferrer">NASA API's</a>
  `,
  
    contact: `
  Telegram: @BlackObamalol
  GitHub: https://github.com/Abdulaziz-spec
  Email: amudarya.add@gmail.com
    `,
    secret: `
                        ************
                        *  СЕКРЕТ  *
                        ************
                    ДОКЛАД СПЕЦОПЕРАЦИИ                       
                       "BLACK MIRROR"  
[*] Вам не Хватает прав для прочтение Может вы найдёте в файле darknet_secret.txt?....      
    `,
    darknet_secret: `
  ████████████████████████████████████████████████████████████████████████████████████████
  █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
  █                                     ДОКЛАД СПЕЦОПЕРАЦИИ                              █
  █                                       "BLACK MIRROR"                                 █
  █                                                                                      █
  █  ЦЕЛЬ: Комплексное исследование и перехват запрещённых каналов                       █
  █        в даркнете.                                                                   █
  █                                                                                      █
  █  ВРЕМЯ: 2025-06-01                                                                   █
  █  ЛОКАЦИЯ: Не разглашается                                                            █
  █  КОДОВОЕ ИМЯ: BM-Alpha                                                               █
  █                                                                                      █
  █--------------------------------------------------------------------------------------█
  █                                   ОПЕРАТИВНЫЕ ДАННЫЕ                                 █
  █--------------------------------------------------------------------------------------█
  █ 1) Взломано 18 анонимных узлов Tor, включая 3 «входных шлюза»                        █
  █ 2) Извлечено ~320 GB зашифрованных данных:                                           █
  █    - Документы и архивы                                                              █
  █    - Черновики операций                                                              █
  █    - Ключи доступа и пароли                                                          █
  █ 3) Методы шифрования: AES-256, RSA 4096, ChaCha20                                    █
  █ 4) Время перехвата: 72 часа                                                          █
  █                                                                                      █
  █--------------------------------------------------------------------------------------█
  █                        АНАЛИЗ ПОЛУЧЕННЫХ ДАННЫХ                                      █
  █--------------------------------------------------------------------------------------█
  █ - Выявлено 12 активных группировок, связанных с торговлей                            █
  █   нелегальными товарами и услугами.                                                  █
  █ - Зафиксировано использование стеганографии для скрытия кода                         █
  █   в медиафайлах (.png, .mp4).                                                        █
  █ - Обнаружены командные центры с IP, изменяемыми через Tor bridges.                   █
  █ - Множество связей с поверхностным интернетом через прокси-серверы.                  █
  █                                                                                      █
  █--------------------------------------------------------------------------------------█
  █                       РЕКОМЕНДАЦИИ И ПРЕДУПРЕЖДЕНИЯ                                  █
  █--------------------------------------------------------------------------------------█
  █ * Используйте многоуровневое шифрование для защиты данных.                           █
  █ * Не разглашайте оперативные сведения вне узкого круга.                              █
  █ * Постоянно меняйте используемые VPN и прокси для сохранения анонимности.            █
  █ * Проверяйте подписи и хеш-суммы всех файлов перед обработкой.                       █
  █ * Помните, что агрессивные действия могут привести к блокировке.                     █
  █                                                                                      █
  █--------------------------------------------------------------------------------------█
  █                             ДОПОЛНИТЕЛЬНО                                            █
  █--------------------------------------------------------------------------------------█
  █ [!] Обнаружена уязвимость CVE-2025-1234:                                             █
  █     - Позволяет обходить двухфакторную аутентификацию                                █
  █     - Активно эксплуатируется в даркнете                                             █
  █                                                                                      █
  █ [!] ИНДИКАТОРЫ КОМПРОМИТАЦИИ (IOC):                                                  █
  █     • IP: 185.230.12.10                                                              █
  █     • Хеш SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   █
  █     • Команда: «blackmirror-team»                                                    █
  █                                                                                      █
  █--------------------------------------------------------------------------------------█
  █                           КОДОВЫЕ ФРАГМЕНТЫ                                          █
  █--------------------------------------------------------------------------------------█
  █ 7F2A-9BC4-3D12-FF8E                                                                  █
  █ 1F8E-3C9B-A6DE-72F1                                                                  █
  █ 0B2F-7D4A-E91C-5A3B                                                                  █
  █                                                                                      █
  █--------------------------------------------------------------------------------------█
  █                         КОНЕЦ ДОКЛАДА                                                █
  ████████████████████████████████████████████████████████████████████████████████████████
    `,
    decrypt_message: `
  [Расшифровка завершена]
  
  ВНИМАНИЕ!
  
  Это сообщение создано с целью тестирования.
  
  "Золотая рыбка не принесет тебе никакой удачи,
  если ты не бросишь монету в колодец."
  
  Продолжай искать... или просто расслабься.
    `,
    malware: `
  ⚠️ ВНИМАНИЕ! Файл Malware.exe содержит вредоносный код.
  Его запуск может повредить систему.
    `

  };
  

  commands["notes.txt"] = `
  📒 Заметки:
  - 2025-06-01: Запланировать релиз проекта Music Finder.
  - Встреча с командой в 15:00.
  - Не забыть проверить CVE-2025-1234.
  - Идея: добавить функцию распознавания аудио в TelegramMusicBot.
`;


commands["config.json"] = `
{
  "botToken": "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
  "adminUser": "Abdulaziz",
  "maxConnections": 100,
  "enableLogging": true,
  "theme": "dark"
}
`;


commands["projects/"] = `
  TelegramMusicBot/
  AbdulazizSharipov/
  API-bot-NASA-ISS/
`;

commands["decrypt_message.txt"] = `
  [Сообщение после расшифровки]
  
  "Не всё золото, что блестит.
  Иногда ключ к успеху — внутри."
`;

  
  
function typeLog(text, className = 'command', callback) {
  let i = 0;
  const div = document.createElement('div');
  div.className = className;
  output.appendChild(div);

  function type() {
    if (i < text.length) {
      div.textContent += text.charAt(i);
      i++;
      output.scrollTop = output.scrollHeight;
      setTimeout(type, typingSpeed / fastMode);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function fakeLS(callback) {
  const files = [
    "README.md",
    "projects/",
    "notes.txt",
    "scripts/",
    "config.json",
    "data.csv",
    "secret.txt",
    "darknet_secret.txt",
    "decrypt_message.txt",
    "Malware.exe",
  ];
  typeLog(files.join("  "), "success", callback);
}

function fakePWD(callback) {
  const path = "/home/abdulaziz";
  typeLog(path, "success", callback);
}

function fakeTop(callback) {
  const currentUser = getCurrentUserInfo();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomIP() {
    return `${getRandomInt(10, 250)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}`;
  }

  const fakeProcesses = [
    { pid: 2345, user: "user1234", cpu: "7.8%", mem: "4.5%", command: "python", ip: getRandomIP() },
    { pid: 3456, user: "user5678", cpu: "3.3%", mem: "2.0%", command: "node", ip: getRandomIP() },
    { pid: 4567, user: "user9101", cpu: "1.1%", mem: "0.7%", command: "vim", ip: getRandomIP() },
    { pid: 5678, user: "root", cpu: "0.0%", mem: "0.1%", command: "cron", ip: getRandomIP() },
  ];

  const processes = [
    { pid: 9999, user: "you", cpu: "12.5%", mem: "8.2%", command: "browser", ip: currentUser.ip }
  ].concat(fakeProcesses);

  const header = "PID    USER                 CPU%   MEM%   COMMAND    IP";

  typeLog(header, "command", () => {
    let i = 0;

    function padRight(str, len) {
      if (str.length >= len) return str;
      return str + " ".repeat(len - str.length);
    }

    function showNextProcess() {
      if (i < processes.length) {
        const p = processes[i];
        const line =
          padRight(p.pid.toString(), 6) +
          padRight(p.user, 21) +
          padRight(p.cpu, 7) +
          padRight(p.mem, 7) +
          padRight(p.command, 11) +
          p.ip;
        typeLog(line, "success", () => {
          i++;
          setTimeout(showNextProcess, 200);
        });
      } else if (callback) {
        callback();
      }
    }
    showNextProcess();
  });
}

function getCurrentUserInfo() {
  const ua = navigator.userAgent;

  let os = "Неизвестная ОС";
  if (ua.indexOf("Win") !== -1) os = "Windows";
  else if (ua.indexOf("Mac") !== -1) os = "macOS";
  else if (ua.indexOf("Linux") !== -1) os = "Linux";
  else if (ua.indexOf("Android") !== -1) os = "Android";
  else if (ua.indexOf("like Mac") !== -1) os = "iOS";

  let browser = "Неизвестный браузер";
  if (ua.indexOf("Chrome") !== -1) browser = "Google Chrome";
  else if (ua.indexOf("Firefox") !== -1) browser = "Mozilla Firefox";
  else if (ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1) browser = "Safari";
  else if (ua.indexOf("Edg") !== -1) browser = "Microsoft Edge";
  else if (ua.indexOf("Opera") !== -1 || ua.indexOf("OPR") !== -1) browser = "Opera";

  const ip = "192.168.1.42";

  return {
    username: "you (текущий пользователь)",
    ip,
    os,
    browser,
    lastSeen: new Date().toLocaleString()
  };
}

function fakeHackWithUserInfo(callback) {
  const logs = [
    "[*] Инициализация процесса взлома...",
    "[*] Подключение к серверу...",
    "[*] Сканирование сети...",
    "[*] Поиск уязвимостей...",
    "[!] Обнаружена уязвимость CVE-2025-1234",
    "[*] Использование эксплойта...",
    "[*] Получение доступа root...",
    "[*] Извлечение пользовательских данных...",
    "[*] Анализ среды выполнения..."
  ];

  let idx = 0;

  function nextLog() {
    if (idx < logs.length) {
      let cls = "command";
      if (logs[idx].startsWith("[!]")) cls = "error";
      typeLog(logs[idx], cls, () => {
        idx++;
        setTimeout(nextLog, 400);
      });
    } else {
      showUserList();
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomIP() {
    return `${getRandomInt(10, 250)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}`;
  }

  function getRandomOS() {
    const osList = ["Windows 10", "Windows 11", "macOS Ventura", "Ubuntu 22.04", "Debian 11", "Android 13", "iOS 16"];
    return osList[getRandomInt(0, osList.length - 1)];
  }

  function getRandomBrowser() {
    const browsers = ["Google Chrome", "Mozilla Firefox", "Safari", "Microsoft Edge", "Opera", "Brave"];
    return browsers[getRandomInt(0, browsers.length - 1)];
  }

  const currentUser = getCurrentUserInfo();
  const fakeUsers = [currentUser];
  const usersCount = 6;

  for (let i = 0; i < usersCount; i++) {
    fakeUsers.push({
      username: `user${getRandomInt(1000, 9999)}`,
      ip: getRandomIP(),
      os: getRandomOS(),
      browser: getRandomBrowser(),
      lastSeen: new Date(Date.now() - getRandomInt(0, 86400000)).toLocaleString()
    });
  }

  let userIndex = 0;

  function showUserList() {
    if (userIndex < fakeUsers.length) {
      const u = fakeUsers[userIndex];
      const line = `[${userIndex + 1}] Пользователь: ${u.username} | IP: ${u.ip} | ОС: ${u.os} | Браузер: ${u.browser} | Последний визит: ${u.lastSeen}`;
      typeLog(line, "success", () => {
        userIndex++;
        setTimeout(showUserList, 300);
      });
    } else {
      typeLog("[*] Все данные успешно получены. Будьте осторожны!", "command");
      if (callback) callback();
    }
  }

  nextLog();
}

let typingSpeed = 25;
let fastMode = 1;
const maxFastMode = 4;

function runCommand(cmd) {
    if (!cmd) return;
    output.innerHTML += `<div><span class="prompt">[root@abdulaziz ~]#</span> ${cmd}</div>`;
    const c = cmd.toLowerCase();
  
    if (c === "clear") {
      output.innerHTML = "";
    } else if (c === "help") {
      typeLog(commands.help, "command");
    } else if (c === "hack") {
      fakeHackWithUserInfo();
    } else if (c === "ls") {
      fakeLS();
    } else if (c === "pwd") {
      fakePWD();
    } else if (c === "top" || c === "htop") {
      fakeTop();
    } else if (c.startsWith("cat ")) {
      // Получаем исходный файл без преобразования регистра
      const fileOriginal = cmd.slice(4).trim();
      // И сравниваем в нижнем регистре для проверки
      const fileLower = fileOriginal.toLowerCase();
  
      if (fileLower === "secret.txt") {
        typeLog(commands.secret, "success");
      } else if (fileLower === "darknet_secret.txt") {
        typeLog(commands.darknet_secret, "success");
      } else if (fileLower === "malware.exe") {
        typeLog(commands.malware, "success");
      } 
      else if (fileLower === "notes.txt") {
        typeLog(commands["notes.txt"], "success");
      }
        else if (fileLower === "config.json") {
        typeLog(commands["config.json"], "success");
      } else if (fileLower === "decrypt_message.txt") {
        typeLog(commands["decrypt_message.txt"], "success");
      } else if (fileLower === "projects/") {
        typeLog(commands["projects/"], "success");
      }
      
      else {
        typeLog(`cat: файл "${fileOriginal}" не найден`, "error");
      }
    } else if (c.startsWith("decrypt ")) {
      const fileLower = cmd.slice(8).trim().toLowerCase();
      if (fileLower === "darknet_secret.txt") {
        typeLog("Начинаем расшифровку файла darknet_secret.txt...", "command", () => {
          setTimeout(() => {
            typeLog(commands.decrypt_message, "success");
          }, 1500);
        });
      } else {
        typeLog(`decrypt: файл "${cmd.slice(8).trim()}" не найден или не подлежит расшифровке`, "error");
      }
    } else if (c === "malware.exe") {
      fakeMalwareExecution();
    } else if (commands[c]) {
      typeLog(commands[c], "command");
    } else {
      typeLog(`Команда не найдена: ${cmd}`, "error");
    }
    output.scrollTop = output.scrollHeight;
  }
  


  
  function fakeMalwareExecution(callback) {
    const currentUser = getCurrentUserInfo();
  
    const logs = [
      "[*] Запуск Malware.exe...",
      "[*] Инициализация вредоносного кода...",
      "[*] Проверка системных процессов...",
      "[!] Обнаружено антивирусное ПО. Попытка обхода...",
      "[*] Шифрование файлов пользователя...",
      `[*] Это Была Троянская Программа Теперь все Ваши пароли у Хакера вот твой IP Адресс ${currentUser.ip}`,
      "[*] Отправка данных на удалённый сервер...",
      "[*] Маскировка активности...",
      "[*] Завершение работы Malware.exe",
      "[*] Автоудаление Malware.exe",
      "[*] Внимание: ваша система БЫЛА заражена!"
    ];
  
    let idx = 0;
  
    function showNextLog() {
      if (idx < logs.length) {
        let cls = "command";
        if (logs[idx].startsWith("[!]")) cls = "error";
        typeLog(logs[idx], cls, () => {
          idx++;
          setTimeout(showNextLog, 600);
        });
      } else if (callback) {
        callback();
      }
    }
  
    showNextLog();
  }
  
  
let commandHistory = [];
let historyIndex = -1;  // Для навигации по истории

function onCommandEnter(cmd) {
    if (cmd.trim() !== "") {
      commandHistory.push(cmd);
      historyIndex = commandHistory.length;  // Сбросить индекс
    }
    runCommand(cmd);
  }

  
  input.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      // При нажатии Tab показываем предыдущую команду и вставляем ее в input
      if (commandHistory.length > 0) {
        if (historyIndex === commandHistory.length) {
          // Если индекс указывает на "пустое место" (после последней команды),
          // сдвинем на последнюю команду
          historyIndex = commandHistory.length - 1;
        }
        input.value = commandHistory[historyIndex];
      }
    }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      if (historyIndex > 0) {
        historyIndex--;
        input.value = commandHistory[historyIndex];
      } else if (historyIndex === -1) {
        historyIndex = commandHistory.length - 1;
        input.value = commandHistory[historyIndex];
      }
    }
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        input.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        input.value = "";
      }
    }
    else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = input.value.trim();
      if (cmd !== "") {
        commandHistory.push(cmd);
        historyIndex = commandHistory.length; // сбросить индекс
        runCommand(cmd);
        input.value = "";
      }
    }
  });
  
  
  
  
input.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    fastMode++;
    if (fastMode > maxFastMode) fastMode = 1;
  }

  if (e.key === "Enter") {
    e.preventDefault();
    const val = input.value.trim();
    input.value = "";
    runCommand(val);
  }
});

window.onload = () => {
  runCommand("help");
  input.focus();
};
