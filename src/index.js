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
  list.forEach(item => item.addEventListener('mouseover', activeLink))
  function activeLink() {
    list.forEach(item => item.classList.remove('hovered'))
    this.classList.add('hovered')
  }

  //Отслеживаем фокус на элементе
  let searchLabel = document.querySelector('.search-label')
  let searchItem = document.querySelector('.search-item')
  let searchSvg = document.querySelector('.search-svg')

  console.log(searchLabel)
  console.log(searchItem)
  console.log(searchSvg)
  searchLabel.addEventListener('click', function() {
    searchSvg.classList.add('text-blue-400')
  })

  //Клик в любое место на body
  document.querySelector('body').addEventListener('click', function(e) {
    if (e.target != searchItem) {
      searchSvg.classList.remove('text-blue-400')
    }
  })
}
