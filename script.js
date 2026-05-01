const TOKEN = "8217955949:AAE3m9vu7XGxKB_yw1fLc_vB9Xs-mlqHQGA";
const CHAT_ID = "8358718651";

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  const text = `🛠 Заявка на монтаж септика\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  })
  .then(() => {
    document.getElementById("status").innerText = "✅ Заявка отправлена! Мы свяжемся с вами.";
    document.getElementById("contactForm").reset();
  })
  .catch(() => {
    document.getElementById("status").innerText = "❌ Ошибка отправки. Попробуйте позже.";
  });
});
function openImage(src) {
  document.getElementById('modalImg').src = src;
  document.getElementById('imgModal').style.display = 'flex';
}

function closeImage() {
  document.getElementById('imgModal').style.display = 'none';
}
