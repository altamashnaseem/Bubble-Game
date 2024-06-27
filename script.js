var timer = 60;
var score = 0;
var hitno;
//for making bubble
function makeBubble() {

    var bubble = "";

    for (var i = 0; i < 196; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubble += `<div class="circle">${rn}</div>`;

    }
    document.querySelector("#pbuttom").innerHTML = bubble;

}
//for getting new hit
function getnewhit() {
    hitno = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitno;
}
//for timer 
function runtimer() {
    var timerinterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timerval").textContent = timer;
        }

        else {
            document.querySelector("#pbuttom").innerHTML = `Game Over`;
            clearInterval(timerinterval);
        }
    }, 1000)

}
//for score which is increasing by 10
function newscore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
//for comparing the hit and click is equal or not if equal then increase the score
document.querySelector("#pbuttom").addEventListener("click", function (dets) {
    var clicknum = Number(dets.target.textContent);
    if (clicknum === hitno) {
        newscore();
        makeBubble();
        getnewhit();
    }
    else {

    }
});


makeBubble();
getnewhit();
runtimer();

//animation part with gsap
var tl = gsap.timeline();
tl.from("#ptop", {
    y: -150,
    duration: 1,
    opacity: 0,
    ease: "power1.out"

});
tl.from(".ele", {
    y: -150,
    duration: 1,
    opacity: 0,



});

tl.from("#pbuttom", {
    y: -150,
    duration: 1,
    opacity: 0,
    ease: "back.out"


});




var main = document.querySelector("#main");
var ball = document.querySelector("#ball");

main.addEventListener("mousemove", function (dets) {
    gsap.to(ball, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "power1.out"
    });
});