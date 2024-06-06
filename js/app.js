const question = [
    {
        "qun": "What is the correct syntax to output 'Hello World' in JavaScript?",
        "a": `System.out.println("Hello World")`,
        "b": `echo "Hello World";`,
        "c": `print("Hello World");`,
        "d": `console.log("Hello World");`,
        "correct": `d`
    },
    {
        "qun": "Which company developed JavaScript?",
        "a": `Microsoft`,
        "b": `Netscape`,
        "c": `Google`,
        "d": `Apple`,
        "correct": `b`
    },
    {
        "qun": "How can you add a comment in JavaScript?",
        "a": `<!-- This is a comment -->`,
        "b": `// This is a comment`,
        "c": `# This is a comment`,
        "d": `** This is a comment **`,
        "correct": `b`
    }
]

let index = 0;
let total = question.length;
let correct = 0, wrong = 0;
const qunBox = document.getElementById("qunBox");
const optionInputs = document.querySelectorAll(".option");


const loadQuestion = () => {

    if (index === total) {
        return end();

    }
    reset()
    const data = question[index];
    qunBox.innerText = `${index + 1} ${data.qun}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    startSecondCounter(10);
}

const startSecondCounter = (seconds) => {
    let counter = seconds;
    const timerElement = document.getElementById("timer");
    timerElement.innerText = ` ${counter}`;
    const counterInterval = setInterval(() => {
        counter--;
        if (counter >= 0) {
            timerElement.innerText = ` ${counter}`;
        }
        if (counter < 0) {
            clearInterval(counterInterval);
            index++;
            loadQuestion();
        }
    }, 1000);
};

const submitQun = () => {
    const data = question[index];
    const ans = getAns()
    if (ans === data.correct) {
        console.log("correct")
        correct++;
    }
    else {
        console.log("wrong")
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

const prevQun = ()=>{
    index--;
    loadQuestion()
    return;
}

const nextQun = () => {
    index++;
    loadQuestion()
    return;
}

const getAns = () => {

    let answer;

    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                // return input.value;
                answer = input.value;
            }
            else {
                console.log("no")
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const end = () => {
    document.getElementById("box").innerHTML = `
    <h3>Thank You</h3>
    <h3>Your Score ${correct}/${total}</h3>
    `
}

loadQuestion()