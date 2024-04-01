//выпадающий список
document.addEventListener('DOMContentLoaded', () => {
    const advantagesLink = document.querySelector('.advantages');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    advantagesLink.addEventListener('mouseover', () => {
        dropdownMenu.classList.remove('hidden');
    });

    advantagesLink.addEventListener('mouseout', () => {
        dropdownMenu.classList.add('hidden');
    });

    dropdownMenu.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.add('hidden');
        const section = document.querySelector(e.target.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

//mobile-menu

// Мобильное меню
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');
    const backdrop = document.querySelector('#menu-backdrop');

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden"); // Убедитесь, что класс hidden убирается при клике
        backdrop.classList.toggle("hidden"); // Показывать или скрывать фон
        // Эта строка отвечает за анимацию и должна быть применена правильно
        if (menu.classList.contains("translate-x-full")) {
            menu.classList.remove("translate-x-full"); // Показать меню
        } else {
            setTimeout(() => {
                menu.classList.add("translate-x-full"); // Скрыть меню
            }, 10); // Небольшая задержка для начала анимации скрытия
        }
    });

    backdrop.addEventListener("click", () => {
        menu.classList.add("hidden");
        menu.classList.add("translate-x-full"); // Убедиться, что меню скрывается
        backdrop.classList.add("hidden"); // Скрыть фон
    });
});




//таймер
function updateTimer() {
    const now = new Date();
    const newYear = new Date('December 31, 2024 00:00:00');
    const diff = newYear - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateTimer, 1000);
//скрол
window.scrollToBottom = function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
};

window.scrollToTop = function() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
};


//первая галерея

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.getElementById('close');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentImages = [];
    let currentImageIndex = 0;

    const images = {
        'drivers': [
            '/img/drivers/driver1.jpg',
            '/img/drivers/driver2.jpg',
            '/img/drivers/driver3.jpg'
        ],
        'autopark': [
            '/img/auto/Mercedes V-Class-2.webp',
            '/img/auto/w212.webp',
            '/img/auto/passatI.jpg'
        ],
        'fullday': [
            '/img/24h/day.jpg',
            '/img/24h/night.jpg',
            '/img/24h/xmas.jpg'
        ],
        'price': [
            '/img/price/bils.jpg',
            '/img/price/nfc.png',
            '/img/price/sale.png'
        ]
    };

    document.querySelectorAll('.group .image').forEach((img) => {
        img.addEventListener('click', function() {
            const group = this.closest('.group').getAttribute('data-group');
            currentImages = images[group];
            currentImageIndex = currentImages.indexOf(this.src);
            openModal(this.src);
        });
    });

    const openModal = (src) => {
        modalImage.src = src;
        modal.classList.remove('hidden');
    };

    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        modalImage.src = currentImages[currentImageIndex];
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        modalImage.src = currentImages[currentImageIndex];
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});



// Создаем массив с отзывами
let reviews = [
    {
        date: '22.03.2024',
        author: 'Автор 1',
        img: '/img/reviews/author1.jpeg',
        content: 'Спасибо за отличную услугу! Всё как и договаривались! Из Калининграда до Берлина добрались быстро и комфортно. Машина чистая, водитель приятный собеседник.',
        likes: Math.floor(Math.random() * 9) + 1,
        liked: false
    },
    {
        date: '21.03.2024',
        author: 'Автор 2',
        img: '/img/reviews/author2.jpeg',
        content: 'Очень рекомендую Виорела. Очень приятный, внимательный, вежливый. Все было на высшем уровне, комфортно, в дороге вайфай, водичка. Спасибо огромное, очень рада, что в итоге выбрала именно его! Теперь только с вами будем ездить!',
        likes: Math.floor(Math.random() * 9) + 1,
        liked: false
    },
    {
        date: '21.03.2024',
        author: 'Автор 3',
        img: '/img/reviews/author2.jpeg',
        content: 'Очень рекомендую Виорела. Очень приятный, внимательный, вежливый. Все было на высшем уровне, комфортно, в дороге вайфай, водичка. Спасибо огромное, очень рада, что в итоге выбрала именно его! Теперь только с вами будем ездить!',
        likes: Math.floor(Math.random() * 9) + 1,
        liked: false
    },
    {
        date: '21.03.2024',
        author: 'Автор 4',
        img: '/img/reviews/author1.jpeg',
        content: 'Очень рекомендую Виорела. Очень приятный, внимательный, вежливый. Все было на высшем уровне, комфортно, в дороге вайфай, водичка. Спасибо огромное, очень рада, что в итоге выбрала именно его! Теперь только с вами будем ездить!',
        likes: Math.floor(Math.random() * 9) + 1,
        liked: false
    },
    
];

// Индекс текущего отзыва
let currentReview = 0;

// Функция для определения количества отзывов на странице
function getReviewsPerPage() {
    return window.innerWidth < 768 ? 1 : 3;
}

// Функция для отображения отзывов
function showReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = ''; // Очистка контейнера отзывов

    const reviewsPerPage = getReviewsPerPage();
    for (let i = currentReview; i < currentReview + reviewsPerPage && i < reviews.length; i++) {
        let review = reviews[i];
        let reviewElement = document.createElement('div');
        reviewElement.classList.add('review-card', 'p-4', 'bg-white', 'rounded', 'shadow');
        reviewElement.innerHTML = `
            <p class="text-sm text-col-l">${review.date}</p>
            <h2 class="text-lg font-bold text-col">${review.author}</h2>
            <img class="w-24 h-24 rounded-full mx-auto" src="${review.img}" alt="${review.author}">
            <p class="mt-2 text-col-l">${review.content}</p>
            <button onclick="likeReview(${i})" class="mt-2 px-4 py-2 bg-transparent text-blue-500 border border-blue-500 rounded">${review.liked ? '❤️' : '🤍'} ${review.likes}</button>
        `;
        reviewsContainer.appendChild(reviewElement);
    }
}

// Функция для лайка отзыва
function likeReview(index) {
    let review = reviews[index];
    if (!review.liked) {
        review.liked = true;
        review.likes++;
        showReviews(); // Обновление отображения отзывов
    }
}

// Функции для переключения отзывов
function nextReviews() {
    const reviewsPerPage = getReviewsPerPage();
    if (currentReview + reviewsPerPage < reviews.length) {
        currentReview += reviewsPerPage;
        showReviews();
    }
}

function prevReviews() {
    const reviewsPerPage = getReviewsPerPage();
    if (currentReview - reviewsPerPage >= 0) {
        currentReview -= reviewsPerPage;
        showReviews();
    }
}

// Добавление слушателей событий для кнопок "Вперед" и "Назад"
document.getElementById('next').addEventListener('click', nextReviews);
document.getElementById('prev').addEventListener('click', prevReviews);

// Слушатель событий для адаптации отзывов при изменении размера окна
window.addEventListener('resize', showReviews);

// Инициализация отображения отзывов при загрузке страницы
showReviews();


//авторизация
document.querySelector(".profile").addEventListener("click", function() {
    window.location.href = "register.html";
  });





//форма обратной связи


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');

    // Функция для проверки валидности всех полей
    function validateForm() {
        let isValid = true;
        document.querySelectorAll('input').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-red-500');
                // Можно добавить сообщение о ошибке
            } else {
                input.classList.remove('border-red-500');
                input.classList.add('border-green-500');
            }
        });
        submitButton.disabled = !isValid;
    }

    // Динамическая валидация полей
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', validateForm);
        input.addEventListener('paste', (event) => event.preventDefault()); // Блокировка вставки
        input.addEventListener('contextmenu', (event) => event.preventDefault()); // Блокировка контекстного меню

        // Блокировка ввода после достижения лимита символов
        input.addEventListener('keydown', (event) => {
            if (input.value.length >= 255 && event.keyCode !== 8 && event.keyCode !== 46) {
                event.preventDefault();
            }
        });
    });

    validateForm(); // Проверка валидности формы при инициализации
});


//feedback form
function sendFeedback(e) {
    e.preventDefault(); // Предотвращаем стандартную отправку формы

    const form = document.getElementById('feedback-form');
    const formData = new FormData(form);
    const messageBox = document.getElementById('message');

    fetch('submit_feedback.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Для отладки
        messageBox.style.display = 'block'; // Показываем сообщение об успешной отправке
        setTimeout(() => {
            messageBox.style.display = 'none'; // Скрываем сообщение через 5 секунд
        }, 2500);
    })
    .catch(error => console.error('Error:', error));
}