# Components Library team project
## Requirements: 
  1. Код должен соотвествовать [Mate Academy Style Guide](https://mate-academy.github.io/style-guides/) 
  2. Весь Sass код должен быть отформатирован с помощью `prettier`, `stylelint` с конфигом 
`stylelint-config-airbnb`
  3. Весь JS код должен быть отформатирован с помощью `prettier`, `eslint` с конфигом 
  `eslint-config-airbnb`
  4. Репозиторий не должен содержать лишних файлов: `.idea`, `package-lock.json`, `*.ini`
  5. Генерация `package-lock.json` должна быть отключена
  6. Outline должен быть закруглен на круглых элементах - [Example](https://codepen.io/rudnitskih/pen/Vqewro)
  7. Main `Readme.md` файл должен описывать как использовать вашу библиотеку
  8. _Optional:_ настроить linter для pug файлов с любым конфигом
  9. _Optional:_ документация к проекту иммет примеры кода использования
  10. Add correct title for your example app
  11. Components should be described using BEM methodology 
  12. Все внешние `CSS` и `JS` кроме крупных таких как `jQuery`, `Material Icons`, etc. зависимости должны быть включены в ваши CSS и JS бандлы
  13. Remove `dist` folder `master` branch and push `dist` folder only to `gh-pages` branch. Don't forget change 
  branch for gh-pages in settings for your repo. Solutions: [cli solution](https://gist.github.com/cobyism/4730490) or
   [gulp solution](https://github.com/shinnn/gulp-gh-pages)
  14. _Optional:_ Опубликуйте вашу библиотеку в npm - [how to](https://hackernoon.com/publish-your-own-npm-package-946b19df577e)
  15. JS код для каждого компонента должен находиться рядом с CSS файлом. Инициализации JS кода компонента должна 
  происходить по data-attribute или CSS классу компонента. Пример кода к компоненту слайдер: 
    ```ecmascript 6
        document.addEventListener('DOMContentLoaded', () => {
          document.addEventListener('click', (event) => {
            if (event.target.closest('.slider')) {
              // do something
            }
          });
        });
    ```
  16. Код для JS библиотеки компонентов должен быть отделен от кода вашей документации. Другие разработчики которые 
  захотят подключить библиотеку не должны загружать код для документации
  17. Don't know yet :)
  18. Don't know yet :)
  19. Don't know yet :)
  20. Список необходимых компонентов:  
    20.1 Buttons (Flat and Raised). [Reference](https://material-ui.com/demos/buttons/)  
    20.2 Icon Button. The same reference as above.  
    20.3 Floating Action The same reference as above.  
    20.4 FAB speed Dial. Button should keep the same position, but buttons inside should appear. [Reference](https://material-ui.com/lab/speed-dial/)  
    20.5 Divider [Reference](https://material-ui.com/demos/dividers/)  
    20.6 Tooltip [Reference](https://material-ui.com/demos/tooltips/)  
    20.7 Progress (Linear and Circle) [Reference](https://material-ui.com/demos/progress/)  
    20.8 Inputs (text, textarea, checkbox, switch, radiobutton). Don't forget about active and disabled states 
    [Reference#1](https://material-ui.com/demos/text-fields/) and [Reference#2](https://material-ui.com/demos/selection-controls/)  
    20.9 Range slider (discrete and infinite select). For configuration for slider minimum, maximum values and type
     of slider use `data-attributes` [Reference](https://material-ui.com/lab/slider/)  
    20.10 Menu [Reference](https://material-ui.com/demos/menus)  
    20.11 Menu Inside Dropdown. Make simple hide/show which we did on the lesson. Without animation.  
    20.12 Tabs (versions a,b,c) Tabs inside Toolbar is not required. [Reference](https://material-ui.com/demos/tabs/)  
    20.13 Dialog [Reference](https://material-ui.com/demos/dialogs/)  
    20.14 Toast [Reference](https://material-ui.com/demos/snackbars/)  
    20.15 Cards [Reference](https://material-ui.com/demos/cards/)  
    20.16 Toolbar [Reference](https://material-ui.com/demos/app-bar/)  
    20.17 Table [Reference](https://material-ui.com/demos/tables/)  
      
   21. You can skip the following components:  
    - Lists https://zpl.io/boZXEQE  
    - Tabs inside the Toolbar - https://zpl.io/VKoz9Mq  
    - Datepicker - https://zpl.io/bJZJ1rn  
