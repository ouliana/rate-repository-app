
#rate-repository-app

Небольшое приложение на  React Native для рейтинга репозиториев GitHub.
Приложение разработано с использованием инструментов Expo. В качестве серверной части приложения используется  https://github.com/fullstack-hy2020/rate-repository-api, предоставляющее Apollo GraphQL API для взаимодействия с сервером.   

Приложение имеет следующий функционал:
- сортировка и фильтр репозиториев,
- просмотр отдельного репозитория и отзывов о нём,
- регистрация нового пользователя,
- авторизация зарегистрированного пользователя,
- создание отзыва о репозитории.
  
Пользователь имеет возможность выбрать следующие настройки:
- язык интерфейса приложения (русский, английский),
- тема оформления.
  
Настройки, выбранные пользователем сохраняются в памяти устройства.

### Функционал, доступный неавторизованным пользователям

![Страница неавторизованного пользователя](assets/images/ru/repositories_unauthorized_light_ru_android.png ) ![Страница неавторизованного пользователя, тёмная тема](assets/images/ru/repositories_unauthorized_dark_ru_android.png)  ![Поиск](assets/images/ru/search_ru.png) ![Сортировка](assets/images/ru/sort_rating_ru.png) ![Страница отдельного репозитория](assets/images/ru/single_light_ru_android.png) ![Настройки, светлая тема](assets/images/ru/settings_light_ru.png)  ![Настройки, тёмная тема](assets/images/ru/settings_dark.png)  ![Страница авторизации](assets/images/ru/sign_in_light_ru.png)

### Дополнительный функционал, доступный авторизованным пользователям
![Страница авторизованного пользователя](assets/images/ru/main_authorized_light_ru_android.png) ![Создание отзыва](assets/images/ru/review_light_ru.png) ![Мои отзывы](assets/images/ru/my_reviews_ru.png  )