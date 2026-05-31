// Обновление количества товаров в корзине
function updateCartCount(count) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Пример: устанавливаем начальное количество товаров в корзине
    updateCartCount(3);

    // Добавляем обработчики для кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Функция в разработке!');
        });
    });
});
