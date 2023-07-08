console.log("main.js is connected.");

function selectOption() {
    const selectedActivity = document.querySelector('#cal-move').value;
    document.querySelector('#selected-activity').textContent = selectedActivity;

    const form = document.getElementById('calculation-form');
    if (selectedActivity === 'general-move') {
        form.action = 'general-move.html';
    } else if (selectedActivity === 'control-move') {
        form.action = 'control-move.html';
    } else if (selectedActivity === 'tool-used') {
        form.action = 'tool-used.html';
    }

    form.submit();
}
