 function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  chatbox.classList.toggle("active");
}
  


function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  const message = input.value.trim();
  if (message === "") return;

  // user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("msg", "user");
  userMsg.innerText = message;
  chatBody.appendChild(userMsg);

  // bot reply (simple demo)
  const botMsg = document.createElement("div");
  botMsg.classList.add("msg", "bot");

  setTimeout(() => {
    botMsg.innerText = "Got it 👍 (This is demo reply)";
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}
const input = document.getElementById("msg");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // prevents form-like behavior
    sendMsg(); // call your existing function
  }
});
document.getElementById("msg").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMsg();
  }
});