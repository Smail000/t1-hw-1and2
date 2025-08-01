
# Менеджер Задач

Домашнее задание для **Летнего лагеря T1**.

## Описание

Небольшое приложение для управления задачами.

Реализован следующий функционал (домашнее задание 1):

- Редактирование задач (название, описание, теги)
- Фильтрация задач по тегам, названиям и описанию
- Адаптивная верстка

Реализован следующий функционал (домашнее задание 2):

- Создание и удаление задач
- Управление состоянием перенесено на Redux
- Задачи автоматически сохраняются локально в localStorage

### Технологии

- **React/ReactDOM**
- **Typescript**
- **Redux Toolkit**
- **TailwindCSS**
- **Vite**
- **ESLint**

### Особенности

- Есть исчерпывающие **комментарии**
- Архитектура согласно **FSD**
- Использовались **React Hooks** и **React Context API**
- Добавлены **Alias** для удобства указания путей модулей
- Приложение загружено на **Versel**: <https://t1-hw-1and2.vercel.app/>

## Описание архитекруты

- `src` - директория исходников приложения
  - `app` - уровень приложения
    - `store` - глобальное хранилище данных
    - `router` - пути приложения
    - `main.tsx` - точка входа
  - `pages` - страницы
    - `home` - страница с задачами
    - `task-edit` - страница редактирования задачи
    - `404` - страница **404 страница не найдена**
  - `features` - фичи
    - `task-item` - карточка задачи
    - `task-list` - список карточек
    - `task-details` - форма для редатирования задачи
    - `task-filter` - фича для фильтрации задач
    - `404` - компонент для указания отсутствия страницы
  - `entities` - базовые бизнес-сущности
    - `filter` - сущность для фильтрации задач
    - `task` - сущность задачи
  - `shared` - переиспользуемые компоненты
    - `assets/icons` - иконки
    - `lib/hooks` - хуки
    - `ui` - переиспользуемые базовые компоненты

## Инструкция для запуска

### Сброка и запуск production-версии

```bash
npm run build
npm run preview
```

После сборки проекта нужные файлы появятся в директории `dist`

### Запуск в режиме разработки

```bash
npm run dev
```

## Есть недочеты/предложения?

Милости прошу в **Issues**/**Pull Requets**
