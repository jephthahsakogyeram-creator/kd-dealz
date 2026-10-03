// 1. SETUP DETAILS
const whatsappNumber = "233557030685"; 
const businessName = "KD Dealz";
const currency = "GH₵"; 

// Services that require a login from the customer
const servicesRequiringLogin = [
    "Apple Music",
    "Netflix Shared Login",
    "Netflix Personal Account",
    "Snapchat+",
    "iCloud Storage"
];

// 2. SELECT ALL BUTTONS
const buttons = document.querySelectorAll('.option-btn, .order-btn');

// 3. HANDLE CLICKS
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        const plan = this.getAttribute('data-plan');
        
        // Start the message
        let message = `Hello ${businessName}, I would like to order:\n\n`;
        message += `📦 Service: ${service}\n`;
        
        if (plan) {
            message += `⏳ Plan: ${plan}\n`;
        }
        
        message += `\nPlease let me know the price in ${currency}.`;
        
        // Add "send your login" instruction if the service requires it
        if (servicesRequiringLogin.includes(service)) {
            message += `\n\n🔑 I will also send my login details.`;
        }
        
        message += `\n\nThank you!`;
        
        // Encode and open WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    });
});
