//выпадающий список
document.addEventListener('DOMContentLoaded', () => {
    const advantagesLink = document.querySelector('.advantages');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    advantagesLink.addEventListener('mouseover', () => {
        dropdownMenu.classList.add('active'); 
    });

    advantagesLink.addEventListener('mouseout', () => {
        dropdownMenu.classList.remove('active'); 
    });

    
    dropdownMenu.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.remove('active');
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
//скрол вниз и вверх
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
    const reviewsPerPage = getReviewsPerPage();
    reviewsContainer.innerHTML = ''; // Очищаем текущее содержимое контейнера

    for (let i = currentReview; i < currentReview + reviewsPerPage && i < reviews.length; i++) {
        let review = reviews[i];
        let reviewElement = document.createElement('div');
        reviewElement.classList.add('review-card', 'p-4', 'bg-white', 'rounded', 'shadow');
        reviewElement.style.opacity = '0'; 

        // Обрезаем текст, если он превышает 155 символов
        let reviewContent = review.content;
        let readMoreButton = '';
        if (reviewContent.length > 155) {
            reviewContent = reviewContent.substring(0, 155) + '...';
            readMoreButton = `<button class="read-more mt-2 text-gray-500 hover:text-gray-900 cursor-pointer" 
            onclick="expandReviewContent(this, '${review.content.replace(/'/g, "\\'")}')">Читать полностью...</button>`;
        }

        reviewElement.innerHTML = `
        <div class="flex flex-col justify-between h-full">
        <div>
            <div class="flex items-center space-x-4">
                <img class="w-20 h-20 rounded-full" src="${review.img}" alt="${review.author}">
                <div class="pl-2">
                    <h2 class="text-lg font-bold text-col">${review.author}</h2>
                    <p class="text-sm text-col-l">${review.date}</p>
                </div>
            </div>
            <p class="mt-2 text-col-l">${reviewContent}</p>
            ${readMoreButton}
        </div>
        <button onclick="likeReview(${i})" class="mt-2 px-4 py-2 bg-transparent text-blue-500 border border-blue-500 rounded self-start">${review.liked ? '❤️' : '🤍'} ${review.likes}</button>
    </div>
`;
        reviewsContainer.appendChild(reviewElement);
    }

    setTimeout(() => {
        const reviewElements = reviewsContainer.getElementsByClassName('review-card');
        for (let element of reviewElements) {
            element.style.opacity = '1';
        }
    }, 10);
}

// Функция для расширения содержимого отзыва
function expandReviewContent(button, fullContent) {
    const reviewElement = button.parentElement;
    reviewElement.querySelector('p.mt-2').innerText = fullContent;
    button.remove(); // Удаляем кнопку "читать полностью" после раскрытия текста
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
function changeReviews(newIndex) {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.style.opacity = '0'; // Исчезновение текущих отзывов

    // Ждем пока отзывы исчезнут
    setTimeout(() => {
        currentReview = newIndex;
        showReviews(); // Обновляем отзывы

        // После обновления отзывов начинаем анимацию появления
        reviewsContainer.style.opacity = '1';
    }, 500); // Длительность исчезновения
}

function nextReviews() {
    if (currentReview + getReviewsPerPage() < reviews.length) {
        changeReviews(currentReview + getReviewsPerPage());
    }
}

function prevReviews() {
    if (currentReview - getReviewsPerPage() >= 0) {
        changeReviews(currentReview - getReviewsPerPage());
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

    function updateTicket() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const passengers = document.getElementById('passengers').value;
    
        // Обновление текста в элементах на изображении билета
        document.getElementById('ticket-name').textContent = name;
        document.getElementById('ticket-email').textContent = email;
        document.getElementById('ticket-from').textContent = from;
        document.getElementById('ticket-to').textContent = to;
        document.getElementById('ticket-passengers').textContent = passengers;
    }

    // Вызывает функцию updateTicket каждый раз когда происходит ввод
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            validateForm(); 
            updateTicket(); 
        });
    });
    function updateTicketPosition() {
    const screenWidth = window.innerWidth;
    const scaleFactor = screenWidth / 1900; 

    
    const ticketName = document.getElementById('ticket-name');
    const ticketEmail = document.getElementById('ticket-email');
    const ticketFrom = document.getElementById('ticket-from');
    const ticketTo = document.getElementById('ticket-to');
    const ticketPassengers = document.getElementById('ticket-passengers');

    
    ticketName.style.top = (31.1 * scaleFactor) + '%';
    ticketName.style.left = (15.7 * scaleFactor) + '%';
    ticketEmail.style.top = (39.4 * scaleFactor) + '%';
    ticketEmail.style.left = (26 * scaleFactor) + '%';
    ticketFrom.style.top = (47.6 * scaleFactor) + '%';
    ticketFrom.style.left = (31.5 * scaleFactor) + '%';
    ticketTo.style.top = (55.9 * scaleFactor) + '%';
    ticketTo.style.left = (34.5 * scaleFactor) + '%';
    ticketPassengers.style.top = (64.0 * scaleFactor) + '%';
    ticketPassengers.style.left = (47.3 * scaleFactor) + '%';

}


window.addEventListener('resize', updateTicketPosition);


updateTicketPosition();
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





// window.addEventListener('resize', updateTextPosition);

// function updateTextPosition() {
//   const ticketWidth = document.querySelector('.ticket').offsetWidth;
//   const ticketHeight = document.querySelector('.ticket').offsetHeight;

//   document.getElementById('ticket-name').style.top = (ticketHeight * 0.315) + 'px';
//   document.getElementById('ticket-name').style.left = (ticketWidth * 0.16) + 'px';
// }
