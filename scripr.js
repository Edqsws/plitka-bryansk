document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const newTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  const form = document.getElementById('whatsappForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('input[placeholder="Ваше имя"]').value;
      const phone = form.querySelector('input[placeholder="Ваш телефон (обязательно)"]').value;
      const details = form.querySelector('textarea').value || 'не указано';

      let message = `Здравствуйте, Марат! Меня зовут ${name}.`;
      message += `\nТелефон: ${phone}`;
      message += `\nДетали: ${details}`;

      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/79532753666?text=${encoded}`, '_blank');
    });
  }
});