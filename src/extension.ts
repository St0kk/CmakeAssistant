import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	function Command (command : string) {
		/* 
		Открывает терминал "ExtCommandTerminal", если такой есть или создает его, вводит в него комманду.
		Принимает: command (string) : комманду
		*/
		let terminal = vscode.window.terminals.find(terminal => terminal.name === "ExtCommandTerminal");
		if(!terminal) {
			terminal = vscode.window.createTerminal("ExtCommandTerminal");
		}

		terminal.show();
		terminal.sendText(command);
	}

	let CmakeBuildNTest = vscode.commands.registerCommand("CmakeBuildNTest", () => {
		/*
		Отправляет в функцию Command комманды: 
		"cmake -B build" - сборка проекта
		"cmake --build build" - сборка тестов
		"ctest -V --test-dir build" - запуск тестов в дирректории build
		*/
		Command("cmake -B build");
		Command("cmake --build build");
		Command("ctest -V --test-dir build");
	})

	let CmakeBuildNRun = vscode.commands.registerCommand("CmakeBuildNRun", async () => {
		/*
		Отправляет в функцию Command комманду: "cmake -B build" - сборка проекта
		Запрашивает у пользователя имя программы(указывается в CmakeList)
		Выводит ошибку, если имя программы не было полученно
		Отвправляет в функцию Command комманду: "build/bin/${programName}" - запуск программы с указанным именем`
		 */
		Command("cmake -B build");
		const programName = await vscode.window.showInputBox({
			placeHolder: "Programm name",
			prompt: "Write cmake program name"
		});

		if(!programName) {
			vscode.window.showErrorMessage("No program name");
			return;
		} 
			
		Command(`build/bin/${programName}`);
	})

	
}

export function deactivate() {}
