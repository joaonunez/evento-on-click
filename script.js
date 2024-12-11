
document.getElementById("session-button").addEventListener("click", function () {
    if (this.textContent === "Iniciar sesión") {
      this.textContent = "Cerrar sesión";
    } else {
      this.textContent = "Iniciar sesión";
    }
  });
  

  document.getElementById("add-definition-button").addEventListener("click", function () {
    this.style.display = "none";
  });
  

  document.querySelectorAll(".like-button").forEach((button) => {
    button.addEventListener("click", function () {

      const definitionTitle = this.closest(".definition").dataset.title;
  
      alert(`¡Te gustó la definición de "${definitionTitle}"!`);
  
      const currentLikes = parseInt(this.textContent.split(" ")[0]);
      this.textContent = `${currentLikes + 1} me gusta`;
    });
  });
  