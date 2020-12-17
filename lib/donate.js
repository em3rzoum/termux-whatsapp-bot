exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Oi, Eu sou o Nike 👋️
Você quer doar? 

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Por favor, doe abaixo :
   
⚜OFF 

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
