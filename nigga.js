function sendMessage() {
  var name = document.getElementById("nameInput").value.trim();
  var message = document.getElementById("messageInput").value.trim();
  var errorMessage = document.getElementById("errorMessage");
  var button = document.querySelector("button");

  if (name === "" || message === "") {
    errorMessage.textContent = "Adınızı ve mesajınızı girin!";
    button.style.backgroundColor = "#dc3545"; // Başarısız durumda kırmızı
    setTimeout(function() {
      button.style.backgroundColor = "#ffffff"; // 1 saniye sonra mavi hale geri dön
    }, 3000);
    setTimeout(function() {
      errorMessage.textContent = "";
    }, 3000); // 3 saniye sonra uyarıyı kaldır
    return;
  }

  errorMessage.textContent = "";

  var webhookURL = "https://discord.com/api/webhooks/1242165094792826981/ErrFOk1BNiaIFwYVgPJmjt5VEPpSwCyI2CEqEiLo8rUrQA9I6PU8f_pty9PPWy7fp741";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: "Bir yeni mesajınız var;\n\nAdı: " + name + "\nMesajı: " + message })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    button.style.backgroundColor = "#28a745"; // Başarı durumunda yeşil
    setTimeout(function() {
      button.style.backgroundColor = "#007bff"; // 1 saniye sonra mavi hale geri dön
    }, 1000);
    document.getElementById("nameInput").value = ""; // İsim inputunu temizle
    document.getElementById("messageInput").value = ""; // Mesaj inputunu temizle
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
}