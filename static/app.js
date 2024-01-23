class Chatbox{
    // 1. constructor -- a function that runs when the class is instantiated
    constructor() {
        // 1.1. get elements with reference to the HTML Elements.
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatbox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
        }
        // 1.2. set initial state to false and messages to empty array
        this.state = false;
        this.messages = [];

    }
    //2. startChat -- a function that starts and displays an introduction message and the updates the chatbox with the message.
    startChat() {
        let introductionMessage = "Hi, I'm Nova. I can assist you with the following:";
        // 2.0. create a message object with the name and message as properties.
        let msg = { name: "Nova", message: introductionMessage };
        // 2.1. add the message to the messages array
        this.messages.push(msg);
        // 2.2. update the chatbox with the message
        this.updateChatText(this.args.chatbox);
    }

    // 3. display -- a function that displays the chatbox and handles the click events on the open and send buttons.
    display() {
        // 3.1. add event listeners to the open and send buttons
        const {openButton, chatbox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatbox))
        sendButton.addEventListener('click', () => this.onSendButton(chatbox))

        // 3.2. add event listener to the input field to handle the enter key press
        const node =chatbox.querySelector('input');
        node.addEventListener("keyup",({key}) => {
            if(key === "Enter"){
                this.onSendButton(chatbox)
            }
        })
        
    }

    // 4. toggleState -- a function that toggles the state of the chatbox and adds or removes the active class.
    toggleState(chatbox) {
        // 4.1. toggle the state
        this.state = !this.state;
        // 4.2. add or remove the active class based on the state
        if(this.state){
            chatbox.classList.add('chatbox--active');
        } else{
            chatbox.classList.remove('chatbox--active');
        }
        
    }

    // 5. onSendButton -- a function that handles the click event on the send button.
    onSendButton(chatbox) {
        // 5.1. get the input field and the text value
        var textField = chatbox.querySelector('input');
        let text1 = textField.value;
        // 5.2. if the text is empty, return
        if (text1 === "") {
            return;
        }
        // 5.3. create a message object with the name and message as properties.
        let msg1 = {name: "user", message: text1}
        this.messages.push(msg1);

        // 'http://127.0.0.1:5000/predict'
        // 5.4. send the message to the server using fetch
        fetch($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message: text1}),
            mode: 'cors',
            })
            // 5.5. get the response from the server and update the chatbox with the response
            .then(r => r.json())
            .then(r => {
                let msg2 = {name: "Nova", message: r.answer}
                this.messages.push(msg2);
                this.updateChatText(chatbox);
                textField.value = '';
            // 5.6. catch any errors and update the chatbox with the error message
            }).catch((error) => {
                console.error('Error:', error);
                this.updateChatText(chatbox);
                textField.value = '';
            });
    }
    // 6. updateChatText -- a function that updates the chatbox with the messages in the messages array.
    updateChatText(chatbox) {
        // 6.1. create an empty string
        var html = '';
        // 6.2. loop through the messages array and update the string with the messages
        this.messages.slice().reverse().forEach(function(item, index) {
        // 6.3. if the message is from the user, add the message to the string with the user class
        if (item.name === "Nova"){
            html += '<div class="messages__item messages__item--visitors">' + item.message + '</div>';
        }
        else{
            html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
        }
        });
        // 6.4. update the chatbox with the string
        const chatmessages = chatbox.querySelector('.chatbox__messages');
        chatmessages.innerHTML = html; 
    }
}

const chatbox = new Chatbox();
chatbox.display();
chatbox.startChat();