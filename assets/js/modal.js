      // Получаем элементы
      const modal = document.getElementById("modal");
      const openModalBtn = document.getElementById("openModalBtn");
      const closeModalBtn = document.getElementById("closeModalBtn");

      // Открываем модальное окно
      openModalBtn.addEventListener("click", () => {
          modal.classList.add("modal-open"); // Добавляем класс для плавного появления
          modal.style.display = "block";
      });

      // Закрываем модальное окно
      closeModalBtn.addEventListener("click", () => {
          modal.classList.remove("modal-open"); // Убираем класс для плавного исчезновения
          setTimeout(() => {
              modal.style.display = "none";
          }, 300); // Ждём завершения анимации перед скрытием
      });

      // Закрываем модальное окно при клике вне его области
      modal.addEventListener("click", (event) => {
          if (event.target === modal) { // Если клик произошёл на фоне (вне modal-content)
              modal.classList.remove("modal-open");
              setTimeout(() => {
                  modal.style.display = "none";
              }, 300);
          }
      });