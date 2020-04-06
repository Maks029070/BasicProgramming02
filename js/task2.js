let lim = 1;

for (let i = 1; i <= lim; i++) {
	let num = prompt("Введіть число у діапазоні від 1 до 12 та дізнаєтесь за який місяць відповідає дане число");
	num = Number(num);

	switch(num) {
	case 1:
		alert("Перший місяць - Січень.");
		break;
	case 2:
		alert("Другий місяць - Лютий.");
		break;
	case 3:
		alert("Третій місяць - Березень.");
		break;
	case 4:
		alert("Четвертий місяць - Квітень.");
		break;
	case 5:
		alert("П'ятий місяць - Травень.");
		break;
	case 6:
		alert("Шостий місяць - Червень.");
		break;
	case 7:
		alert("Сьомий місяць - Липень.");
		break;
	case 8:
		alert("Восьмий місяць - Серпень.");
		break;
	case 9:
		alert("Дев'ятий місяць - Вересень.");
		break;
	case 10:
		alert("Десятий місяць - Жовтень.");
		break;
	case 11:
		alert("Одинадцятий місяць - Листопад.");
		break;
	case 12:
		alert("Дванадцятий місяць - Грудень.");
		break;
	default:
		alert("Ви ввели невірне число, спробуйте знову");
		break;
	}
	
	let tryAgain = prompt('Бажаєте спробувати знову? (1 - так, люба інша відповідь - ні)');
	tryAgain = Number(tryAgain);
	if (tryAgain == 1) {
		lim++;
	}
}