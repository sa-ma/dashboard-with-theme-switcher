const themeSwitcher = document.querySelector('#theme-switcher');

if (localStorage.getItem('dark')) {
  themeSwitcher.checked = true;
  document.body.classList.add('dark');
}

themeSwitcher.addEventListener('click', (e) => {
  if (themeSwitcher.checked === true) {
    if (!localStorage.getItem('dark')) {
      document.body.classList.add('dark');
      localStorage.setItem('dark', true);
    }
  } else {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.removeItem('dark');
    }
  }
});
