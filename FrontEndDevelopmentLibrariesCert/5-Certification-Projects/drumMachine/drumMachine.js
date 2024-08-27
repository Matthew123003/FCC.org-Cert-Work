document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const drumPads = document.querySelectorAll('.drum-pad');

    drumPads.forEach(pad => {
        pad.addEventListener('click', () => {
            playSound(pad.id);
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key.toUpperCase();
        const drumPad = document.getElementById(key);

        if (drumPad) {
            playSound(drumPad.parentElement.id);
        }
    });

    function playSound(id) {
        const audio = document.querySelector(`#${id} .clip`);
        display.textContent = id;
        audio.currentTime = 0;
        audio.play();
    }
});
