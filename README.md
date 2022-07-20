# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Задание урок 5.2 Компонент

1. На базе\примере компонентов урока, сделайте компонент, который:
    - Принимает параметры **min** и **max**.
    - В состоянии хранит текущее значение счётчика - **curCount**.
    - Задает изначальное значение **curCount**= **min**.
    - Содержит кнопки для увеличения и уменьшения **curCount** на **1**.
    - Не позволяет значению **curCount** выходить за границы **min** и **max**.
    - Выводит **curCount** в **<span>** между двумя кнопками.
2. Подберите способ валидировать значения параметров **min** и **max**.
3. Вместо **<span>** между кнопками расположить **input[type=text]**.
Число в этом **input** синхронизируется с **curCount**.
Помните, что человек может ввести в поле любую текстовую бессмыслицу.
Оформить код по правилам **деструктуризации** React.

Тест гита