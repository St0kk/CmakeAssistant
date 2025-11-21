# CMake Assistant

## Автор
   **Андреев Георгий Александрович**
   **Группа: M3106**
   **ИСУ: 505374**
   
Расширение для Visual Studio Code, которое предоставляет удобное управление запуском программы и тестов для Cmake проектов, также выносит комманды на macbook touchbar.

## Возможности

### Доступные команды:

1. **Cmake: Build and Test**
   - Создание папки build: `cmake -B build`
   - Сборка проекта: `cmake --build build`
   - Запуск тестов: `ctest -V --test-dir build`

2. **Cmake: Build and Run**
   - Запрос имени программы (указывается в CMakeLists.txt)
   - Создание папки build: `cmake -B build`
   - Сборка проекта: `cmake --build build`
   - Запуск программы: `build/bin/${programName}`

## Требования
- Visual Studio Code версии 1.106.0 или выше
- Установленные CMake, CTest и компилятор C++

## Установка
   1. **Склонировать репозиторий**
      - Ввести команду `git clone`
   2. **Установить дополнительные библиотеки**
      - Ввести команду `npm install`
   3. **Собрать расширение**
      - Ввести команду `vsce package`
   4. **Установить расширение через меню Extentions**
      - Extentions - три точки - instal from vsix
