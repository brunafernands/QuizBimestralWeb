let respostas = []
let acertos = 0;
let vidas = 3;
let partidas = 0;

document.getElementById('mensagemFimdeJogo').style.display="none";


const proxy = 'https://cors-anywhere.herokuapp.com/';

//------------------------------------------------------------------------------------------------------------------

document.querySelector('.btn-quiz').addEventListener('click', function(){  
    tempo();
    document.querySelector('.btn-quiz').textContent = `Próxima Pergunta`;


    //PEGAR PERGUNTAS
    let c = document.getElementById("selectCat");
    let categoriaSelecionada = c.options[c.selectedIndex].value;

    let d = document.getElementById("selectDif");
    let dificuldadeSelecionada = d.options[d.selectedIndex].value;

    let difName = document.getElementById("selectDif");
    let dificuldadeSelecionadaNome = difName.options[difName.selectedIndex].text;

    axios.get(`${proxy}https://opentdb.com/api.php`, {
        params: {
            amount: 1,
            category: categoriaSelecionada,
            difficulty: dificuldadeSelecionada
        }
    })
    .then(function(json) {
        const quiz = json.data;

        const pergunta = quiz.results[0]
        const categorias = pergunta.category
        const dificuldade = pergunta.difficulty
        const respostaCerta = pergunta.correct_answer
        const respostasIncorreta = pergunta.incorrect_answers

        console.log(pergunta)
        console.log(categorias)
        console.log(dificuldade)
        console.log(pergunta.question)

        document.querySelector('.pergunta').textContent = `${pergunta.question}`;

        respostas = respostasIncorreta
        respostas.push(respostaCerta);
        respostas = shuffle(respostas);

        const categ = document.querySelector('.categoria');
        categ.textContent = '';

        const dificul = document.querySelector('.dificuldade');
        dificul.textContent = '';

        const resp = document.querySelector('.respostas');
        resp.textContent = '';

        
        categ.innerHTML +=
        `<option value="${categoriaSelecionada}">${categorias}</option>`
        

        dificul.innerHTML += 
        `<option value="${dificuldade}">${dificuldadeSelecionadaNome}</option>`
    
        for (let i = 0; i < respostas.length; i++) {
            resp.innerHTML += 
            `<li class="btn btn-info container margem answer${i}">${respostas[i]}</li>`
        };

        console.log(respostaCerta)

        document.querySelector('.answer0').addEventListener('click', function() {        
            if (respostas[0] == respostaCerta) {
                if(pergunta.difficulty == "easy"){
                    console.log("Pontos antes de responder:" + acertos)
                    acertos = acertos + 5;
                    console.log("Pontos depois de responder:" + acertos)
                    pontuou();
                    partidas ++;

                } if(pergunta.difficulty == "medium"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 8;
                    console.log("Pontos despois de responder:" + acertos);
                    pontuou();
                    partidas ++;

                } if(pergunta.difficulty == "hard"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 10;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    partidas ++;

                }
                document.querySelector('.answer0').style.backgroundColor = "#14fc03";  

            }
            else {
                if(pergunta.difficulty == "easy"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos - 5;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                } if(pergunta.difficulty == "medium"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos - 8;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                } if(pergunta.difficulty == "hard"){
                    console.log("Pontos antes de responder:" + acertos);             
                    acertos = acertos - 10;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                }         
                document.querySelector('.answer0').style.backgroundColor = "#fc030f";  
                alert("A resposta correta era: " + respostaCerta);
                


            }
        })

        document.querySelector('.answer1').addEventListener('click', function() {
            if (respostas[1] == respostaCerta) {
                if(pergunta.difficulty == "easy"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 5;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    partidas ++;

                } if(pergunta.difficulty == "medium"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 8;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    partidas ++;

                } if(pergunta.difficulty == "hard"){
                    console.log("Pontos antes de responder:" + acertos);             
                    acertos = acertos + 10;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    partidas ++;

                }
                document.querySelector('.answer1').style.backgroundColor = "#14fc03";  
                
            }
            else {
                if(pergunta.difficulty == "easy"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos - 5;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                } if(pergunta.difficulty == "medium"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos - 8;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                } if(pergunta.difficulty == "hard"){
                    console.log("Pontos antes de responder:" + acertos);             
                    acertos = acertos - 10;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                }
                document.querySelector('.answer1').style.backgroundColor = "#fc030f";  
                alert("A resposta correta era: " + respostaCerta);
                


            }
        })

        document.querySelector('.answer2').addEventListener('click', function() {
            if (respostas[2] == respostaCerta) {
                if(pergunta.difficulty == "easy"){
                    console.log("Pontos antes de responder:" + acertos);                    
                    acertos = acertos + 5;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    partidas ++;
                } if(pergunta.difficulty == "medium"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 8;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    partidas ++;
                } if(pergunta.difficulty == "hard"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 10;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    partidas ++;
                    }
                document.querySelector('.answer2').style.backgroundColor = "#14fc03";  

            }
            else {
                if(pergunta.difficulty == "easy"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos - 5;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                } if(pergunta.difficulty == "medium"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos - 8;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();
                    
                } if(pergunta.difficulty == "hard"){
                    console.log("Pontos antes de responder:" + acertos);             
                    acertos = acertos - 10;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();
                }
                document.querySelector('.answer2').style.backgroundColor = "#fc030f";
                alert("A resposta correta era: " + respostaCerta);
               
  

            }
        })

        document.querySelector('.answer3').addEventListener('click', function() {
            if (respostas[3] == respostaCerta) {
                if(pergunta.difficulty == "easy"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 5;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    partidas ++;
                } if(pergunta.difficulty == "medium"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 8;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    partidas ++;
                } if(pergunta.difficulty == "hard"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos + 10;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    partidas ++;
                }
                document.querySelector('.answer3').style.backgroundColor = "#14fc03";  

            }
            else {
                if(pergunta.difficulty == "easy"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos - 5;
                    console.log("Pontos depois de responder:" + acertos);
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                } if(pergunta.difficulty == "medium"){
                    console.log("Pontos antes de responder:" + acertos);
                    acertos = acertos - 8;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();

                } if(pergunta.difficulty == "hard"){
                    console.log("Pontos antes de responder:" + acertos);             
                    acertos = acertos - 10;
                    console.log("Pontos depois de responder:" + acertos);      
                    pontuou();
                    console.log("Vidas antes de errar:" + vidas);
                    partidas ++;
                    vidas --;
                    console.log("Vidas depois de errar:" + vidas);
                    vida();
                }        
                document.querySelector('.answer3').style.backgroundColor = "#fc030f";  
                alert("A resposta correta era: " + respostaCerta);

            }

           
        })

    })
    .catch(function(erro) {
        console.log(erro);
        console.log("entrou no erro")
    });

});

//------------------------------------------------------------------------------------------------------------------

document.querySelector('.categoria').addEventListener('click', function() {
    //PEGAR CATEGORIAS
    axios.get(`${proxy}https://opentdb.com/api_category.php`)
    .then(function(json) {
        const categorias = json.data;
        const cat = categorias.trivia_categories;

        let selectCat = document.getElementById("selectCat");
        console.log(selectCat.options.length)

        if (selectCat.options.length != 24) {
            while (selectCat.options.length > 0) { 
                selectCat.remove(0); 
            }

            let newOption
            
            for(let i = 0; i < cat.length; i++){            
                newOption = document.createElement("option"); 
                newOption.value = cat[i].id;
                newOption.text=cat[i].name; 

                try { 
                    selectCat.add(newOption);
                } 
                catch (e) { 
                   selectCat.appendChild(newOption); 
                }
            }
        }
    })
    .catch(function(erro) {
        console.log(erro);
        console.log("entrou no erro")
    });
});

//------------------------------------------------------------------------------------------------------------------

document.querySelector('.dificuldade').addEventListener('click', function() {

    let selectDif = document.getElementById("selectDif");

    if (selectDif.options.length != 4) {
        while (selectDif.options.length > 0) { 
            selectDif.remove(0); 
        }

        let newOption2
                
        for(let i = 0; i < 4; i++){            
            if(i==0) {
                var valor = "";
                var texto = "Aleatório";
            }
            else if (i == 1) {
                var valor = "easy"
                var texto = "Fácil"

            }
            else if (i == 2) {
                var valor = "medium"
                var texto = "Médio"
            }
            else {
                var valor = "hard"
                var texto = "Difícil"
            }

            newOption2 = document.createElement("option");
            newOption2.value = valor;
            newOption2.text= texto; 

            try { 
                selectDif.add(newOption2);
            } 
            catch (e) { 
               selectDif.appendChild(newOption2); 
            }
        }
    }
    
})

function shuffle(respostas) {
    let ctr = respostas.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = respostas[ctr];
        respostas[ctr] = respostas[index];
        respostas[index] = temp;
    }
    return respostas;
}

function pontuou(){
    document.querySelector('.btn-pontos').textContent = `Pontos: ${acertos}`;
}

function vida(){
    if(vidas==2){
        document.getElementById('vida1').style.display="none";
    }if(vidas==1){
        document.getElementById('vida2').style.display="none";
    }if(vidas==0){
        document.getElementById('vida3').style.display="none";
        fimJogo();
    }
}

function fimJogo(){
    if(vidas==0){
        const mensagem =  document.getElementById('mensagemFimdeJogo');
        mensagem.textContent = '';
        mensagem.innerHTML +=
        `<h5 id="mensagemFimdeJogo" class="card-title">VOCÊ PERDEU!!!! 
        Sua pontuação foi de: ${acertos} e você jogou ${partidas} partidas.</h5>`

        document.querySelector('.btn-quiz').textContent = `Dê refresh na pagina para jogar novamente`;
        document.getElementById('mensagemFimdeJogo').style.display="flex";
        document.getElementById('pergunta').style.display = "none";
        document.getElementById('resposta').style.display = "none"
    }
}

function tempo(){
    if(pergunta.difficulty == "easy"){
        let i = 45;
        let texto = document.querySelector('.btn-tempo');
        texto.textContent = `Tempo Restante: ${i} seg`
            const it = setInterval(function() {
                i--;
                texto.textContent = `Tempo Restante: ${i} seg`
                    if (i <= 0) {
                        texto.textContent = 'ACABOU SEU TEMPO';
                        blockBotao();
                        clearInterval(it);
                    }
            }, 45);
    }

    if(pergunta.difficulty == "medium"){
        let i = 30;
        let texto = document.querySelector('.btn-tempo');
        texto.textContent = `Tempo Restante: ${i} seg`
            const it = setInterval(function() {
                i--;
                texto.textContent = `Tempo Restante: ${i} seg`
                    if (i <= 0) {
                        texto.textContent = 'ACABOU SEU TEMPO';
                        blockBotao();
                        clearInterval(it);
                    }
            }, 30);
    }
    if(pergunta.difficulty == "hard"){
        let i = 15;
        let texto = document.querySelector('.btn-tempo');
        texto.textContent = `Tempo Restante: ${i} seg`
            const it = setInterval(function() {
                i--;
                texto.textContent = `Tempo Restante: ${i} seg`
                    if (i <= 0) {
                        texto.textContent = 'ACABOU SEU TEMPO';
                        blockBotao();
                        clearInterval(it);
                    }
            }, 15);
    }
}

function blockBotao(){
    document.querySelector('.answer3').disable = true;
    document.querySelector('.answer2').disable = true;
    document.querySelector('.answer1').disable = true;
    document.querySelector('.answer0').disable = true;
}