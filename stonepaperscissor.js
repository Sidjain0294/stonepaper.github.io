let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

//user choice
  choices.forEach((choice) => { //for each  fuction used for indivisual option
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id")
        //console.log("choice was clicked", userchoice); 
        playgame(userchoice) // pass user choice ehen we track what's the user choice
    });
  });
  
  //coomputer choice

  const gencompchoice = () => {
    const options = ["rock","paper","scissors"]; // array stored in the form of index
    const randomindex = Math.floor(Math.random() * 3); // math.random used to genrate no. btw 0 to 2 if *3 , in ccase we *4 it generate no . btw 0to3;
    return options[randomindex];  // which vale comes usder random index it give s to option
}

const drawgame=() =>{
   
    msg.innerHTML= "game was draw. play again!"
     msg.style.backgroundColor ="#081b31";
}

  //playgame  to update score also it know userchoice

  const playgame = (userchoice) =>{
    console.log("user choice =", userchoice);
    //generate computer choice
    const compchoice = gencompchoice(); // pass comp choice after return optuon
    console.log("comp choice =", compchoice);

    //showwinner
    const showwinner = (userwin , userchoice , compchoice) =>{
        if(userwin){
            userscore++;
            userscorepara.innerText= userscore;
            msg.innerHTML = `you win! your ${userchoice} beats ${compchoice}`; 
            msg.style.backgroundColor ="green";
        }else{
            compscore++;
            compscorepara.innerText = compscore;
            msg.innerHTML = ` you lose! ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor ="red";
        }
        
    }

    //drawgame

    if (userchoice===compchoice){
        drawgame();
         } else {
            let userwin = true;
            if(userchoice==="rock"){
                // compchoice may be scissors,paper other wise draw
                userwin = compchoice === "paper"? false : true; // if comp choice is paper against rock than user is defeat otherwise user win
            }else if (userchoice=== "paper"){
                userwin = compchoice=== "scissors" ? false : true;

            } else {//last choice is scissors
               userwin= compchoice==="rock" ? false: true;  
            }
            showwinner(userwin, userchoice, compchoice);
         }


  }


 