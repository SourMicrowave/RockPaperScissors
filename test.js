const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let userChoice = btn.id
    alert(btn.id)
  })
})