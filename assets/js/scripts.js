// Constantes e Variáveis

const totalCount = document.getElementById('currentNumber')

const subtractNumber = document.getElementById('subtrair')
const addNumber = document.getElementById('adicionar')

const text = document.querySelector('.text')
const text2 = document.querySelector('.text2')

var currentNumber = 0

totalCount.innerHTML = currentNumber

// Adicionar evento click e funções dos buttons

subtractNumber.addEventListener('click', function () {
    currentNumber--
    switch (true) {
        case currentNumber == -5:
          text2.classList.add('show')
          subtractNumber.disabled = true
          totalCount.innerHTML = currentNumber
          break
        case currentNumber < 0:
          totalCount.style.color = 'red'
          break
        case currentNumber < 5:
          addNumber.disabled = false
          text.classList.remove('show')
          totalCount.innerHTML = currentNumber
          break
    }
    totalCount.innerHTML = currentNumber
})

addNumber.addEventListener('click', function () {
    currentNumber++
    switch (true) {
      case currentNumber == 5:
        text.classList.add('show')
        addNumber.disabled = true
        totalCount.innerHTML = currentNumber
        break
      case currentNumber >= 0:
        totalCount.style.color = 'black'
        break
      case currentNumber > -5:
        text2.classList.remove('show')
        subtractNumber.disabled = false
        totalCount.innerHTML = currentNumber
        break
    }
    totalCount.innerHTML = currentNumber
})