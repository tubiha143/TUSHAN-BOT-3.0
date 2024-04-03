module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : ✌︎⎯⃝𝐌𝐑.𝐓𝐔𝐒𝐇𝐀𝐍  ᯽▸🤍🩷❄︎
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : ✌︎⎯⃝𝐉𝐄𝐑𝐑𝐘  ᯽▸🤍🩷❄︎
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐒𝐋𝐀𝐌_😇
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐁𝐑𝐀𝐇𝐌𝐀𝐍𝐁𝐀𝐑𝐈𝐀, 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇_🇧🇩
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐃𝐔𝐁𝐀𝐈_🇦🇪
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐀𝐋𝐄
𝐀𝐠𝐞           : 21+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐁𝐑𝐎𝐊𝐄𝐍_😌💔
𝐖𝐨𝐫𝐤        : 𝐒𝐓𝐔𝐃𝐄𝐍𝐓_😇
𝐆𝐦𝐚𝐢𝐥       : ilovemymaa131@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+971503450265
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/playboytushan
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/tushann143 `,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://www.facebook.com/tushann143?mibextid=ZbWKwL/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
