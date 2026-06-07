function toggleChat() {
  const box = document.getElementById("chatbox");
  box.classList.toggle("active");
}

function sendMsg() {
  const input = document.getElementById("msg");
  const chatBody = document.getElementById("chatBody");

  const message = input.value.trim();
  if (message === "") return;

  // USER MESSAGE
  const userMsg = document.createElement("div");
  userMsg.classList.add("msg", "user");
  userMsg.innerText = message;
  chatBody.appendChild(userMsg);

  // BOT MESSAGE
  const botMsg = document.createElement("div");
  botMsg.classList.add("msg", "bot");

  setTimeout(() => {
    let reply = "Got it 👍 (This is demo reply)";
    const lowerMsg = message.toLowerCase();

    if (
      lowerMsg.includes("contact") ||
      lowerMsg.includes("email") ||
      lowerMsg.includes("reach") ||
      lowerMsg.includes("linkedin")
    ) {
      reply =
        "📧 Email: bodasheethal@gmail.com\n🔗 LinkedIn: linkedin.com/in/sheethal-b-9457b432a";
    }
    else if (lowerMsg.includes("skills")) {
      reply =
        "💻 Skills: HTML, CSS, JavaScript, React, Node.js, Python, Java, C, C++, Excel, Power BI";
    }
    else if (lowerMsg.includes("project")) {
      reply =
        "📂 Projects: Live Medicine Availability Finder & Portfolio Website";
    }
    else if (lowerMsg.includes("experience")) {
      reply =
        "📌 Experience: No formal industry experience yet, but built real-world projects.";
    }

    botMsg.innerText = reply;
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

// ENTER KEY SUPPORT
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("msg");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMsg();
    }
  });
});