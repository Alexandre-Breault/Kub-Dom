const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = process.env.token;
const prefix = ("?");
const ID = (`667821962659233845`);

bot.on("ready", () => {
    console.log("Ready");
    bot.user.setActivity("Type ?help");
    bot.user.setPresence({
        game: {
            name: 'Type ?help',
            url: 'https://www.twitch.tv/aoxis_',
            type: 1
        }
    });
})
//Message quand l'utilisateur leave le discord
bot.on('guildMemberRemove', member => {
    let serverTag = member.guild.name
    const welcomechannel = member.guild.channels.find('name', 'ⴆιҽɳʋҽɳυҽ1')
    var embed = new Discord.RichEmbed()
        .setColor('#76D880')
        .setDescription(`<@${member.user.id}> a quitté ${serverTag} !! `)
    return welcomechannel.send({
        embed
    })

});
//Message quand l'utilisateur join le discord
bot.on('guildMemberAdd', member => {
    let serverTag = member.guild.name
    const welcomechannel = member.guild.channels.find('name', 'ⴆιҽɳʋҽɳυҽ1')
    const role = member.guild.roles.find("name", "Joueur")
    member.addRole(role)
    var embed = new Discord.RichEmbed()
        .setColor('#76D880')
        .setDescription(`Bienvenue <@${member.user.id}> sur ${serverTag} :tada: :hugging: !`)
    return welcomechannel.send({
        embed
    })
});

bot.on('message', msg => {
    // Check if they have one of many roles
    if (msg.content === prefix + "kdb") {
        msg.channel.send(`:inbox_tray:Bonjour je suis le Bot officiel de ce serveur. Un <#500256356130095104> a été instauré afin que tout le monde puisse jouer dans les meilleures conditions, donc merci de les lire attentivement. Les membres du Staff sont des joueurs comme vous. J'ai ainsi été créé dans le but de les aider dans leurs tâches, qui est de surveiller votre comportement et d'aider les gentils petits joueurs que vous êtes. 
Si tous les joueurs sont assez sage, il se pourrait que la personne qui m'a développer ainsi que le site, rajoute quelque easter egg. 
Le meilleur agent pour un serveur de KALITE. Kub-Dom's Bot `);
    }
    //help pour les joueurs
    if (msg.content === prefix + "helpstaff") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande helpstaff vient d'être utilisé par " + user);
        let myRole = msg.guild.roles.find(role => role.name === "STAFF");
        var chm = bot.channels.find("name", "🚫šтαff🛠");
        chm.send(`${msg.author},demande de l'aide merci de l'aider ` + myRole);
    }
    //Help de kubdom
    if (msg.content === prefix + "info") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande info vient d'être utilisé par " + user);
        var aide_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:robot: Informations sur le serveur Kub-Dom`)
            .setDescription(`Voici mes commandes disponible :`)
            .setThumbnail(msg.author.avatarURL)
            .addField("?ip", "Ip du serveur disponible")
            .addField("?site", "lien du site OFFICIEL du serveur <3 ")
            .addField("?serveur", "Etat du serveur")
            .setFooter("Menu Info bot - By Creep_1")
            .setTimestamp()
        msg.channel.send(aide_embed);
    }
    if (msg.content === prefix + "help") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande help vient d'être utilisé par " + user);
        var aide_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:robot: Voici mes catégories d'aide !`)
            .setDescription(`Voici mes commandes disponible :`)
            .setThumbnail(msg.author.avatarURL)
            .addField(":writing_hand: Afficher les commandes de KUB-DOM en générale", "Fais `?info` pour plus d'informations!")
            .addField(":writing_hand: Afficher les commandes de KUB-DOM pour les joueurs", "Fais `?joueur` pour plus d'informations!")
            .addField(":writing_hand: Afficher les Informations de KUB-DOM sur les mods présents", "Fais `?helpmods` pour plus d'informations! ")
            .setFooter("Menu d'aide - By Creep_1")
            .setTimestamp()
        msg.channel.send(aide_embed);
    }
    //Help de kubdom
    if (msg.content === prefix + "joueur") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande joueur vient d'être utilisé par " + user);
        var aide_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:robot: Informations sur les commandes des joueurs`)
            .setDescription(`Voici mes commandes disponible :`)
            .setThumbnail(msg.author.avatarURL)
            .addField("?helpstaff", " Envoie une demande d'aide au staff \(utilisé que si vous avez besoin d'aide)")
            .addField("?down", " Envoie un message à Aoxis pour qu'il redémarre le serveur \(utilisé que si vous avez besoin d'aide)")
            .setFooter("Menu d'info pour les commandes utilisables pour les joueurs - By Creep_1")
            .setTimestamp()
        msg.channel.send(aide_embed);
    }
    if (msg.content === prefix + "staff") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande staff vient d'être utilisé par " + user);
        if (msg.member.roles.some(r => ["STAFF"].includes(r.name))) {
            var aide_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle(`:robot: Informations sur les commandes du staff`)
                .setDescription(`Voici mes commandes disponible :`)
                .setThumbnail(msg.author.avatarURL)
                .addField("?clear", "Commande pour clear le tchat permission OBLIGATOIRE MANAGE_MESSAGES ")
                .setFooter("Menu d'info pour les commandes utilisables pour le staff - By Creep_1")
                .setTimestamp()
            msg.channel.send(aide_embed);
        } else {
            var users = msg.author.toString();
            msg.channel.send(users + ",tu dois avoir le rôle STAFF pour cette commande");
            console.log(users + 'n\'a pas le rôle STAFF');
        }
    }
    if (msg.content === prefix + "helpmods") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande helpmods vient d'être utilisé par " + user);
        var aide_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:robot: Informations sur les commandes des joueurs`)
            .setDescription(`Voici mes commandes disponible :`)
            .setThumbnail(msg.author.avatarURL)
            .addField("?mods", "Commande permettant de voir les mods ayant une aide avec la commande ?nomdumods ")
            .addField("?nomdumods", "Commande permettant d'avoir une petite aide dans le début d'un mod ou son fonctionnement ")
            .setFooter("Menu d'info pour les commandes utilisables pour avoir de l'aide sur un ou plusieurs mod(s) - By Creep_1")
            .setTimestamp()
        msg.channel.send(aide_embed);
    }
    if (msg.content === prefix + "AE2") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande AE2 vient d'être utilisé par " + user);
        var aide_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:floppy_disk: Informations sur le mod Applied Energistic 2`)
            .setDescription(`Description du mod`)
            .setThumbnail(`https://media.forgecdn.net/avatars/19/498/635696278186178221.gif`)
            .addField("Ce qu'il fait ?", "Mod rajoutant énormément de stockage.")
            .addField("Comment utiliser ?", "Craft des ME Storage Cell et un ME Drive pour pouvoir stocker vos items.")
            .addField("Difficulté", "Nous allons rajouter un wiki sur notre site (n'oubliez pas la commande ?site pour avoir le lien du site) pour pouvoir vous aidez sur le mod qui est très technique.")
            .setFooter("Menu d'info pour le mod roost - By Creep_1")
            .setTimestamp()
        msg.channel.send(aide_embed);
    }
    if (msg.content === prefix + "roost") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande roost vient d'être utilisé par " + user);
        var aide_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:chicken: Informations sur le mod roost`)
            .setDescription(`Description du mod`)
            .setThumbnail(`https://i.imgur.com/aDVvTNm.png`)
            .addField("Ce qu'il fait ?", "Roost rajoute plusieurs types de poulets au jeu comme un poulet de diamant, de fer,d'ender pearl ...")
            .addField("Comment utiliser ?", "Utiliser les Chicken breeder ou Éleveur de poulet en français pour reproduire les poulets.")
            .addField("GOD POULET", "A chaque reproduction vous aurez 3 stats qui vont de 1 à 10 les meilleurs poulets sont ceux qui ont 10 dans les 3 stats.")
            .setFooter("Menu d'info pour le mod roost - By Creep_1")
            .setTimestamp()
        msg.channel.send(aide_embed);
    }
    if (msg.content === prefix + "site") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande site vient d'être utilisé par " + user);
        msg.channel.send("http://newnet.ovh/");
        msg.channel.send("Le site est fonctionnel mais fini qu'à 25%");
        console.log("Une personne a demandé pour aller sur ton site.")
    }
    if (msg.content === prefix + "ip") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande ip vient d'être utilisé par " + user);
        msg.channel.send("kubdom-serv.craft.gg");
    }
    if (msg.content === prefix + "serveur") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande serveur vient d'être utilisé par " + user);
        msg.channel.send(` Le serveur est "pas encore cassé". You can play the game !! :kissing_heart: `);
    }
    var d = new Date();
    var day = d.getDate();
    var Mo = d.getMonth() + 1;
    if (Mo < 10) {
        Mo = "0" + Mo
    }
    var y = d.getFullYear();
    var h = d.getHours() + 1;
    if (h < 10) {
        h = "0" + h
    }
    var m = d.getMinutes();
    if (m < 10) {
        m = "0" + m
    }
    var s = d.getSeconds();
    if (s < 10) {
        s = "0" + s
    }

    if (msg.content === prefix + "down") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande down vient d'être utilisé par " + user);
        bot.users.get("323721774527152128").send("Commande exécuter par " + user + ". Le " + day + "/" + Mo + "/" + y + " à " + h + ":" + m + ":" + s + " le serveur vient de crash pense à le redémarrer assez vite pour que les joueurs puissent se reconnecter assez vite !!");
        bot.users.get("254557222070124544").send("Commande exécuter par " + user + " Kiki doit redémarrer le serveur le " + day + "/" + Mo + "/" + y + " à " + h + ":" + m + ":" + s);
    }
    if (msg.content === prefix + "mods") {
        var user = msg.author.tag.slice(0, msg.author.tag.length - 5);
        msg.delete();
        var chanID = bot.channels.get(ID)
        chanID.send("La commande mods vient d'être utilisé par " + user);
        var user = msg.author.toString();
        msg.channel.send("```Liste des mods ayant une description ou fonctionnalité décrite (pour exemple faite ?roost affichera les info sur le mod):\n  -roost\n -Applied Energistic 2 (AE2)```");
    }
    if (msg.content === prefix + "clear") {
        if (msg.member.hasPermission("MANAGE_MESSAGES") && msg.member.roles.find("name", "bot-commander")) {
            msg.channel.fetchMessages();
            msg.channel.bulkDelete(100);
            console.log('clear réussit');
        } else {
            msg.channel.send("Pas de assez de permission pour executer la commande");
        }
        msg.channel.send('clear réussit');
    }
    
});

bot.login(cfg);