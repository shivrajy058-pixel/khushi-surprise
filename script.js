const sections = document.querySelectorAll('.section');

function nextSection(id) {
sections.forEach(section => {
section.classList.remove('active');
});

```
document.getElementById(id).classList.add('active');

if (id === 'letterSection') {
    startTypewriter();
}
```

}

// Music Control
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

musicBtn.addEventListener('click', () => {

```
if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerHTML = "⏸ Pause Music";
} else {
    bgMusic.pause();
    musicBtn.innerHTML = "🎵 Turn On The Vibes";
}
```

});

// Loading Screen
window.addEventListener('load', () => {

```
setTimeout(() => {

    document.getElementById('loading-screen').style.display = 'none';

}, 2500);
```

});

// Funny Section
function showAwesome() {

```
document.getElementById('awesomeResult').innerHTML =
    "I knew it 😂";

setTimeout(() => {

    nextSection('continueSection');

}, 1500);
```

}

// Escaping NO Button
const noBtn = document.getElementById('noBtn');

if (noBtn) {

```
noBtn.addEventListener('mouseover', () => {

    const x = Math.floor(Math.random() * 250);
    const y = Math.floor(Math.random() * 250);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});
```

}

// Gift Box
function openGift() {

```
const giftBox = document.getElementById('giftBox');

giftBox.innerHTML = "💖";

document.getElementById('giftMessage').innerHTML =
    "Congratulations! You unlocked your first surprise ✨";

setTimeout(() => {

    nextSection('messageSection');

}, 2500);
```

}

// Find The Gift Game
const boxes = document.querySelectorAll('.box');

let winningBox = Math.floor(Math.random() * 6);

boxes.forEach((box, index) => {

```
box.addEventListener('click', () => {

    if (index === winningBox) {

        box.innerHTML = "🎁";

        document.getElementById('gameResult').innerHTML =
            "You Found It 🎉";

        setTimeout(() => {

            nextSection('letterSection');

        }, 2000);

    } else {

        box.innerHTML = "❌";

        document.getElementById('gameResult').innerHTML =
            "Oops 😅 Try Again";

    }

});
```

});

// Typewriter Effect
const letterText = `
Dear Khushi,

Thank you for staying till the end.

Most people close random websites.

You didn't. 😌

That means a lot.

I hope this little surprise
made you smile today. 💖
`;

let indexNum = 0;

function startTypewriter() {

```
const target = document.getElementById('typewriter');

target.innerHTML = "";

indexNum = 0;

function type() {

    if (indexNum < letterText.length) {

        target.innerHTML += letterText.charAt(indexNum);

        indexNum++;

        setTimeout(type, 45);

    }

}

type();
```

}
