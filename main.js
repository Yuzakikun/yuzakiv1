const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const helga = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

//nocache
nocache('./Kuriyama.js', module => console.log(color('[UPDATE]'), color(`${module} Updated!`, 'red')))


const starts = async (helga = new WAConnection()) => {
	helga.logger.level = 'warn'
	helga.version = [2, 2140, 12]
	console.log(color(`\x1b[1;37m> Kuriyama Mirai\n`,'cyan'))
	console.log(color(figlet.textSync('KuriyamaBotZ', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> YouTube : ','silver'), color(`KuriyamaChan`,'mediumseagreen'))
console.log(color('> WaMe : ','silver'), color(`0895638102488`,'mediumseagreen'))
	helga.browserDescription = [ 'KuriyamaBotZ', 'ubuntu', '3.0' ]

	helga.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan Banh! Waktu Cuma 20dtk!'))
})
	helga.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(helga.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Menyambung...')
	})
	fs.existsSync('./session.json') && helga.loadAuthInfo('./session.json')
	helga.on('connecting', () => {
		start('2', 'Menyambung...')
	})
	helga.on('open', () => {
		success('2', 'Terhubung')
	})
    
	// session
	await helga.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./session.json`, JSON.stringify(helga.base64EncodedAuthInfo(), null, '\t'))
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   helga.on('chat-update', async (mek) => {
        require('./Kuriyama.js')(helga, mek)
        ownerNumber = ["6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net","6281991582353@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6281991582353@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
    
    //SERAH LU MAU GANTI KYK MANA
        helga.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await helga.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Yuzaki;;;\nFN:helga\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await helga.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Halo Kak@${num.split('@')[0]}\nSelamat Datang Di Group ${mdata.subject}\nIntro Dulu Ya Kak\n\n┌━𒆜 𝙄𝙉𝙏𝙍𝙊 𝙂𝙍𝙊𝙐𝙋\n┃࿋𝙉𝙖𝙢𝙖 :\n│࿋𝙐𝙢𝙪𝙧 :\n┃࿋𝙂𝙚𝙣𝙙𝙚𝙧 :\n│࿋𝘼𝙨𝙠𝙤𝙩 :\n┃࿋𝙎𝙩𝙖𝙩𝙪𝙨 :\n└─────⋉\n\n\`\`\`Ketik .menu untuk melihat menu bot^_^\`\`\``
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Selamat Datang'},type:1}]
			mhan = await helga.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 ༯𝑲𝒖𝒓𝒊𝒚𝒂𝒎𝒂𝑩𝒐𝒕𝒁༯︎`, 
buttons: gbutsan,
headerType: 4 }
			helga.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./image/helga.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Yuzaki;;;\nFN:helga\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await helga.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Selamat tinggal @${num.split('@')[0]}\nBeban satu out kalian kapan?`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Byee'},type:1}]
			mhan = await helga.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 ༯𝑲𝒖𝒓𝒊𝒚𝒂𝒎𝒂𝑩𝒐𝒕𝒁༯`,
buttons: gbutsan,
headerType: 4 }
			helga.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./image/helga.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Yuzaki;;;\nFN:helga\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
var thu = await helga.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*卩尺ㄖ爪ㄖㄒ乇 - ᗪ乇ㄒ乇匚ㄒ乇ᗪ*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
helga.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Yuzaki;;;\nFN:helga\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
thu = await helga.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*ᗪ乇爪ㄖㄒ乇 - ᗪ乇ㄒ乇匚ㄒ乇ᗪ*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
helga.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       

	helga.on('group-update', async (anu) => {
		const metdata = await helga.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;helga;;;\nFN:helga\nitem1.TEL;waid=6282138919347:6282138919347\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    helga.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    helga.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    helga.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    helga.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    helga.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

helga.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        helga.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        helga.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./image/helga.jpg'),sourceUrl:`https://wa.me/62895638102488?text=Assalamualaikum`}}})
        await sleep(5000)
        await helga.blockUser(callerId, "add")
        })
        
	helga.on('message-delete', async (m) => {
if (!m.key.fromMe && !antidelete) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = helga.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = helga.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
helga.copyNForward(m.key.remoteJid, m.message)
helga.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
