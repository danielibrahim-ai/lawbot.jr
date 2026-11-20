const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatWindow = document.querySelector(".chat-window");
sendButton.addEventListener("click", sendMessage);
function sendMessage() {
    const question = userInput.value;

    if (question.trim() === "") {
        return;
    }

const userMessage = document.createElement("div");

userMessage.textContent = question;

userMessage.classList.add("user-message");

chatWindow.appendChild(userMessage);
userInput.value = "";

let answer = "";

if (question.toLowerCase().includes("locker")) {

    answer = "School officials may be allowed to search school lockers. The rules depend on your school's policies and applicable law.";

} else if (question.toLowerCase().includes("bring")) {

    answer = "Most schools allow ordinary school supplies and personal items that follow school rules. Items that create safety concerns may be prohibited. Check your school's student handbook.";

} else if (question.toLowerCase().includes("say")) {

    answer = "Students have freedom of speech, but schools can sometimes restrict speech that substantially disrupts learning or interferes with other students' rights.";
}
else {
    answer = "I'm still learning! For now, I can answer questions about locker searches, items allowed at school, and student freedom of speech.";
}
const botMessage = document.createElement("div");
botMessage.textContent = answer;

botMessage.classList.add("bot-message");

chatWindow.appendChild(botMessage);}