# Land Use Art

🔗 **[https://github.com/SergSi/land-use-art](https://github.com/SergSi/land-use-art)**

---

## 📌 О проекте

**Land Use Art** — это шаблон сайта с базой знаний по вопросам землепользования проекта "Искусство землепользования".

### Для кого проект

- Землепользователей
- Сотрудников органов власти
- Юристов и экспертов в сфере земельного права
- Градостроителей и архитекторов
- Специалистов по недвижимости и кадастру

---

## 🛠 Технологии

- **HTML, CSS, JavaScript** — базовая вёрстка и интерактивность
- **Jekyll** — генератор статических сайтов
- **GitHub Pages** — хостинг
- **Чистый код** без зависимостей от фреймворков

---

## 📂 Структура репозитория

land-use-art/
├── _data/                # Данные в формате YAML/JSON
├── _drafts/              # Черновики постов
├── _includes/            # Подключаемые шаблоны
│   ├── header.html
│   └── footer.html
├── _layouts/             # Основные шаблоны страниц
│   ├── default.html
│   └── post.html
├── _posts/               # Опубликованные статьи
├── assets/               # Статические ресурсы
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
├── .gitignore
├── 404.md
├── CNAME
├── Gemfile
├── Gemfile.lock
├── LICENSE
├── README.md
├── _config.yml
├── favicon.ico
└── index.md
```

---

## 🚀 Быстрый старт

### Клонирование репозитория

```bash
git clone https://github.com/SergSi/land-use-art.git
cd land-use-art
```

---

## 💻 Установка и запуск Jekyll на Windows

### 1️⃣ Установка Ruby + DevKit

- Скачайте **Ruby+DevKit** с [rubyinstaller.org](https://rubyinstaller.org)
- При установке выберите путь **без пробелов**: `C:\Ruby32-x64`
- **Обязательно** отметьте `Add Ruby to PATH`
- После установки запустится `ridk install` → выберите **опцию `3`** (MSYS2)
- **Перезагрузите компьютер**

### 2️⃣ Установка Jekyll и Bundler

Откройте **командную строку или Git Bash** и выполните:

```bash
gem install jekyll bundler
```

### 3️⃣ Установка зависимостей и запуск сайта

```bash
bundle install
bundle exec jekyll serve
```

### 4️⃣ Открыть в браузере

```
http://localhost:4000
```

---

## ⚡ Частые команды

| Что сделать | Команда |
|-------------|---------|
| Установить все гемы из Gemfile | `bundle install` |
| Запустить сервер | `bundle exec jekyll serve` |
| Запустить с автообновлением | `bundle exec jekyll serve --watch` |
| Остановить сервер | `Ctrl + C` |
| Собрать сайт без сервера | `bundle exec jekyll build` |

---

## ❗ Возможные ошибки и их решение

| Ошибка | Решение |
|--------|---------|
| `Could not find ...` | Выполнить `bundle install` |
| `webrick not found` | Добавить в Gemfile: `gem "webrick"` → `bundle install` |
| `wdm not found` | Добавить в Gemfile: `gem "wdm", ">= 0.1.0" if Gem.win_platform?` → `bundle install` |

---

## 📦 Размещение на хостинге

### GitHub Pages

Репозиторий уже настроен для деплоя на GitHub Pages. Достаточно включить эту опцию в настройках репозитория (ветка `main` или `gh-pages`).

### Другие хостинги

Сайт статический — можно разместить на **Netlify**, **Vercel**, **Cloudflare Pages** или любом другом хостинге статики.

---

## 💡 Возможности для развития

- Подключение Markdown-редактора для статей
- Адаптация под мобильные устройства
- Поиск по сайту
- Категории и теги для постов

---

## 📜 Лицензия

Проект распространяется под **MIT License** — можно свободно использовать и модифицировать.

---

## 👤 Автор

**SergSi** — [GitHub](https://github.com/SergSi)

---

🔹 **Цель проекта**: Создать удобный инструмент для экспертов по вопросам использования земель.
```

