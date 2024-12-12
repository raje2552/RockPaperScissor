let ChooisPlayer_1 = document.getElementsByClassName('Choois_player1')
let ChooisPlayer_2 = document.getElementsByClassName('Choois_player2')

let Player_1 = null
let Player_2 = null
let srcForShowPhoto_Player1 = null
let srcForShowPhoto_Player2 = null


function actionOnClick() {
    ChooisPlayer_1[0].onclick = () => {
        srcForShowPhoto_Player1 = ChooisPlayer_1[0].children[0].getAttribute("src")
        Player_1 = ChooisPlayer_1[0].children[0].getAttribute("id")
        document.getElementById("selectChooisPlayer1").setAttribute("style", "background-image : url(" + srcForShowPhoto_Player1 + ");")
    }
    ChooisPlayer_1[1].onclick = () => {
        srcForShowPhoto_Player1 = ChooisPlayer_1[1].children[0].getAttribute("src")
        Player_1 = ChooisPlayer_1[1].children[0].getAttribute("id")
        document.getElementById("selectChooisPlayer1").setAttribute("style", "background-image : url(" + srcForShowPhoto_Player1 + ");")
    }
    ChooisPlayer_1[2].onclick = () => {
        srcForShowPhoto_Player1 = ChooisPlayer_1[2].children[0].getAttribute("src")
        Player_1 = ChooisPlayer_1[2].children[0].getAttribute("id")
        document.getElementById("selectChooisPlayer1").setAttribute("style", "background-image : url(" + srcForShowPhoto_Player1 + ");")
    }
    ChooisPlayer_2[0].onclick = () => {
        srcForShowPhoto_Player2 = ChooisPlayer_1[0].children[0].getAttribute("src")
        Player_2 = ChooisPlayer_1[0].children[0].getAttribute("id")
        document.getElementById("selectChooisPlayer2").setAttribute("style", "background-image : url(" + srcForShowPhoto_Player2 + ");")
        compareChoois(Player_1 , Player_2)
    }
    ChooisPlayer_2[1].onclick = () => {
        srcForShowPhoto_Player2 = ChooisPlayer_1[1].children[0].getAttribute("src")
        Player_2 = ChooisPlayer_1[1].children[0].getAttribute("id")
        document.getElementById("selectChooisPlayer2").setAttribute("style", "background-image : url(" + srcForShowPhoto_Player2 + ");")
        compareChoois(Player_1 , Player_2)
    }
    ChooisPlayer_2[2].onclick = () => {
        srcForShowPhoto_Player2 = ChooisPlayer_1[2].children[0].getAttribute("src")
        Player_2 = ChooisPlayer_1[2].children[0].getAttribute("id")
        document.getElementById("selectChooisPlayer2").setAttribute("style", "background-image : url(" + srcForShowPhoto_Player2 + ");")
        compareChoois(Player_1 , Player_2)
    }

}



function compareChoois(player1, player2) {
    if (player1 == player2) {
        document.getElementById('demo2').removeAttribute("style")
        document.getElementById('demo2').setAttribute('style', "color: rgb(86, 86, 86);")
        document.getElementById('demo2').innerHTML = 'Darw'
    }
    else if ((player1 == 'Rock' && player2 == 'paper') ||
        (player1 == 'paper' && player2 == 'scissors') ||
        (player1 == 'scissors' && player2 == 'Rock')) {
        document.getElementById('demo2').removeAttribute("style")
        document.getElementById('demo2').setAttribute('style', "color: rgb(13, 253, 0);")
        document.getElementById('demo2').innerHTML = 'Win the Player - 2'
        let ElementSpan = document.getElementById('playerScore')
        ElementSpan.innerHTML = Number.parseInt(ElementSpan.firstChild.nodeValue) + 1 + ""

    }
    else if ((player2 == 'Rock' && player1 == 'paper') ||
        (player2 == 'paper' && player1 == 'scissors') ||
        (player2 == 'scissors' && player1 == 'Rock')) {
        document.getElementById('demo2').removeAttribute("style")
        document.getElementById('demo2').setAttribute('style', "color: rgb(253, 0, 0);")
        document.getElementById('demo2').innerHTML = 'Win the player - 1'
        let ElementSpan = document.getElementById('computerScore')
        ElementSpan.innerHTML = Number.parseInt(ElementSpan.firstChild.nodeValue) + 1 + ""

    }

}


actionOnClick()
