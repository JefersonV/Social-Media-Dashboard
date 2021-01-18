const checkbox = document.querySelector('#checkbox')
console.log(checkbox)
console.log(window.matchMedia('(prefers-color-scheme: dark)'))
//document.body.style.setProperty('--cardGray', 'skyblue')
if(window.matchMedia('(preferes-color-scheme: dark)')) {
    checkbox.setAttribute('checkbox',true)
}

checkbox.addEventListener('change', function (event) {
    

    

  if(this.checked) {
    document.body.classList.remove('is-light-mode')
    document.body.classList.add('is-dark-mode')
  } else {
    document.body.classList.remove('is-dark-mode')
    document.body.classList.add('is-light-mode')
  } 
})