exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  Olá *${id.split("@s.whatsapp.net")[0]}* 👋️


Aqui estão alguns dos recursos deste bot! ✨
⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Comandos / Comandos :
   
=> *1.CRIAR FIGURINHA*
_${BotName} enviará seu adesivo com uma legenda #sticker!_
Comando: #sticker
Exemplo: Mande uma imagem com legenda #sticker

=> *2.ESCRITA AUTOMÁTICA*
_${BotName} irá enviar a escrita no livro de acordo com o que você enviou!_
Comando: #escrever [a palavra]
Exemplo: #escrever O belo autor 

=> *3.RECURSOS PANTUN*
_${BotName} vai enviar uma rima aleatória!_
Comando: #pantun
Exemplo: #pantun

=> *4.DOWNLOAD DO YOUTUBE*
_${BotName} irá enviar o downloader de vídeo do youtube de acordo com o seu comando!_
Comando: #yt [link]
Exemplo: #yt https://youtu.be/blablabla

=> *5.RECURSOS DE CITAÇÕES*
_${BotName} irá enviar uma palavra aleatória de sabedoria!_
Comando: #quotes
Exemplo: #quotes

=> *6.GACHA*
_${BotName} irá enviar a imagem /  de acordo com o que você enviou!_
Comando: #gacha [cewek/cowok]
Exemplo: #gacha cewek

=> *7.RECURSOS DO ANIME*
_${BotName} irá enviar imagens de anime aleatoriamente!_
Comando: #randomanime
Exemplo: #randomanime

=> *8.GOOGLE VOICE CHANGER*
_${BotName} irá enviar a voz vn do google de acordo com o seu comando !_
Comando: #ttsid [a palavra] OFF 
Exemplo: #ttsid O autor é bonito

=> *9.RECURSOS DO QURAN*
_${BotName} irá enviar versos do Alcorão em comando!_
Comando: #quran
Exemplo: #quran

=> *10.INFORMAÇÕES DO BOT*
_${BotName} irá enviar informações sobre o bot!_
Comando: #info
Exemplo: #info

=> *11.DIGA RECURSOS*
_${BotName} vai enviar as palavras de acordo com você !_
Comando: #dizer [a palavra]
Exemplo: #dizer olá bonito autor

=> *12.DOWNLOAD DO YOUTUBE MP3*
_${BotName} irá enviar a música de acordo com o comando que você enviou!_
Comando: #ytmp3 [link]
Exemplo: #ytmp3 https://youtu.be/xxxx

=> *13.VIDEO INSTAGRAM / FOTO DOWNLOADER*
_${BotName} irá enviar vídeo / foto ig de acordo com o pedido que você enviar!_
Comando: #ig [link]
Exemplo: #ig https://instagram.com/xxxx

=> *14.FACEBOOK VIDEO / PHOTO DOWNLOADER*
_${BotName} irá enviar o vídeo / foto fb de acordo com o pedido que você enviar!_
Comando: #fb [link]
Exemplo: #fb https://facebook.com/xxxx

=> *15.BAIXAR VÍDEO / FOTO NO TWITTER*
_${BotName} irá enviar um vídeo / foto do twitter de acordo com o comando que você enviar!_
Comando: #twt [link]
Exemplo: #twt https://twitter.com/xxxx

=> *16.WIKIPEDIA*
_${BotName} irá enviar os resultados da wikipedia de acordo com o comando que você enviar!_
Comando: #wiki [A pergunta] OFF
Exemplo: #wiki cão

=> *17.LETRA *
_${BotName} enviará sua letra!_
Comando: #letra
Exemplo: #letra trem bala

♻️ NÃO SE ESQUEÇA DE DOAR PARA QUE O BOT SEJA ATIVO!
♻️ DOAÇÃO RUIM? POR FAVOR DIGITE #donat #donate

📺 *Propaganda* :

✅ Siga oinstagram do administrador ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES SOBRE COVID-19!

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ MORRERAM: *${corohelp.deaths.value}*
⚠️ ATUALIZADO: *${corohelp.lastUpdate}*

♻️ _MANTENHA SUA SAÚDE E SEMPRE USE MASCARA!_

♻️ Quer anunciar no *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use-o com sabedoria ‼️
⚠️ Este bot está rodando ${kapanbotaktif} ‼️

✅ Grupo oficial [1] : ${grupch1}

✅ Grupo oficial [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
