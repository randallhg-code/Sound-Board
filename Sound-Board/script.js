// Create an array of sounds 
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

//for each sound create a button, add a class of 'btn', update the text
sounds.forEach((sound) => {
    //create a button
    const btn = document.createElement('button');

    //add a class of 'btn' to the button element
    btn.classList.add('btn');

    //set the button label text to be the sound name
    btn.innerText = sound;

    //add an event listener to this button
    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    })
    // add the button to the DOM
    document.getElementById('buttons').appendChild(btn);

});

function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);
        snd.pause();
        snd.currentTime = 0;
    })
}