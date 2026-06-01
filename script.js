function toggleChat() {
  const box = document.getElementById("chatbox");
  box.classList.toggle("active");
}
function sendMsg() {
  const input = document.getElementById("msg");
  const chatBody = document.getElementById("chatBody");

  const message = input.value.trim();
  if (message === "") return;

  // user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("msg", "user");
  userMsg.innerText = message;
  chatBody.appendChild(userMsg);

  // bot reply
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

// ENTER KEY SUPPORT (ONLY ONCE)
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("msg");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMsg();
    }
  });
});