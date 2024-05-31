const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                { id: 1, name: 'Rei', img: './img/reiayanami-3730754606.png', lastMessage: 'Nessun Messaggio Recente.', lastMessageTime: '12:30' },
                { id: 2, name: 'Gendō Ikari', img: './img/Gendo_Ikari.jpg', lastMessage: "Sali sull'eva.", lastMessageTime: '04:00' },
                { id: 3, name: 'Misato', img: './img/misato.jpg', lastMessage: "Shinji! sali sull'eva", lastMessageTime: '11:23' },
                { id: 4, name: 'Asuka', img: './img/asuka.jpg', lastMessage: '...', lastMessageTime: '20:10' }
            ],
            messages: [
                { id: 1, text: 'Ciao, Shinji', type: 'received' },
                { id: 2, text: 'Ciao!', type: 'sent' },
                { id: 3, text: 'Sei salito sull eva?', type: 'received' }
            ]
        };
    }
}).mount('#app');
