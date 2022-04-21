import './styles/index.pcss'

// import $ from 'jquery' //Если она не нужна то закоммить====
// =========================================================

// const userStack = {
// 	language: 'JavaScript',
// 	framework: 'Angular',
// }
// const user = {
// 	name: 'Michael',
// 	age: '30',
// 	...userStack
// }

// console.log(user)
// =========================================================
// $('.jquery').html('jquery work!')

// ### #toggle-menu
window.onload = function () {
  let menu = document.querySelector('#toggle-menu')
  let navigation = document.querySelector('#navigation')
  let main = document.querySelector('#main')
  menu.addEventListener('click', (e) => {
    // console.log(e.eventPhase + 'menu')
    // if (e.eventPhase === 2) {
    // console.log('menu')
    // console.log(e.target)
    // }
		menu.classList.toggle('active')
		navigation.classList.toggle('active')
		main.classList.toggle('active')
  })
  // menu.click() //test

  //   let svg = document.querySelector('#svg')
  //   svg.addEventListener(
  //     'click',
  //     (e) => {
  //       console.log(e.eventPhase + 'svg')
  //       if (e.eventPhase === 2) {
  //         console.log('svg')
  //         console.log(e.target)
  //       }
  //     }
  //   )
}
