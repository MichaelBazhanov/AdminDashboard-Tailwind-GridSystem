import './styles/index.pcss'


// ### #toggle-menu
window.onload = function () {
  let menu = document.querySelector('#toggle-menu')
  let navigation = document.querySelector('#navigation')
  let main = document.querySelector('#main')
  menu.addEventListener('click', (e) => {
		menu.classList.toggle('active')
		navigation.classList.toggle('active')
		main.classList.toggle('active')
  })

  // Программный hover
  let list = document.querySelectorAll('#navigation li .navigation-item')
  console.log(list)
  list.forEach(item => item.addEventListener('mouseover', activeLink))
  function activeLink() {
    list.forEach(item => item.classList.remove('hovered'))
    this.classList.add('hovered')
  }
}
