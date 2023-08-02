function enviar_resposta(){

    Numero1 = document.getElementById("Numero1").value;
    Numero2 = document.getElementById("Numero2").value;
    actual_answer = parseInt(Numero1) * parseInt(Numero2)


question_number = "<h4>" + Numero1 + "X" + Numero2 +"</h4>";

input_box = "<br>:Resposta : <input type='text' id='input_check_box'>";

check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()>Checar</button>";

row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById("Numero1").value = "";

document.getElementById("Numero2").value = "";

} 

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_anwser =document.getElementById("input_check_box").value;

    if(get_answer == actual_answer){

        if(answer_turn  == "player1"){
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        
        }
        else{
            update_player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;  
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Turno de pergunta - "+player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno de pergunta - "+player1_name;
    }
}

