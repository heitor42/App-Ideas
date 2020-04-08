function checkIsBin (value) {
    for (i of value) {
        if (i != 0 && i != 1){
            alert('It is not a bin number.')
            return false;
        }
    }
    return true;
}

function binToDec (bin) {
    const size = bin.length
    let dec = 0
    for (i in bin) {
        dec += bin[i]*(2**(size-i-1))
    }
    return dec;
}

function showsAnswer({binNumber, decNumber}) {
    const answer = document.createTextNode(`The number ${binNumber} in bin to dec is ${decNumber}`)
    const body = document.querySelector('body')

    body.appendChild(answer)

}

function main() {
    const binNumber = document.querySelector('#binNumber').value;
    if (checkIsBin(binNumber)) {
        const decNumber = binToDec(binNumber)
        showsAnswer({decNumber, binNumber})
    }
}


const myButton = document.querySelector('button')
myButton.onclick = () =>main()