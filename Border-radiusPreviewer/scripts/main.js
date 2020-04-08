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

document.querySelector('body').onchange = () => {
    changerBorad(previewer, getValues())

}