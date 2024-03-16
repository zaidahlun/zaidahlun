const {
  create,
  Client,
  decryptMedia
} = require("@open-wa/wa-automate");

create().then((client) => start(client));

async function start(client) {
  client.onMessage(async (msg) => {
    // console.log(msg);

    if (msg.body === "Menu" || msg.body === "menu" || msg.body === "P" || msg.body === "p" || msg.body === ".menu" || msg.body === ".sticker" || msg.body === ".stiker" || msg.body === "Bot" || msg.body === "bot" || msg.body === "!menu") {
      client.sendText(msg.from, `
    *Halo Selamat Datang di Bot Ahza*
    !cek = Untuk cek bot aktif atau engga
    !stiker = Buat stiker pake gambar/video
    !rules = cek peraturan bot ini`);
      client;
    }
  
    if (msg.body === "!stiker") {
      client.sendText(msg.from, "Sertakan Dengan Gambar/Video dan Caption !stiker");
      client;
    }

    if (msg.body === "!cek") {
      client.sendText(msg.from, "👋 Hello! BOT AKTIF");
      client;
    }

	if (msg.body === "!rules") {
      client.sendText(msg.from, ` 
	Rules ... !!!


• *Jangan spam bot ..*
• *Jangan rusuh kalo bot gaaktif*
• *Jangan telfon / vc bot nya ..*
     ( _auto block_ )
• *Sesuai kan perintah dengan formatnya..*
_salah format dan bot error = block_

Konsekuensi :

 Melanggar rules bot akan keluar 

Rules ini untuk kenyamanan semua yang memakai
bot ini


	`);
      client;
    }

	if (msg.body === "Test" || msg.body === "test" || msg.body === "Hi" || msg.body === "Hallo") {
      client.sendText(msg.from, `
		*SELAMAT DATANG DI BOT AHZA ^_^* 

_Hai kawan, sebelum memakai bot ini patuhi rules dulu ya ._
Ketikan *!rules* untuk melihat rules memakai bot ini, dan *!menu* untuk melihat menu bot ini`);
      client;
    }
	if (msg.body === "Ahza" || msg.body === "ahza") {
      client.sendText(msg.from, "👋 Iyaa");
      client;
    }
	

  if (msg.mimetype) {
      if (msg.caption === "!stiker" && msg.type === "video") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendMp4AsSticker(msg.from, imageBase64);
      }
    }


	if (msg.mimetype) {
      if (msg.caption === "!stiker" && msg.type === "image") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendImageAsSticker(msg.from, imageBase64);
      }
    }
  });
}
