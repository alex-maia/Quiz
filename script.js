var myQuestions = [
    {
      question: "Quanto é 10+10?",
      answers: {
        a: '3',
        b: '20',
        c: '115',
        d:'1'
      },
      correctAnswer: 'b',
      response: ''
    },
    {
      question: "Quanto é 30/10?",
      answers: {
        a: '3',
        b: '5',
        c: '10',
        d: '0'
      },
      correctAnswer: 'a',
      response: ''
    },
    {
      question: "Quanto é 100x10?",
      answers: {
        a: '100',
        b: '50',
        c: '1000',
        d: '0'
      },
      correctAnswer: 'c',
      response: ''
    }
  ];

  var areaQuestion = document.getElementById('question');
  var areaAnswer = document.getElementById('area-answer');
  var submitButton = document.getElementById('submit');
  var previous = document.getElementById('previous');
  var next = document.getElementById('next'); 
  var radioButtons = document.getElementsByName('answer-quiz');
  var counterQuestions = 0;
  var valueQuiz='';
    showQuestions()

    function showQuestions(){
        areaQuestion.innerHTML = myQuestions[counterQuestions].question;
        let size = Object.keys(myQuestions[0].answers).length;
        let entries = Object.entries(myQuestions[0].answers)
        for (let i = 0; i < size; i++) {
            areaAnswer.innerHTML += "<div class='area-label'> <input type='radio' name='answer-quiz' value='"+entries[i][1]+"' class='input' id='answer"+i+"'> <label class='answer' for='answer"+i+"'> "+entries[i][1]+" </label> </div>  "; 
        } 
      } 
        
      function nextQuestion(){
        counterQuestions += 1;
        for (let x = 0; x < radioButtons.length; x++) {
          if(radioButtons[x].checked){
            console.log(radioButtons[x].value);
            if(counterQuestions < myQuestions.length){
              previous.style.display = "block";
              areaQuestion.innerHTML = myQuestions[counterQuestions].question;
              areaAnswer.innerHTML = ""; 
              let size = Object.keys(myQuestions[counterQuestions].answers).length;
              let entries = Object.entries(myQuestions[counterQuestions].answers)
              for (let i = 0; i < size; i++) {
                  areaAnswer.innerHTML += "<div class='area-label'> <input type='radio' name='answer-quiz' value='"+entries[i][1]+"' class='input' id='answer"+i+"'> <label class='answer' for='answer"+i+"'> "+entries[i][1]+" </label> </div>  "; 
                }
              }else{
                next.style.display = "none";
              }
          }
        }
      }

      function previousQuestion(){
          counterQuestions -= 1;
          areaQuestion.innerHTML = myQuestions[counterQuestions].question;
          areaAnswer.innerHTML = ""; 
          let size = Object.keys(myQuestions[counterQuestions].answers).length;
          let entries = Object.entries(myQuestions[counterQuestions].answers)
          for (let i = 0; i < size; i++) {
              areaAnswer.innerHTML += "<div class='area-label'> <input type='radio' name='answer-quiz' value='"+entries[i][1]+"' class='input' id='answer"+i+"'> <label class='answer' for='answer"+i+"'> "+entries[i][1]+" </label> </div>  "; 
          }
          next.style.display = "block";
          if(counterQuestions === 0){
            previous.style.display = "none";
          }
      }