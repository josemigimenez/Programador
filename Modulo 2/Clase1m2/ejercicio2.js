let texto = document.getElementById("texto");
let contador = document.getElementById("contador");

texto.addEventListener("input", function() {
    contador.textContent = texto.value.length;
});