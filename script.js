// 1. SETUP YOUR DETAILS HERE
const whatsappNumber = "233557030685"; // Replace with your friend's number. No '+' or spaces.
const businessName = "KD Dealz";
const currency = "GH₵"; // <--- ADDED: Ghanaian Cedi

// 2. SELECT ALL BUTTONS
const buttons = document.querySelectorAll('.option-btn, .order-btn');

// 3. ADD CLICK EVENT TO EVERY BUTTON
buttons.forEach(button => {
    button.addEventListener('click', function() {
        
        // Get the data from the HTML attributes
        const service = this.getAttribute('data-service');
        const plan = this.getAttribute('data-plan');
        
        // 4. BUILD THE WHATSAPP MESSAGE
        let message = `Hello ${businessName}, I would like to order:\n\n`;
        message += `📦 Service: ${service}\n`;
        
        if (plan) {
            message += `⏳ Plan: ${plan}\n`;
        }
        
        // ADDED: Asking for the price in Cedis
        message += `\nPlease let me know the price in ${currency} and how to proceed. Thank you!`;
        
        // 5. ENCODE THE MESSAGE FOR URL
        const encodedMessage = encodeURIComponent(message);
        
        // 6. OPEN WHATSAPP
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    });
});