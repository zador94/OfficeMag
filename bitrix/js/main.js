document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'Enter') {
        var selectedText = window.getSelection().toString();
        if (selectedText !== '') {
            // Отправить запрос на сервер
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/error_report.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    // Показать окно подтверждения отправки сообщения
                    alert('Сообщение об ошибке отправлено');
                }
            }
            xhr.send('error=', encodeURIComponent(selectedText));
        }
    }
})

var compare = document.getElementById('compare');
var compareTitle = document.getElementById('compare-title');
compare.onclick = function () {
    if (this.checked) {
        compareTitle.textContent = 'Уже в сравнении';
    } else {
        compareTitle.textContent = 'Сравнение';
    }
}