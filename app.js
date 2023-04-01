const buttonElement = document.querySelector('button')
buttonElement.addEventListener('click', addCSS);
function addCSS() {
    const textAreaElement = document.querySelector('textarea')
    const css = textAreaElement.value
    const foreFront = document.querySelector('#forefront')
    foreFront.style.cssText = css
}