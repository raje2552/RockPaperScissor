let choois = document.getElementsByClassName('Choois');
const showIcon = document.getElementsByClassName('photo-rock')[0];
const computerShowIcon = document.getElementsByClassName('scissors')[0];




function  actionOnClick(){
    let typeClickPlayer = null
    let typeAutocomputer = null 
    choois[0].onclick=()=>{
        let Rock = document.getElementById('rock').getAttribute("src")
        showIcon.setAttribute('style',"background-image: url("+Rock+");")
        typeAutocomputer = RandomChoois()
        typeClickPlayer = "Rock"
        compareChoois(typeClickPlayer , typeAutocomputer)
    }
    choois[1].onclick=()=>{
        const scissors =document.getElementById('scissors').getAttribute("src")
        showIcon.setAttribute('style',"background-image: url("+scissors+");")
        typeAutocomputer = RandomChoois()
        typeClickPlayer = "scissors"
        compareChoois(typeClickPlayer , typeAutocomputer)
    }
    choois[2].onclick=()=>{
        let paper = document.getElementById('paper').getAttribute("src")
        showIcon.setAttribute('style',"background-image: url("+paper+");")
        typeAutocomputer = RandomChoois()
        typeClickPlayer = "paper"
        compareChoois(typeClickPlayer , typeAutocomputer)
    }
    
}


function RandomChoois(){
    let array = ['../image/RockPNG.png' , '../image/PaperPNG.png' , '../image/Scissors-PNG.png' ]
    let index = Math.random()*10
    index = Math.floor(index)
    while(index > 2){
        index = Math.floor(Math.random()*10)
        if(index < 3){
            break
        }
    }
    computerShowIcon.setAttribute('style',"background-image: url("+array[index]+");")
    return  index == 0 ? "Rock": index == 2 ? "paper" : index == 1 ? "scissors" : null
    }


function compareChoois(player , computer){
    if(player == computer){
        document.getElementById('demo2').removeAttribute("style")
        document.getElementById('demo2').setAttribute('style',"color: rgb(86, 86, 86);")
        document.getElementById('demo2').innerHTML = 'Darw'
    }
    else if ((player == 'Rock' && computer == 'paper') || 
             (player == 'paper' && computer == 'scissors') ||
             (player == 'scissors' && computer == 'Rock') ){
                document.getElementById('demo2').removeAttribute("style")
                document.getElementById('demo2').setAttribute('style',"color: rgb(13, 253, 0);")
                document.getElementById('demo2').innerHTML = 'Win the Player '
                let ElementSpan =document.getElementById('playerScore')
                ElementSpan.innerHTML = Number.parseInt(ElementSpan.firstChild.nodeValue)+1+""
                
    }
    else if ((computer == 'Rock' && player == 'paper') || 
             (computer == 'paper' && player == 'scissors') ||
             (computer == 'scissors' && player == 'Rock')){
                document.getElementById('demo2').removeAttribute("style")
                document.getElementById('demo2').setAttribute('style',"color: rgb(253, 0, 0);")
                document.getElementById('demo2').innerHTML = 'Win the computer '
                let ElementSpan =document.getElementById('computerScore')
                ElementSpan.innerHTML = Number.parseInt(ElementSpan.firstChild.nodeValue)+1+""
   
            }

}

actionOnClick()