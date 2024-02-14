const rps = document.querySelectorAll(".game img");
const text_rps = document.getElementsByTagName("p");

function play(playerChoice) {
    setTimeout(() => {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result;

        if (playerChoice === computerChoice) {
            result = "Match Draw";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = "User Won!!";
        } else {
            result = "Cpu Won!!";
        }

        document.getElementsByTagName("h1")[0].innerText = result;
        document.querySelector(".img1").classList.remove("img_animation1");
        document.querySelector(".img2").classList.remove("img_animation2");
        document.querySelector(".img1").src = `${playerChoice}.png`;

        document.querySelector(".img2").src = `${computerChoice}.png`;
        for (let i = 0; i < rps.length; i++) {
            rps[i].style.opacity = "0.5";
            rps[i].classList.remove("active");
        }
        for (let i = 0; i < text_rps.length; i++) {
            text_rps[i].style.opacity = "0.5";
            text_rps[i].classList.remove("active");
        }
    }, 5000);
    document.getElementsByTagName("h1")[0].innerText = "Wait...";

    document.querySelector(".img1").src = "rock.png";
    document.querySelector(".img2").src = "rock.png";
    document.querySelector(".img1").classList.add("img_animation1");
    document.querySelector(".img2").classList.add("img_animation2");

    const image = document.querySelectorAll(`.${playerChoice}`);
    for (let i = 0; i < image.length; i++) {
        image[i].classList.add("active");

    }

}


for (let i = 0; i < rps.length; i++) {
    rps[i].addEventListener('mouseover', function () {
        this.style.opacity = "1";
        text_rps[i].style.opacity = "1";
    });
    rps[i].addEventListener('mouseout', function () {
        this.style.opacity = "0.5";
        text_rps[i].style.opacity = "0.5";
    });
}

for (let i = 0; i < text_rps.length; i++) {
    text_rps[i].addEventListener('mouseover', function () {
        this.style.opacity = "1";
        rps[i].style.opacity = "1";
    });
    text_rps[i].addEventListener('mouseout', function () {
        this.style.opacity = "0.5";
        rps[i].style.opacity = "0.5";
    });
}