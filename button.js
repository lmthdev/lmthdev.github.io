document.getElementById("webhookButton").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1241350305556467724/oiVjV5bPrlJ-USavpcrBGcmgw1hk-zcVVvXcwh8uIRcKB9UQ1kEWr1Wr05FRVpTLMQBj", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({content: "Butona basıldı!"}));
});