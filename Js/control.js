console.log("main.js is connected.");

function calculate() {
    const selectedA = document.querySelector('input[name="ss1"]:checked');
    const selectedB = document.querySelector('input[name="ss2"]:checked');
    const selectedG = document.querySelector('input[name="ss3"]:checked');

    if (selectedA && selectedB && selectedG) {
        const sum = parseInt(selectedA.value) + parseInt(selectedB.value) + parseInt(selectedG.value);
        alert('The calculated result is: ' + sum);
    } else {
        alert('Please select values for A, B, and G.');
    }
}
