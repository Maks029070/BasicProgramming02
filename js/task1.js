$(function() {
	let mark = 0;
	let checkButton = $('input[value="Перевірити"]');
	let restartButton = $('input[value="Спробувати знову"]');

	restartButton.on('click', function() {
		location.reload();
	});
	restartButton.hide();
	checkButton.on('click', function() {
		for (let i = 1; i <= 10; i++) {
			let answer = $(`select[name="task${i}"]`);
			if (i == 1 || i == 5 || i == 8 || i == 9) {
				if (answer.val() == '1') {
					mark ++;
					$(`div:nth-child(${i})`).css('background-color', '#38D138');
				} else {
					$(`div:nth-child(${i})`).css('background-color', '#FF7878');
				}
			} else if (i == 2 || i == 4 || i == 6 || i == 7) {
				if (answer.val() == '2') {
					mark ++;
					$(`div:nth-child(${i})`).css('background-color', '#38D138');
				} else {
					$(`div:nth-child(${i})`).css('background-color', '#FF7878');
				}
			} else if (i == 3 || i == 10) {
				if (answer.val() == '3') {
					mark ++;
					$(`div:nth-child(${i})`).css('background-color', '#38D138');
				} else {
					$(`div:nth-child(${i})`).css('background-color', '#FF7878');
				}
			}
		}
		if (mark == 10) {
			alert(`Ваша оцінка: ${mark}. Всі відповіді правильні! Вітаємо!`);
			$('option').attr('disabled', '');
		} else {
			alert(`Ваша оцінка: ${mark}. Правильні відповіді підсвічуватимуться зеленим, так що проаналізуйте помилки і спробуйте ще раз`);
			$('option').attr('disabled', '');
		}
		checkButton.hide();
		restartButton.show();
	});
});