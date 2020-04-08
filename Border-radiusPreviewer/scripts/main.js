const previewer = document.querySelector('#previewer')

function changerBorad(previewer, values) {
    previewer.style.borderTopLeftRadius = `${values.topLeftValue}px`;
    previewer.style.borderTopRightRadius = `${values.topRightValue}px`;
    previewer.style.borderBottomLeftRadius = `${values.bottomLeftValue}px`
    previewer.style.borderBottomRightRadius = `${values.bottomRightValue}px`
}

function getValues() {
    const values = {
        topLeftValue: document.querySelector('#top-left').value,
        topRightValue: document.querySelector('#top-right').value,
        bottomLeftValue: document.querySelector('#bottom-left').value,
        bottomRightValue: document.querySelector('#bottom-right').value,
    }
     
    return values;
}

function showBorderValue(values) {
    const previewer = document.getElementById('previewer')
    previewer.innerHTML = null
    previewer.innerText = `
    border-top-left-radius: ${values.topLeftValue}px
    border-top-right-radius: ${values.topRightValue}px
    borader-bottom-left-radius: ${values.bottomLeftValue}px
    borader-bottom-right-radius: ${values.bottomRightValue}px
    `;

}
document.querySelector('body').onchange = () => {
    changerBorad(previewer, getValues())
    showBorderValue(getValues())

}