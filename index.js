let equation = "";

const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "+", "-", "*", "/", "(", ")"];
const actions = ["A/C", "backspace", "="]

concat0 = () => {
    equation += characters[0];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat1 = () => {
    equation += characters[1];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat2 = () => {
    equation += characters[2];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat3 = () => {
    equation += characters[3];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat4 = () => {
    equation += characters[4];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat5 = () => {
    equation += characters[5];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat6 = () => {
    equation += characters[6];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat7 = () => {
    equation += characters[7];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat8 = () => {
    equation += characters[8];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concat9 = () => {
    equation += characters[9];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concatDec = () => {
    equation += characters[10];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concatPlus = () => {
    equation += characters[11];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concatMinus = () => {
    equation += characters[12];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concatTimes = () => {
    equation += characters[13];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concatDivide = () => {
    equation += characters[14];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concatLeftP = () => {
    equation += characters[15];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

concatRightP = () => {
    equation += characters[16];
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

nothing = () => {
    equation = "";
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

backSpace = () => {
    let equationtoArr = equation.split("");
    equationtoArr.pop();
    equation = equationtoArr.join("");
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

resultEqu = () => {
    let simplifiedEqu = eval(equation);
    equation = simplifiedEqu;
    document.getElementById("output").innerHTML = equation;
    console.log(equation);
};

console.log(characters.length);
console.log(equation);