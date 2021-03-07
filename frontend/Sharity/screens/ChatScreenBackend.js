import firebase from 'firebase';

class Backend {
    uid = '';
    messagesRef = null;

    //initialize Firebase Backend
    constructor() {
        firebase.initializeApp({
            apiKey: "AIzaSyBtdQKTgFD1zVBtqEpLBIutRSltlJcuUnM",
            authDomain: "sharity-eeda7.firebaseapp.com",
            projectId: "sharity-eeda7",
            storageBucket: "sharity-eeda7.appspot.com",
            messagingSenderId: "616864602761",
            appId: "1:616864602761:web:5efc629658f35352cfc458"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setUid(user.uid);
            } else {
                firebase.auth().signInAnonymously().catch((error) => {
                    alert(error.message);
                });
            }
        });
    }

    setUid(value){
        this.uid = value;
    }

    getUid() {
        return this.uid;
    }

    //retrieve messages from the backend
    loadMessages(callback) {
        this.MessagesRef = firebase.database().ref('messages');
        this.messagesRef.off();

        const OnReceive = (data) => {
            const message = data.val();
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user: {
                    _id: message.user._id,
                    name: message.user.name,
                },
            });
        };
        this.messagesRef.limitToLast(20).on('child_added', onReceive);
    }

    //send message to the backend
    sendMessage(message) {
        for(let i = 0; i < message.length; i++) {
            this.messagesRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
            });
        }
    }

    //close the connection to the backend
    closeChat() {
        if(this.messagesRef) {
            this.messagesRef.off();
        }
    }
}

export default new Backend();