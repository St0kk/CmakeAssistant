# CMake Assistant

Расширение для Visual Studio Code, которое предоставляет удобное управление запуском программы и тестов для Cmake проектов, также выносит комманды на macbook touchbar.

## Возможности

### Доступные команды:

1. **Cmake: Build and Test**
   - Сборка проекта: `cmake -B build`
   - Сборка тестов: `cmake --build build`
   - Запуск тестов: `ctest -V --test-dir build`

2. **Cmake: Build and Run**
   - Сборка проекта: `cmake -B build`
   - Запрос имени программы (указывается в CMakeLists.txt)
   - Запуск программы: `build/bin/${programName}`

## Требования
- Visual Studio Code версии 1.106.0 или выше
- Установленные CMake, CTest и компилятор C++
