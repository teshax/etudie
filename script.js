gen = {
  
  "present": [
    //# je, tu, il, nous, vous, ils
    "e,es,e,ons,ez,ent".split(","),
    "is,is,it,issons,issez,issent".split(","),
    "s,s,,ons,ez,ent".split(",")
  ],
  
  "pc": [
    //# avoir conjugation: j'ai, tu as, il a, nous avons, vous avez, ils ont
    //# er verbs
    "é,é,é,é,é,é".split(","),
    //# ir verbs
    "i,i,i,i,i,i".split(","),
    //# re verbs
    "u,u,u,u,u,u".split(",")
  ],
  
  "imparfait": [
    //# je, tu, il, nous, vous, ils
    //# er verbs
    "ais,ais,ait,ions,iez,aient".split(","),
    //# ir verbs
    "ais,ais,ait,ions,iez,aient".split(","),
    //# re verbs
    "ais,ais,ait,ions,iez,aient".split(",")
  ],
  
  "cond": [
    //# je, tu, il, nous, vous, ils
    //# er verbs
    "ais,ais,ait,ions,iez,aient".split(","),
    //# ir verbs
    "ais,ais,ait,ions,iez,aient".split(","),
    //# re verbs
    "ais,ais,ait,ions,iez,aient".split(",")
  ]
}

props = ["je","tu","il","nous","vous","ils"];

tense = document.getElementById("tense");
ty = document.getElementById("type");
questions = document.getElementById("questions");
grade = document.getElementById("grade");

function resetQuestions() {
  questions.innerHTML = "";
}

function serveGen(tense) {
  
  resetQuestions();
  
  var stuffs = gen[tense];
  
  temp = "<div class=\"qes\">je <input type=\"text\" class=\"bit\" data-cor=\"?\"></input><br><div></div></div>";
  
  final = "Generalized - " + tense + " (Remember: you can have nothing as an answer)";
  
  er = stuffs[0];
  ir = stuffs[1];
  re = stuffs[2];
  
  // er
  
  final += "<h2>ER</h2><br>"
  
  x = -1;
  er.forEach((item) => { x += 1; final += temp.replace("je", props[x]).replace("?", item); })
  
  // ir
  
  final += "<h2>IR</h2><br>"
  
  x = -1;
  ir.forEach((item) => { x += 1; final += temp.replace("je", props[x]).replace("?", item); })
  
  // re
  
  final += "<h2>RE</h2><br>"
  
  x = -1;
  re.forEach((item) => { x += 1; final += temp.replace("je", props[x]).replace("?", item); })
  
  questions.innerHTML = final;
}


document.getElementById("start").addEventListener("click", () => {
  
  if (ty.value == "generalized") {
    serveGen(tense.value);
  }
  
});

document.getElementById("Submit").addEventListener("click", () => {
  
  ques = document.getElementsByClassName("qes");
  
  outof = ques.length;
  
  curr = 0;
  
  message = "IDIOT!";
  
  [].forEach.call(ques, function (i) {
    item = i.children[0];
    b = i.children[2];
    
    b.innerHTML = "<div>Correct Ans: " + item.dataset.cor + "</div><br>";
    
    if (item.value == item.dataset.cor) {
      curr += 1;
    }
  });
  
  percentage = curr / outof;
  
  if (percentage <= 0.10) { message = "LEGALLY STUPID"; }
  if (percentage <= 0.50) { message = "FAILURE"; }
  else if (percentage <= 0.70) { message = "Not bad"; }
  else if (percentage <= 0.90) { message = "NICE"; }
  else if (percentage >= 0.95) { message = "THE CHOSEN ONE"; }
  
  grade.innerHTML = "You got " + percentage.toFixed(2).toString() + "% (" + message + ")";

});
