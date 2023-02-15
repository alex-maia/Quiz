var myQuestions = [
    {
      question: "Quanto é 10+10?",
      answers: {
        a: '3',
        b: '20',
        c: '115',
        d:'1'
      },
      correctAnswer: '20',
      response: null
    },
    {
      question: "Quanto é 30/10?",
      answers: {
        a: '3',
        b: '5',
        c: '10',
        d: '2'
      },
      correctAnswer: '3',
      response: null
    },
    {
      question: "Quanto é 100x10?",
      answers: {
        a: '100',
        b: '50',
        c: '1000',
        d: '102'
      },
      correctAnswer: '1000',
      response: null
    },
    {
      question: "Qual é a cor da relva?",
      answers: {
        a: 'amarela',
        b: 'vermelha',
        c: 'azul',
        d: 'verde'
      },
      correctAnswer: 'verde',
      response: null
    },
    {
      question: "Qual é a cor do mar?",
      answers: {
        a: 'amarela',
        b: 'vermelha',
        c: 'azul',
        d: 'verde'
      },
      correctAnswer: 'azul',
      response: null
    }
  ];

  var areaQuestion = document.getElementById('question');
  var areaAnswer = document.getElementById('area-answer');
  var submitButton = document.getElementById('submit');
  var previous = document.getElementById('previous');
  var next = document.getElementById('next');
  var resetbutton = document.getElementById('reset'); 
  var radioButtons = document.getElementsByName('answer-quiz');
  var progress = document.getElementById('progressBar');
  var points = 0
  var counterQuestions = 0;
  var valueQuiz='';
  var radios = document.querySelectorAll('input[type="radio"]');
  initialize()

    function initialize(){
      progress.value = 0;
      areaAnswer.innerHTML = '';
      document.getElementById('result').innerHTML = ""
      resetbutton.style.display = "none";
      next.style.display = "block";
      counterQuestions = 0;      
      areaQuestion.innerHTML = myQuestions[counterQuestions].question;
      let size = Object.keys(myQuestions[counterQuestions].answers).length;
      let entries = Object.entries(myQuestions[counterQuestions].answers)
      for (let i = 0; i < size; i++) {
        areaAnswer.innerHTML += "<div class='area-label'> <input type='radio' name='answer-quiz' value='"+entries[i][1]+"' class='input' id='answer"+i+"'> <label class='answer' for='answer"+i+"'> "+entries[i][1]+" </label> </div>  "; 
      }
    } 
        
      function nextQuestion(){
          for (let x = 0; x < radioButtons.length; x++) {
          if(radioButtons[x].checked){
            myQuestions[counterQuestions].response = radioButtons[x].value;
            counterQuestions += 1;
            progress.value += 100/myQuestions.length;
            if(counterQuestions < myQuestions.length-1){
              // previous.style.display = "block";
              areaQuestion.innerHTML = myQuestions[counterQuestions].question;
              areaAnswer.innerHTML = ""; 
              let size = Object.keys(myQuestions[counterQuestions].answers).length;
              let entries = Object.entries(myQuestions[counterQuestions].answers)
              for (let i = 0; i < size; i++) {
                  areaAnswer.innerHTML += "<div class='area-label'> <input type='radio' name='answer-quiz' value='"+entries[i][1]+"' class='input' id='answer"+i+"'> <label class='answer' for='answer"+i+"'> "+entries[i][1]+" </label> </div>  "; 
                }
              }else{
                areaQuestion.innerHTML = myQuestions[counterQuestions].question;
                areaAnswer.innerHTML = ""; 
                let size = Object.keys(myQuestions[counterQuestions].answers).length;
                let entries = Object.entries(myQuestions[counterQuestions].answers)
                for (let i = 0; i < size; i++) {
                    areaAnswer.innerHTML += "<div class='area-label'> <input type='radio' name='answer-quiz' value='"+entries[i][1]+"' class='input' id='answer"+i+"'> <label class='answer' for='answer"+i+"'> "+entries[i][1]+" </label> </div>  "; 
                  }
                next.style.display = "none";
              }
              return
            }
          } 
          element = document.getElementById('area-alert');
          element.innerHTML = "<div class='uk-alert-danger' uk-alert> <a class='uk-alert-close' uk-close></a> <p>Obrigatório responder!</p> </div>"
      

        }

        function result(){
          document.getElementById('result').innerHTML = ""
          progress.value += 100/myQuestions.length;
          for (let x = 0; x < radioButtons.length; x++) {
            if(radioButtons[x].checked){
              myQuestions[counterQuestions].response = radioButtons[x].value;
              counterQuestions += 1;
            }
          }
          for (let x = 0; x < myQuestions.length; x++) {
            console.log(myQuestions[x].response);
            if(myQuestions[x].response == myQuestions[x].correctAnswer){
              points = points + 100/myQuestions.length;
            }
          }
          document.getElementById('result').innerHTML += "Obtiveste uma pontuação de: "+points+"%"
          resetbutton.style.display = "block";
          points = 0;
        }

      // function previousQuestion(){
      //     counterQuestions -= 1;
      //     areaQuestion.innerHTML = myQuestions[counterQuestions].question;
      //     areaAnswer.innerHTML = ""; 
      //     let size = Object.keys(myQuestions[counterQuestions].answers).length;
      //     let entries = Object.entries(myQuestions[counterQuestions].answers)
      //     for (let i = 0; i < size; i++) {
      //         areaAnswer.innerHTML += "<div class='area-label'> <input type='radio' name='answer-quiz' value='"+entries[i][1]+"' class='input' id='answer"+i+"'> <label class='answer' for='answer"+i+"'> "+entries[i][1]+" </label> </div>  "; 
      //     }
      //     next.style.display = "block";
      //     if(counterQuestions === 0){
      //       previous.style.display = "none";
      //     }
      // }

    
      
