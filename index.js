(() => {
    'use strict'

    ready(function () {
        documentSetOnKeyPressedListener()
        setDrumButtonsOnClickListeners()
    })
})()

function setDrumButtonsOnClickListeners() {
    let drums = document.querySelectorAll('.drum')
    drums.forEach(element => {
        element.addEventListener("click", () => {
            let drumCLass = element.className.split(' ')[0]
            makeSound(drumCLass)
        })
    });
}

function documentSetOnKeyPressedListener() {
    document.addEventListener("keydown", (e) => {
        makeSound(e.key)
    })
}

function makeSound(drumClass) {
    let audio = new Audio("");
    switch (drumClass) {
        case "w": {
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }
        case "a": {
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case "s": {
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case "d": {
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        case "j": {
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case "k": {
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }
        case "l": {
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }
    }
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}