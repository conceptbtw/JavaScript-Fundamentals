document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".array");
    const outBlock = document.querySelector(".out");
    const submitButton = form.querySelector(".btn");
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      const fio = form.querySelector('input[name="fio"]').value;
      const phone = form.querySelector('input[name="phone"]').value;
      const birthday = form.querySelector('input[name="birthday"]').value;
      const email = form.querySelector('input[name="email"]').value;
      let outputText = "ПІБ: " + fio + "<br>";
      outputText += "Номер телефону: " + phone + "<br>";
      outputText += "Дата народження: " + birthday + "<br>";
      outputText += "Електронна пошта: " + email;
      outBlock.innerHTML = outputText;
    });
  });
  