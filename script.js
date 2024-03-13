var btnClick = document.querySelectorAll(".btn");
var resetBtn = document.querySelector("#reset-btn");
const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var count =0;
isCross = true;

btnClick.forEach(btn => {
  btn.addEventListener("click",()=>{
    if(isCross == true){
    btn.innerText= "X"
    count++;
    isCross=false;
    // console.log("X");
    }else{
      btn.innerText = "O";
      count++;
      isCross=true;

    }
    btn.disabled = true;  // disable the button after once clicked

    checkWinner();
  })



  
});
const checkWinner = ()=>{
  for(let pattern of winner){

    var pos1Val = btnClick[pattern[0]].innerText;
    var pos2Val = btnClick[pattern[1]].innerText;
    var pos3Val = btnClick[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val !="" && pos3Val !=""){
      if(pos1Val===pos2Val && pos2Val===pos3Val){
        document.querySelector("h1").innerText=`Winner is ${pos1Val}`; // this changes the heading to the winner
      }
    }
    if(count===9){
      document.querySelector('h1').innerText = `It's a Draw`; // this changes the heading to the winner
      break;
    }


  }
}

resetBtn.addEventListener("click",()=>{
  // alert("im clicked")
  location.reload()  // reloads the game
})
