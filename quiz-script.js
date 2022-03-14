var quiz = {
    questions: [
      {
        text: "¿Con qué frecuencia sientes que tienes éxito persuadiendo? (*Solo somos conscientes del 5 - 15% de las señales de comunicación que estamos enviando en un momento dado). ",
        subText: "(*Solo somos conscientes del 5 - 15% de las señales de comunicación que estamos enviando en un momento dado).",
        responses: [
          { text: "Nunca", value: "B" },
          { text: "A veces", value: "B" },
          { text: "Siempre", value: "A" },
        ],
      },
      {
        text: "¿Crees que podrías mejorar tus habilidades de comunicación en entornos profesionales? (*El storytelling tiene más probabilidades de mover a las audiencias a la acción en entornos profesionales).",
        subText: "(*El storytelling tiene más probabilidades de mover a las audiencias a la acción en entornos profesionales).",
        responses: [
          { text: "Si", value: "B" },
          { text: "No", value: "A" },
          { text: "Tal vez", value: "B" },
        ],
      },
      {
        text: "¿Consideras que es difícil ser persuasivo? (*Algunas de las charlas TED más populares son 65 % narraciones de anécdotas personales, estudios de casos o historias de éxito de marca).",
        subText: "(*Algunas de las charlas TED más populares son 65 % narraciones de anécdotas personales, estudios de casos o historias de éxito de marca).",
        responses: [
          { text: "Sí", value: "B" },
          { text: "No", value: "A" },
          { text: "Tal vez", value: "B" },
        ],
      },
      {
        text: "¿Crees que si mejoras tus habilidades en comunicación digital podría impulsar tu carrera profesional? (* Un informe de Statista, sobre cualidades del trabajo remoto, muestra que el 16 % de las personas tuvieron dificultades con la comunicación y cooperación en 2021). ",
        subText: "(* Un informe de Statista, sobre cualidades del trabajo remoto, muestra que el 16 % de las personas tuvieron dificultades con la comunicación y cooperación en 2021).",
        responses: [
          { text: "Sí", value: "B" },
          { text: "No", value: "A" },
          { text: "Tal vez", value: "B" },
        ],
      },
      {
        text: "¿Qué tan importante es hablar en público en tu vida profesional? ",
        subText: "(*La audiencia promedio tiene una capacidad de atención de 5 minutos y solo tienes un margen de 15 segundos para causar una buena primera impresión).",
        responses: [
          { text: "Extremadamente importante", value: "B" },
          { text: "Relativamente importante", value: "B" },
          { text: "No importante", value: "A" },
        ],
      },
    ],
    resultA: {
      text: "¡Muy bien! Parece que tienes un buen manejo de tus habilidades de comunicación. Si sientes curiosidad por llevarlas al siguiente nivel, obtén más información sobre nuestro programa (*La audiencia promedio tiene una capacidad de atención de 5 minutos y solo tienes un margen de 15 segundos para causar una buena primera impresión).",
    },
    resultB: {
      text: "Según los resultados de tu encuesta, parece que tienes potencial para mejorar tus habilidades de comunicación. Si sientes curiosidad por llevarlas al siguiente nivel, obtén más información sobre nuestro programa",
    },
  },
  userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false,
  },
  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    },
  },
  methods: {
    /* 		 restart: function(){
  this.questionIndex=0;
  this.userResponses=Array(this.quiz.questions.length).fill(null);
  }, */
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
        this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var scoreA = 0;
      var scoreB = 0;
      var finalAnswer;
      /*          for (let i = 0; i < this.userResponses.length; i++) {
      if (
        typeof this.quiz.questions[i].responses[
            this.userResponses[i]
        ] !== "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct
      ) {
        score = score + 1;
      }
  }
  return score; */
      // if the response has value A increment scoreA by 1 and return true else if B increment scoreB by 1 and return false
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[
            this.userResponses[i]
          ] !== "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].value ==
            "A"
        ) {
          scoreA++;
        } else {
          scoreB++;
        }
      }
      if (scoreA > scoreB) {
        finalAnswer = true;
      } else {
        finalAnswer = false;
      }
      return finalAnswer;
      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
});