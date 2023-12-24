// Iteration 1: Declare variables required for this game
let gamebg = document.getElementById("game-body");
// let Chance = document.getElementById("lives");
let gametimer = 60;
let a = ['./assets/zombie-1.png',
'./assets/zombie-2.png',
'./assets/zombie-3.png',
'./assets/zombie-4.png',
'./assets/zombie-5.png',
'./assets/zombie-6.png']
// Iteration 1.2: Add shotgun sound

gamebg.addEventListener("click",function(){
    let shotGunSound = new Audio('./assets/shotgun.wav');
    shotGunSound.play();
    shotGunSound.volume = 0.3;
});

// Iteration 1.3: Add background sound

let BgSound = new Audio('./assets/bgm.mp3');
BgSound.play();
BgSound.loop = true;
BgSound.volume = 0.2;
// Iteration 1.4: Add lives
let lives =0;
let id=0;
// Iteration 2: Write a function to make a zombie
function CreatChar(){
let aZombie = a[Math.floor(Math.random()*6)]; //here 6 is excluded

gamebg.innerHTML += `<img src='${aZombie}' alt='${aZombie}' class='zombie-image' id ='zombie-${id}'/>`;

let zombie = document.getElementById('zombie-'+id);
let randomNum = Math.floor(Math.random()*(80-20))+20;
zombie.style.transform = `translateX(${randomNum}vw)`;

let random2 = Math.floor(Math.random()*(7-2))+2;
zombie.style.animationDuration = `${random2}s`;


zombie.addEventListener("click",function(){
    KillZombie(zombie);
});
}

function KillZombie(zombie){
    zombie.style.display ='none';
    id++;
    CreatChar();
}




// Iteration 3: Write a function to check if the player missed a zombie



// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer
setInterval(function(){
    gametimer = gametimer-1;
    document.getElementById("timer").innerText=gametimer;
    let zombieMiss = document.getElementById('zombie-'+id);
    if(zombieMiss){
        let topZombie = zombieMiss.getBoundingClientRect().top;
    if(topZombie<=0){
        lives++
        if(lives==4){
           window.location.href='./game-over.html'
        }
            KillZombie(zombieMiss)
    }
    }
    if(gametimer==0){
        window.location.href='./win.html';
    }
},1000)

// Iteration 6: Write a code to start the game by calling the first zombie
CreatChar();
// Iteration 7: Write the helper function to get random integer

function getnum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}