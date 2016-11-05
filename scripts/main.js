// anecdotes
(function() {
  var container = document.querySelector('.anecdotes')
  var items = container.querySelectorAll('.anecdotes-item')
  var btnNext = container.querySelector('.anecdotes-next')
  var btnClose = container.querySelector('.anecdotes-close')
  var randomIndex = 0

  var close = function () {
    container.classList.remove('active')
    items[randomIndex].style.display = 'none'
    btnNext.textContent = 'Tell me an anecdote'
    container.removeEventListener('click', clickOutside)
  }

  var clickOutside = function (event) {
    if (event.target === container) close()
  }

  btnNext.addEventListener('click', function () {
    container.classList.add('active')
    items[randomIndex].style.display = 'none'
    randomIndex = Math.round((items.length - 1) * Math.random())
    items[randomIndex].style.display = 'block'
    btnNext.textContent = 'Cool! Tell me another one!'
    btnNext.blur()
    container.addEventListener('click', clickOutside)
  })

  btnClose.addEventListener('click', close)
}())
