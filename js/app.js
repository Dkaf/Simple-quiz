$(document).ready(function(){
  var Quiz = {
    questions: [
      {
      text: "Which band wrote 'Stairway to Heaven'?",
      correctAnswer: 'Led Zeppelin',
      choices: [
        'The Who',
        'Pink Floyd',
        'Led Zeppelin',
        'Van Halen'
      ]
    },
    {
      text: 'Who was not a member of The Beatles?',
      correctAnswer: 'Jimmy Page',
      choices: [
        'Ringo Starr',
        'Paul McCartney',
        'George Harrison',
        'Jimmy Page'
      ]
    },
    {
      text: "Which guitarist preformed 'The Star Spangled Banner' at Woodstock?",
      correctAnswer: 'Jimi Hendrix',
      choices: [
        'Eddie Van Halen',
        'Jimi Hendrix',
        'Pete Townshend',
        'David Gilmour'
      ]
    },
    {
      text: 'The Beastie Boys originally started off as which genre?',
      correctAnswer: 'Hardcore Punk',
      choices: [
        'Hardcore Punk',
        'R&B',
        'Hip Hop',
        'Metal'
      ]
    },
    {
      text: 'Which one of these is a Pink Floyd album?',
      correctAnswer: 'Dark Side of the Moon',
      choices: [
        '1984',
        'Dark Side of the Moon',
        'Abbey Road',
        "Who's Next"
      ]
    }
  ],
  currentScore: 0,
  numberIncorrect: 0,
  currentQuestion: 0,
  displayQuestion: function() {
    var question = this.questions[this.currentQuestion];
    $('.question').html(question.text);
    for (i=0; i < question.choices.length; i++) {
      var choice = $('<input>', {type:'button', value: question.choices[i], class:'guess'});
      $('.user-guess').append(choice);
    }
  },
  checkAnswer: $('.user-guess').on('click', '.guess', function() {
    if (this.value == Quiz.questions[Quiz.currentQuestion].correctAnswer) {
      Quiz.currentScore += 1;
      $('.correct').html(Quiz.currentScore);
    }
    else {
      Quiz.numberIncorrect += 1;
      $('.incorrect').html(Quiz.numberIncorrect);
    }
    $('.guess').remove();
    Quiz.currentQuestion += 1;
    $('.question_number').html(Quiz.currentQuestion + 1);
    Quiz.displayQuestion();
  }),

  }
  Quiz.displayQuestion();
})
