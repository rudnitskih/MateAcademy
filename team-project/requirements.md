## Requirements: 
- ### Код должен соотвествовать [Mate Academy Style Guide](https://mate-academy.github.io/style-guides/) 
- ### Весь Sass код должен быть отформатирован с помощью `prettier`, `stylelint` с конфигом 
`stylelint-config-airbnb`
- ### Весь JS код должен быть отформатирован с помощью `prettier`, `eslint` с конфигом 
  `eslint-config-airbnb`
- ### Репозиторий не должен содержать лишних файлов: `.idea`, `package-lock.json`, `*.ini`
- ### Генерация `package-lock.json` должна быть отключена
- ### Outline должен быть закруглен на круглых элементах - [Example](https://codepen.io/rudnitskih/pen/Vqewro)
- ### Main Readme.md файл должен описывать как использовать вашу библиотеку

- ### Optional: настроить linter для pug файлов с любым конфигом
- ### Optional: документация к проекту иммет примеры кода использования

*16.12.2018*
- #### Add correct title for your example app
- #### Components should be described using BEM methodology 
- #### Все внешние `CSS` и `JS` кроме крупных таких как `jQuery`, `Material Icons`, etc. зависимости должны быть 
включены в ваши CSS и JS бандлы
- #### Remove `dist` folder `master` branch and push `dist` folder only to `gh-pages` branch. Don't forget change branch for gh-pages in settings to your repo. Solutions:
    - [cli solution](https://gist.github.com/cobyism/4730490)
    - [gulp solution](https://github.com/shinnn/gulp-gh-pages)

*??.12.2018 (Further requirements)*
- #### Опубликуйте вашу библиотеку в npm - [how to](https://hackernoon.com/publish-your-own-npm-package-946b19df577e)
