
//Добавление Изображенитя с устройства
const customButton = document.getElementById('customButton');
const imageInput = document.getElementById('imageInput');
const imageContainer = document.getElementById('image-container');

//Добавление Изображенитя из списка
const gallery = document.getElementById('gallery');

function test(){
  console.log("test")
}

//Добавление Изображенитя с устройства
customButton.addEventListener('click', () => {
    imageInput.click();
  });

  // Обработчик события для загрузки и отображения изображения
  imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        // Удаляем предыдущее изображение, если оно есть
        imageContainer.innerHTML = '';
        
        // Создаем элемент img и устанавливаем его src на загруженное изображение
        const img = document.createElement('img');
        img.src = e.target.result;
        
        imageContainer.appendChild(img);
      };

      reader.readAsDataURL(file); // Чтение файла как Data URL
    }
  });

//Добавление Изображенитя из списка
  gallery.addEventListener('click', function(event) {
    if (event.target.classList.contains('thumbnail')) {
        const selectedImageSrc = event.target.src;

         // Очищаем контейнер и добавляем выбранное изображение
         imageContainer.innerHTML = '';
         const img = document.createElement('img');
         img.src = selectedImageSrc;
         imageContainer.appendChild(img);
       }
   });



    // Datebase
  function fetchRandomName(rase) {
    console.log("Начало запроса...");
    // Отправляем AJAX-запрос к PHP-скрипту
    fetch('./db.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ table: rase }) // Передаем объект с таблицей
      })
        .then(response => response.json())
        .then(data => {
            if (data.name) {
                // Устанавливаем значение имени в поле input
                document.getElementById('Charactername').value = data.name;
            } else {
                console.error("Ошибка: ", data.error);
            }
        })
        .catch(error => console.error("Ошибка при получении данных:", error));
}


   function toggleButtons(element) {
    element.classList.toggle('active');
    const buttons = element.querySelectorAll('.button');
    buttons.forEach(button => button.classList.toggle('active'));
  }

