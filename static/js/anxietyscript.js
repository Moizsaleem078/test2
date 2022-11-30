const quizData = [
    {
        question: "How often have you been bothered by feeling nervous, anxious or on edge over the last two weeks? ",
        a: "Not At All",
        b: "sereval days",
        c: "more then half days",
        d: "nearly every day",
        correct: "d",
    },
    {
        question: "How often have you been bothered by not being able to stop or control worrying over the last two weeks?  ",
        a: "Not At All",
        b: "sereval days",
        c: "more then half days",
        d: "nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by worrying too much about different things over the last two weeks",
        a: "Not At All",
        b: "sereval days",
        c: "more then half days",
        d: "nearly every day",
        correct: "a",
    },
    {
        question: "How often have you been bothered by having trouble relaxing over the last two weeks?  ",
        a: "Not At All",
        b: "sereval days",
        c: "more then half days",
        d: "nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by being so restless that it is hard to sit still over the last two weeks ",
        a: "Not At All",
        b: "sereval days",
        c: "more then half days",
        d: "nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by becoming easily annoyed or irritable over the last two weeks? ",
        a: "Not At All",
        b: "sereval days",
        c: "more then half days",
        d: "nearly every day",
        correct: "b",
    },
    {
        question: "How often have you been bothered by feeling afraid as if something awful might happen over the last two weeks? ",
        a: "Not At All",
        b: "sereval days",
        c: "more then half days",
        d: "nearly every day",
        correct: "b",
    },


];
document.getElementById("loader").style.display = "none";
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const blog= document.getElementById('Url')
const url1 = blog.getAttribute('data-url')

console.log("sadasd"+url1);
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function loadPage()
{

     window.open="templates/test.html";

}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer);
    if(answer) {
       if(answer === 'a') {
           score=score+0;
           
       }
       if(answer === 'b') {
        score=score+1;
        
    }
    if(answer === 'c') {
        score=score+2;
        
    }
    if(answer === 'd') {
        score=score+3;
        
    }
       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else if(score>=0 && score <= 10) {
        
        document.getElementById("loader").style.display = "block"
        document.getElementById("quiz").style.display='none'
           setTimeout(function() {
            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color :red;">Your score is  ${score} out of ${quizData.length*4}</h1>
            <h3>Your score shows you have some mild signs of anxiety. Maybe you’re in the middle of a stressful time, and your mind is responding to this. Chances are your anxiety will improve as time goes on, but it might be worth keeping an eye on how the anxiety’s impacting on your life.</h3>
            <h3>Find out more about the <a href="${url1}">signs and sy</a></h3>
            <button onclick="location.reload()">Reload</button>
            `
        }, 800)
       
          
        
          
       }
       else if(score > 10 && score <= 18) {
        
        //   document.getElementById("result").style.display = "flex"
        document.getElementById("loader").style.display = "block"
        document.getElementById("quiz").style.display='none'
        setTimeout(function() {
            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color :red;">Your score is  ${score} out of ${quizData.length*4}</h1>
            <h3>Your score suggests that anxiety has started to get in the way of how you live your daily life. Don’t be alarmed, this is very common and there are things you can do to improve your situation. There are different levels of anxiety and yours can change from day to day. But it’s important to seek help early. The sooner you talk to someone, the sooner you’ll be on the road to recovery</h3>
            <h3>Find out more about the <a href="${url1}">signs and sy</a></h3>
            <button onclick="location.reload()">Reload</button>
            `
        }, 800);
           
        
          
       }
       else if(score > 18 && score <= 28) {
        
           document.getElementById("loader").style.display = "block"
           document.getElementById("quiz").style.display='none'
           setTimeout(function() {
            document.getElementById("loader").style.display = "none"
            document.getElementById("quiz").style.display='block'
            quiz.innerHTML = `
            <h1 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color :red;" >Your score is  ${score} out of ${quizData.length*4}</h1>
            <h3>Your score falls into the high range - anxiety has probably gotten in the way of you going to work, meeting friends, or doing the stuff that matters to you. This isn’t a diagnosis but it looks like it’s time to get help.</h3>
            <h3>Find out more about the <a href="${url1}">signs and sy</a></h3>
            <button onclick="location.reload()">Reload</button>
            `
        }, 800);
          
        
          
       }
    }
})