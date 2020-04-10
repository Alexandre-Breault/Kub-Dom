const prefix = ("?");
const Discord = require('discord.js');

module.exports = (bot, msg) =>{
    function played(play) {
        if(play !=0){
            play = 1;
        }
        return play;
    }
    var IsOk = played(0);
    function carte() {
        var cartes = [
            "http://newnet.ovh/bot/1red.png",
            "http://newnet.ovh/bot/2red.png",
            "http://newnet.ovh/bot/3red.png",
            "http://newnet.ovh/bot/4red.png",
            "http://newnet.ovh/bot/5red.png",
            "http://newnet.ovh/bot/6red.png",
            "http://newnet.ovh/bot/7red.png",
            "http://newnet.ovh/bot/8red.png",
            "http://newnet.ovh/bot/9red.png"
            ];
        var gif = cartes[Math.floor(Math.random() * cartes.length)]; 
        return gif;
    }
    if (msg.content === prefix + "uno") {
        msg.delete();
        var selected_carte = carte();
        var cartes_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Voici la premiere carte')
        .setImage(selected_carte)
        .setFooter('Uno réalisé par Creep_1')
        msg.channel.send(cartes_embed);
        msg.channel.send("Joueur n°1 a toi de commencer");
    }
    IsOk = played(2);
    if(msg.content === prefix + "carte"){
        msg.delete();
        var message = "";
        console.log(prefix+"carte : "+ IsOk);
        if (IsOk != 0 ) {
            var selected_carte=carte();
            var cartes_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Voici la carte tirée')
            .setImage(selected_carte)
            .setFooter('Uno réalisé par Creep_1')
            message = cartes_embed;
        }
        else{
            message="Problème lors du tirage de la carte";
        }
        msg.channel.send(message);
    }
};