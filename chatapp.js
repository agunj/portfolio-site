import { HfInference } from "@huggingface/inference";

// Replace with your HuggingFace token
const client = new HfInference("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");

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", async () => {
    const userMessage = userInput.value;
    if (!userMessage) return;

    // Add user message to chat
    chatBox.innerHTML += `<div class="message user">${userMessage}</div>`;
    userInput.value = "";

    // Call HuggingFace API
    try {
        const chatCompletion = await client.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
                {
                    role: "user",
                    content: userMessage,
                },
            ],
            max_tokens: 500,
        });

        const botMessage = chatCompletion.choices[0].message.content;
        chatBox.innerHTML += `<div class="message bot">${botMessage}</div>`;
    } catch (error) {
        console.error("Error fetching from HuggingFace:", error);
        chatBox.innerHTML += `<div class="message bot">Error: Could not fetch a response.</div>`;
    }
});
