//═══════════════════════════════════════════════════════//
//
//                               ❀⃝⃖🍏⃪⃪ₛͥₑͣᵪᷟʏ̸ мǟℓιуǟ ✓
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94703139198']
global.premium = ['94703139198']
global.ownernomer = '94703139198'
global.ownername = '❀⃝⃖🍏⃪⃪ₛͥₑͣᵪᷟʏ̸ мǟℓιуǟ ✓'
global.botname = '❀⃝⃖🍏⃪⃪ₛͥₑͣᵪᷟʏ̸ мǟℓιуǟ ✓_𝙱𝙾𝚃'
global.footer = 'мǟℓιуǟ.'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://chat.whatsapp.com/EzGRSOmc1EQGATxsD46yRE'
global.myweb = 'https://youtube.com/shorts/GjFzMlZflW4?feature=share'
global.packname = 'мǟℓιуǟ'
global.author = 'мǟℓιуǟ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'ඇඩ්මින්ලට විතරයි මේක පුලුවන් ළමයෝ 🧸🍭',
    botAdmin: 'ඇඩ්මින් දියන්කෝ මුලින් 😴🍭',
    owner: 'Owner ට විතරයි ළමයෝ ඕක පුලුවන් 🧸🍭 ',
    group: 'group වල විතරයි ඕක ॐ🧸🍭',
    private: 'inbox විතරයි පුලුවන්🧸🍭',
    bot: 'මේක මට විතරයි පුලුවන්🧸🍭',
    wait: 'ටිකක් ඉන්න 🙃🍭',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/Sihilel.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
