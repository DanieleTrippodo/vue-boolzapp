const { createApp } = Vue;

createApp({
    data() {
        return {
            activeContact: null, // Stato per il contatto attivo
            newMessage: '', // per inviare un nuovo messagio da parte dell'utente


            // Tutti i contatti e i loro dati
            contacts: [
                { 
                    id: 1, 
                    name: 'Rei', 
                    img: './img/reiayanami-3730754606.png', 
                    lastMessage: 'Nessun Messaggio Recente.', 
                    lastMessageTime: '12:30',
                    messages: [
                        { id: 1, text: 'Ciao Rei!', type: 'sent' },
                        { id: 2, text: 'Ciao Shinji!', type: 'received' }
                    ] 
                },
                { 
                    id: 2, 
                    name: 'Gendō Ikari', 
                    img: './img/Gendo_Ikari.jpg', 
                    lastMessage: "Sali sull'eva.", 
                    lastMessageTime: '04:00',
                    messages: [
                        { id: 1, text: 'Sali sull eva.', type: 'received' }
                    ] 
                },
                { 
                    id: 3, 
                    name: 'Misato', 
                    img: './img/misato.jpg', 
                    lastMessage: "Shinji! sali sull'eva", 
                    lastMessageTime: '11:23',
                    messages: [
                        { id: 1, text: 'Shinji! sali sull eva', type: 'received' },
                        { id: 2, text: 'Okay, Misato.', type: 'sent' }
                    ] 
                },
                { 
                    id: 4, 
                    name: 'Asuka', 
                    img: './img/asuka.jpg', 
                    lastMessage: '...', 
                    lastMessageTime: '20:10',
                    messages: [
                        { id: 1, text: '...', type: 'received' }
                    ] 
                }
            ]
        };
    },





//# Sezione Funzioni ---------------------------------------------------------------
    methods: {

        setActiveContact(contact) {
            this.activeContact = contact;
        },


        sendMessage() {
            if (this.newMessage.trim() !== '') {
                this.activeContact.messages.push({ id: Date.now(), text: this.newMessage, type: 'sent' });


                // Risposta dopo 1 secondo dell'altro utente
                setTimeout(() => {
                    this.activeContact.messages.push({ id: Date.now(), text: 'Ok', type: 'received' });
                }, 1000);

                

                this.newMessage = '';
            }
        }
    }


}).mount('#app');