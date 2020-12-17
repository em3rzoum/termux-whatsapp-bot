const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const imageToBase64 = require('image-to-base64');
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");


//
const BotName = 'NIKE O SUPREMO'; // Nome do Whatsapp Bot
const instagramlu = 'https://www.instagram.com/em3rzoum/'; // Nome do Instagram
const whatsapplu = '+55 42 99276766'; // Número do Whatsapp
const kapanbotaktif = '24 Hora'; // Quando seu bot estava ativo
const grupch1 = 'OFF'; // GRUP RESMI LU 1
const grupch2 = 'OFF'; // OFFICIAL GRUP LU 2
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}

const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Digitalize o código QR certo! `);
});

conn.on('credentials-updated', () =>
{
   // salvar credenciais sempre que atualizado
   console.log(`credentials updated!`)
   const authInfo = conn.base64EncodedAuthInfo() // obter todas as informações de autenticação de que precisamos para restaurar esta sessão
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // salve esta informação em um arquivo
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by Root@em3rzoum`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by Root@em3rzoum`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);


// Groups
if(text.includes('#add')){
    const response = await conn.groupAdd ("abc-xyz@g.us", ["abcd@s.whatsapp.net", "efgh@s.whatsapp.net"]) 
};

if (text.includes("#grupo"))
   {
var nama = text.split("#grupo")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join(""); 
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FF
if(text.includes("#verifica")){
var num = text.replace(/#verifica/ , "")
var br = num.replace("0","+55");

console.log(id);
const gg = br+'@c.us'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " Confirmado existe " : " Não existe "} on WhatsApp`, MessageType.text)
}

if (text.includes("#dizer")){
  const teks = text.replace(/#dizer /, "")
conn.sendMessage(id, teks, MessageType.text)
}



if (text.includes("$wiki")){
const teks = text.replace(/$wiki /, "")
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ] Sedang di prosesâ³ silahkan tunggu sebentar', MessageType.text)
    let hasil = `ðŸ“Menurut Wikipedia:\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("#fb")){
const teks = text.replace(/#fb /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya, takut servernya down xixi..\n\nJudul: ${res.data.title}\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("#ig")){
const teks = text.replace(/#ig /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/ig?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya, takut servernya down xixi..\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("#twt")){
const teks = text.replace(/#twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya, takut servernya down xixi..\n\nJudul: ${res.data.title}\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}




if (text == '#help'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/br').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Domigo"; break;
 case 1: hari = "Segunda-feira"; break;
 case 2: hari = "terça"; break;
 case 3: hari = "Quarta feira"; break;
 case 4: hari = "Quinta feira"; break;
 case 5: hari = "Sexta-feira"; break;
 case 6: hari = "sábado"; break;
}
switch(bulan) {
 case 0: bulan = "janeiro"; break;
 case 1: bulan = "fevereiro"; break;
 case 2: bulan = "Março"; break;
 case 3: bulan = "abril"; break;
 case 4: bulan = "Maio"; break;
 case 5: bulan = "Junho"; break;
 case 6: bulan = "Julho"; break;
 case 7: bulan = "Agosto"; break;
 case 8: bulan = "Setembro"; break;
 case 9: bulan = "Outubro"; break;
 case 10: bulan = "Novembro"; break;
 case 11: bulan = "Dezembro"; break;
}
var tampilTanggal = "DATA: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "HORA: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == 'nike voce gosta de min?'){
conn.sendMessage(id, 'Claro que sim eu pagaria facil kkk' ,MessageType.text);
}
else if (text == 'Te amo nike'){
conn.sendMessage(id, 'Eu eo resto do grupo né?' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'halo'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'hai'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'woi'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'woy'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'hi'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'gan'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'sis'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'bro'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'min'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'sayang'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'i love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == 'mas'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'mba'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'bre'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'cuy'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'euy'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == '#vida'){
conn.sendMessage(id, '🙏Você continua vivo, passe a vez.' ,MessageType.text);
}
else if (text == '#dar'){
conn.sendMessage(id, 'VAI LER O SALMO 91 VAGABUNDO(A)🤨...' ,MessageType.text);
}
else if (text == '#kiss'){
conn.sendMessage(id, 'Nike deu um beijo em você🥰' ,MessageType.text);
}
else if (text == '#sticker'){
conn.sendMessage(id, 'COLOQUE O COMANDO NA LEGENDA DA FOTO...' ,MessageType.text);
}
else if (text == '#roleta'){
conn.sendMessage(id, '🔫Bang, ela disparou e você morreu, é game over otario(a)...' ,MessageType.text);
}
else if (text == '#doar'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/br').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Domigo"; break;
 case 1: hari = "Segunda-feira"; break;
 case 2: hari = "terça"; break;
 case 3: hari = "Quarta feira"; break;
 case 4: hari = "Quinta feira"; break;
 case 5: hari = "Sexta-feira"; break;
 case 6: hari = "sábado"; break;
}
switch(bulan) {
 case 0: bulan = "janeiro"; break;
 case 1: bulan = "fevereiro"; break;
 case 2: bulan = "Março"; break;
 case 3: bulan = "abril"; break;
 case 4: bulan = "Maio"; break;
 case 5: bulan = "Junho"; break;
 case 6: bulan = "Julho"; break;
 case 7: bulan = "Agosto"; break;
 case 8: bulan = "Setembro"; break;
 case 9: bulan = "Outubro"; break;
 case 10: bulan = "Novembro"; break;
 case 11: bulan = "Dezembro"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/br').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Domigo"; break;
 case 1: hari = "Segunda-feira"; break;
 case 2: hari = "terça"; break;
 case 3: hari = "Quarta feira"; break;
 case 4: hari = "Quinta feira"; break;
 case 5: hari = "Sexta-feira"; break;
 case 6: hari = "sábado"; break;
}
switch(bulan) {
 case 0: bulan = "janeiro"; break;
 case 1: bulan = "fevereiro"; break;
 case 2: bulan = "Março"; break;
 case 3: bulan = "abril"; break;
 case 4: bulan = "Maio"; break;
 case 5: bulan = "Junho"; break;
 case 6: bulan = "Julho"; break;
 case 7: bulan = "Agosto"; break;
 case 8: bulan = "Setembro"; break;
 case 9: bulan = "Outubro"; break;
 case 10: bulan = "Novembro"; break;
 case 11: bulan = "Dezembro"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#doar'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/br').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Domigo"; break;
 case 1: hari = "Segunda-feira"; break;
 case 2: hari = "terça"; break;
 case 3: hari = "Quarta feira"; break;
 case 4: hari = "Quinta feira"; break;
 case 5: hari = "Sexta-feira"; break;
 case 6: hari = "sábado"; break;
}
switch(bulan) {
 case 0: bulan = "janeiro"; break;
 case 1: bulan = "fevereiro"; break;
 case 2: bulan = "Março"; break;
 case 3: bulan = "abril"; break;
 case 4: bulan = "Maio"; break;
 case 5: bulan = "Junho"; break;
 case 6: bulan = "Julho"; break;
 case 7: bulan = "Agosto"; break;
 case 8: bulan = "Setembro"; break;
 case 9: bulan = "Outubro"; break;
 case 10: bulan = "Novembro"; break;
 case 11: bulan = "Dezembro"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#doar'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/br').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Domigo"; break;
 case 1: hari = "Segunda-feira"; break;
 case 2: hari = "terça"; break;
 case 3: hari = "Quarta feira"; break;
 case 4: hari = "Quinta feira"; break;
 case 5: hari = "Sexta-feira"; break;
 case 6: hari = "sábado"; break;
}
switch(bulan) {
 case 0: bulan = "janeiro"; break;
 case 1: bulan = "fevereiro"; break;
 case 2: bulan = "Março"; break;
 case 3: bulan = "abril"; break;
 case 4: bulan = "Maio"; break;
 case 5: bulan = "Junho"; break;
 case 6: bulan = "Julho"; break;
 case 7: bulan = "Agosto"; break;
 case 8: bulan = "Setembro"; break;
 case 9: bulan = "Outubro"; break;
 case 10: bulan = "Novembro"; break;
 case 11: bulan = "Dezembro"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#info'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/br').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Domigo"; break;
 case 1: hari = "Segunda-feira"; break;
 case 2: hari = "terça"; break;
 case 3: hari = "Quarta feira"; break;
 case 4: hari = "Quinta feira"; break;
 case 5: hari = "Sexta-feira"; break;
 case 6: hari = "sábado"; break;
}
switch(bulan) {
 case 0: bulan = "janeiro"; break;
 case 1: bulan = "fevereiro"; break;
 case 2: bulan = "Março"; break;
 case 3: bulan = "abril"; break;
 case 4: bulan = "Maio"; break;
 case 5: bulan = "Junho"; break;
 case 6: bulan = "Julho"; break;
 case 7: bulan = "Agosto"; break;
 case 8: bulan = "Setembro"; break;
 case 9: bulan = "Outubro"; break;
 case 10: bulan = "Novembro"; break;
 case 11: bulan = "Dezembro"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#gacha'){
conn.sendMessage(id, 'kirim #gacha cewek/cowok\n\nContoh: #gacha cewek' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '#sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   } 

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '#pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   }
   if (text.includes("#letra")){
	const teks = text.split("#letra")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	 	let hasil = `Letra: ${teks}\n\n\n ${res.data.result.lirik}`
	conn.sendMessage(id, hasil, MessageType.text)
	})
}



   
   if (text.includes("#yt")) 
   {
      const url = text.replace(/#yt/, "");
      const exec = require('child_process').exec;

      var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

      const ytdl = require("ytdl-core")
      if (videoid != null)
      {
         console.log("video id = ", videoid[1]);
      }
      else
      {
         conn.sendMessage(id, "gavalid", MessageType.text)
      }
      ytdl.getInfo(videoid[1]).then(info =>
      {
         if (info.length_seconds > 1000)
         {
            conn.sendMessage(id, " videonya kepanjangan", MessageType.text)
         }
         else
         {

            console.log(info.length_seconds)

            function os_func()
            {
               this.execCommand = function (cmd)
               {
                  return new Promise((resolve, reject) =>
                  {
                     exec(cmd, (error, stdout, stderr) =>
                     {
                        if (error)
                        {
                           reject(error);
                           return;
                        }
                        resolve(stdout)
                     });
                  })
               }
            }
            var os = new os_func();

            os.execCommand('ytdl ' + url + ' -q highest -o mp4/' + videoid[1] + '.mp4').then(res =>
            {
		const buffer = fs.readFileSync("mp4/"+ videoid[1] +".mp4")
               conn.sendMessage(id, buffer, MessageType.video)
            }).catch(err =>
            {
               console.log("os >>>", err);
            })

         }
      });

   }

   
   //ytmp3 
   if (text.includes("#ytmp3")){
const teks = text.replace(/#ytmp3 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/yta?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[ESPERE] Em andamento⏳ por favor, aguarde um momento', MessageType.text)
    let hasil = `âœ…Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawahðŸ—¡ï¸\n\nJudul: ${res.data.title}\n\nUkuran audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
} 


   if (text.includes('#escrever')){
  var teks = text.replace(/#escrever /, ' ')
    axios.get('https://bangandre.herokuapp.com/nulis?teks='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ESPERE] Em andamento⏳ por favor, aguarde um momento', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}



   if (text.includes("#quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
     _${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }


   if (text.includes("#gacha cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes("#gacha cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
  var buf = Buffer.from(response, 'base64'); // Ta-da 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

if (text.includes("#randomanime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
    
       
if (text.includes("#scdl")){
const fs = require("fs");
const scdl = require("./lib/scdl");

scdl.setClientID("iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX");

scdl("https://m.soundcloud.com/abdul-muttaqin-701361735/lucid-dreams-gustixa-ft-vict-molina")
    .pipe(fs.createWriteStream("mp3/song.mp3"));
}


else if (text.includes("#tts")) {
  var teks = text.split("#ttsid ")[1];
  var path = require('path');
  var text1 = teks.slice(6);
  text1 = suara;
  var suara = text.replace(/#ttsid/g, text1);
  var filepath = 'mp3/bacot.wav';
  
  
/*
 * save audio file
 */

gtts.save(filepath, suara, function() {
  console.log(`${filepath} MP3 SAVED!`)
});
await new Promise(resolve => setTimeout(resolve, 500));

	if(suara.length > 200){ // check longness of text, because otherways google translate will give me a empty file
  msg.reply("VOCÊATINGIU O LIMETE DE PALAVRAS" )
}else{

const buffer = fs.readFileSync(filepath)
	conn.sendMessage(id , buffer , MessageType.audio);

};


}






   // end of file


})
