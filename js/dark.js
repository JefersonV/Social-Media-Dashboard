const checkbox = document.querySelector('#checkbox')
console.log(checkbox)
console.log(window.matchMedia('(prefers-color-scheme: dark)'))

if(window.matchMedia('(preferes-color-scheme: dark)')) {
    checkbox.setAttribute('checkbox',true)
}