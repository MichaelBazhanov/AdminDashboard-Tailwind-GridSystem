import './styles/index.pcss'
import Chart from 'chart.js/auto'

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
  list.forEach((item) => item.addEventListener('mouseover', activeLink))
  function activeLink() {
    list.forEach((item) => item.classList.remove('hovered'))
    this.classList.add('hovered')
  }

  // //Отслеживаем фокус на элементе
  // let searchLabel = document.querySelector('.search-label')
  // let searchItem = document.querySelector('.search-item')
  // let searchSvg = document.querySelector('.search-svg')

  // console.log(searchLabel)
  // console.log(searchItem)
  // console.log(searchSvg)
  // searchLabel.addEventListener('click', function () {
  //   searchSvg.classList.add('text-blue-400')
  // })

  // //Клик в любое место на body
  // document.querySelector('body').addEventListener('click', function (e) {
  //   if (e.target != searchItem) {
  //     searchSvg.classList.remove('text-blue-400')
  //   }
  // })

  ///////////////////////////////////////////////////////////////////////////
  const polarAreaCtx = document.getElementById('polarArea')
  const polarArea = new Chart(polarAreaCtx, {
    type: 'polarArea',
    data: {
      labels: ['Vue', 'React', 'Angular'],
      datasets: [
        {
          label: 'JS Frameworks',
          data: [1200, 1900, 700],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
        },
      ],
    },
    options: {
      responsive: true,
    },
  })

  const barCtx = document.getElementById('bar')
  const bar = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Angular', 'React', 'Svelte', 'Polymer', 'Vue', 'JQuery'],
      datasets: [
        {
          label: 'JS Frameworks',
          data: [8, 19, 3, 5, 15, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ]
        },
      ],
    },
    options: {
      responsive: true,
    },
  })
}
