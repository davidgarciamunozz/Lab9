
document.addEventListener("DOMContentLoaded", function() {
    const messagesContainer = document.getElementById('messages');
    const blueInput = document.getElementById('blue-input');
    const redInput = document.getElementById('red-input');
    const sendButtons = document.querySelectorAll('.send-button'); // Selecciona ambos botones

    sendButtons.forEach(function(sendButton) { // Itera sobre cada botón
        sendButton.addEventListener('click', function() {
            const blueMessageText = blueInput.value.trim();
            const redMessageText = redInput.value.trim();

            if (blueMessageText !== '' || redMessageText !== '') {
                if (blueMessageText !== '') {
                    const blueMessageElement = createMessageElement(blueMessageText, 'sender-blue');
                    messagesContainer.appendChild(blueMessageElement);
                    blueInput.value = '';
                }

                if (redMessageText !== '') {
                    const redMessageElement = createMessageElement(redMessageText, 'sender-red');
                    messagesContainer.appendChild(redMessageElement);
                    redInput.value = '';
                }
            }
        });
    });

    function createMessageElement(text, senderClass) {
        const messageElement = document.createElement('div');
        messageElement.textContent = text;
        messageElement.classList.add('message');
        messageElement.classList.add(senderClass);
        return messageElement;
    }
});