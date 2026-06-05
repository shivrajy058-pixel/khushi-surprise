window.onload = function () {

```
const loading = document.getElementById("loading-screen");

if (loading) {
    loading.style.display = "none";
}

const welcome = document.getElementById("welcome");

if (welcome) {
    welcome.classList.add("active");
}
```

};

// Section Navigation

function nextSection(id) {

```
document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
});

document.getElementById(id).classList.add("active");
```

}

// Funny Buttons

function showAwesome() {

```
document.getElementById("awesomeResult").innerHTML =
    "I knew it 😂";

setTimeout(() => {
    nextSection("continueSection");
}, 400);
```

}

// NO Button Escape

const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", () => {

```
const btn = document.getElementById("noBtn");

if (!btn) return;

btn.addEventListener("mouseover", () => {

    btn.style.position = "absolute";

    btn.style.left =
        Math.random() * 70 + "%";

    btn.style.top =
        Math.random() * 70 + "%";

});
```

});

// Gift Open

function openGift() {

```
document.getElementById("giftBox").innerHTML =
    "💖";

document.getElementById("giftMessage").innerHTML =
    "Congratulations! You unlocked your first surprise ✨";

setTimeout(() => {

    nextSection("messageSection");

}, 600);
```

}

// Gift Game

const boxes = document.querySelectorAll(".box");

const winningBox = Math.floor(Math.random() * 6);

boxes.forEach((box, index) => {

```
box.addEventListener("click", () => {

    if (index === winningBox) {

        box.innerHTML = "🎁";

        document.getElementById("gameResult").innerHTML =
            "You Found It 🎉";

        setTimeout(() => {

            nextSection("letterSection");

            startTypewriter();

        }, 700);

    } else {

        box.innerHTML = "❌";

        document.getElementById("gameResult").innerHTML =
            "Oops 😅 Try Again";

    }

});
```

});

// Typewriter

const text = `
Dear Khushi ❤️

Thank you for staying till the end.

This website was created
just to make you smile.

And honestly...

I hope it worked. ✨

Have a beautiful day 💖
`;

function startTypewriter() {

```
let i = 0;

const target =
    document.getElementById("typewriter");

target.innerHTML = "";

function typing() {

    if (i < text.length) {

        target.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 15);

    }

}

typing();
```

}
