// Mobile Hamburger Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Chatbot Flotante Toggle Function
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
        chatWindow.classList.toggle('hidden');
    }
}

// Quick Option Handlers in Chat
function handleOption(optionNumber) {
    const chatMessages = document.getElementById('chat-messages');
    let userText = "";
    let botReply = "";

    switch(optionNumber) {
        case 1:
            userText = "🛡️ Control de EPP";
            botReply = "Te recomendamos nuestro módulo de **Escaneo Automatizado de EPP**, capaz de verificar mascarillas N95, pecheras y antiparras con 98.4% de exactitud.";
            break;
        case 2:
            userText = "🏥 Integración Hospitalaria";
            botReply = "SafeVisit AI se conecta con sistemas HL7/FHIR y torniquetes electromagnéticos para liberar puertas automáticamente.";
            break;
        case 3:
            userText = "💻 Demo en Vivo";
            botReply = "Puedes probar nuestro modelo de IA directamente en la sección 'Nuestra IA' en esta misma página.";
            break;
        case 4:
            userText = "📞 Cotizar / Contacto";
            botReply = "Para coordinar una reunión comercial, escríbenos a **contacto@safevisit.ai** o haz clic en 'Probar Demo IA'.";
            break;
    }

    appendUserMessage(userText);
    setTimeout(() => appendBotMessage(botReply), 400);
}

// Random Surprise Button Handler
function handleSurprise() {
    const surprises = [
        "🎁 **¡Cupón Especial!** Usa el código `SAFEVISIT2026` para un 15% de descuento en tu implementación piloto.",
        "💡 **¿Sabías que...?** El 68% de las infecciones intrahospitalarias en aislamientos son causadas por errores involuntarios al colocarse el EPP.",
        "🚀 **Prueba nuestra IA:** Haz scroll a la sección 'Nuestra IA' para encender tu cámara y clasificar elementos en vivo."
    ];

    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    appendUserMessage("✨ ¡Sorpresa!");
    setTimeout(() => appendBotMessage(randomSurprise), 400);
}

// Custom Input Text Processing
function sendCustomMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();

    if (text !== "") {
        appendUserMessage(text);
        input.value = "";
        setTimeout(() => {
            appendBotMessage("No entendí, ¿puedes elegir una opción?");
        }, 500);
    }
}

function appendUserMessage(msg) {
    const chatMessages = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = "bg-cyan-950 border border-cyan-500/30 rounded-2xl p-3 text-cyan-200 ml-6 text-right";
    div.innerText = msg;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendBotMessage(msg) {
    const chatMessages = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = "bg-slate-900 border border-slate-800 rounded-2xl p-3 text-slate-200 space-y-1";
    div.innerHTML = msg;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Modal Handlers
function openDemoModal() {
    document.getElementById('demo-modal').classList.remove('hidden');
}

function closeDemoModal() {
    document.getElementById('demo-modal').classList.add('hidden');
}

function submitModal(e) {
    e.preventDefault();
    alert("¡Gracias por tu solicitud! Nos pondremos en contacto contigo a la brevedad.");
    closeDemoModal();
}
