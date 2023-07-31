const quizdb = [
    {
    question : "Q1.The DBMS acts as an interface between what two components of an enterprise-class database system?",
    a: "Database application and the database",
    b: "Data and the database",
    c: "The user and the database application",
    d: "Database application and SQL",
    ans:"ans1"
},
{
    question : "Q2. An application where only one user accesses the database at a given time is an example of a(n)",
    a: " single-user database application",
    b: "multiuser database application",
    c: "e-commerce database application",
    d: "data mining database application",
    ans:"ans1"
},
{
    question : "Q3.You can add a row using SQL in a database with which of the following?",
    a: "ADD",
    b: "CREATE",
    c: "INSERT",
    d: "MAKE",
    ans:"ans3"
},
{
    question : "Q4.The command to remove rows from a table 'CUSTOMER' is:",
    a: "REMOVE FROM CUSTOMER ...",
    b: "DROP FROM CUSTOMER ...",
    c: " DELETE FROM CUSTOMER WHERE ..",
    d: "UPDATE FROM CUSTOMER ...",
    ans:"ans3"
},
{
    question : "Q5.The wildcard in a WHERE clause is useful when?",
    a: "An exact match is necessary in a SELECT statement.",
    b: "An exact match is not possible in a SELECT statement.",
    c: "An exact match is necessary in a CREATE statement.",
    d: " An exact match is not possible in a CREATE statement.",
    ans:"ans2"
},
{
    question : "Q6.The fact that the same operation may apply to two or more classes is called what?",
    a: "inheritance",
    b: "polymorphism",
    c: "encapsulation",
    d: "multiclass classification",
    ans:"ans2"
},
{
    question : "Q7.Multiplicity is the same as what concept for an ERD?",
    a: "Relationship",
    b: "attribute",
    c: "entity",
    d: "Cardinality",
    ans:"ans4"
},
{
    question : "Q8.Composition is a stronger form of which of the following?",
    a: "Aggregation",
    b: "Encapsulation",
    c: "Inheritance",
    d: "All",
    ans:"ans1"
},
{
    question : "Q9.An abstract class is which of the following?",
    a: "A class that has direct instances, but whose descendants may have direct instances.",
    b: "A class that has no direct instances, but whose descendants may have direct instances. ",
    c: "A class that has direct instances, but whose descendants may not have direct instances.",
    d: "A class that has no direct instances, but whose descendants may not have direct instances",
    ans:"ans2"
},
{
    question : "Q10.An object can have which of the following multiplicities?",
    a: "Zero",
    b: "One",
    c: "More than one",
    d: "All",
    ans:"ans4"
},
]

const question = document.querySelector(".Question");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score =0;
const loadquestion = () =>{

    const questionList = quizdb[questionCount];
    question.innerHTML= questionList.question;

    option1.innerHTML= questionList.a;
    option2.innerHTML= questionList.b;
    option3.innerHTML= questionList.c;
    option4.innerHTML= questionList.d;
}

loadquestion();

const getcheckanswer = () => {
    let answer;

    answers.forEach((currentAnswerElement) => {
        if(currentAnswerElement.checked){
            answer = currentAnswerElement.id;
        }
    });
    return answer;
};

    const diselectAll = () => {
        answers.forEach((currentAnswerElement) => currentAnswerElement.checked = false);
     }

submit.addEventListener('click',()=>{
    const checkedAnswer = getcheckanswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizdb[questionCount].ans){
        score++;
    }

    questionCount++;

    diselectAll();

    if(questionCount< quizdb.length){
        loadquestion();
    }
    else{
        showScore.innerHTML = `
        <h2 class = "score"> your score is ${score}/${quizdb.length}✌️ </h2>
        <button class = "btn" onclick="location.reload()"> Play Again </button>`;
        showScore.classList.remove('.scoreArea');
    }
});