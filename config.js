//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zh8559462@gmail.com";
global.location = "Lahore, Pakistan";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dqV1E3N.jpg";
global.devs = "923197656625";
global.sudo = process.env.SUDO || "923197656625";
global.owner = process.env.OWNER_NUMBER || "923197656625";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://iili.io/dqV1E3N.jpg";
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "923197656625";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5abllVZktVaTFXdmVUdlZobHNYZEt1K2RNYWNaTUY4Qis2TEZsRnQzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclFJWGkyNmR5RDRzbitodCtoMnFvSEY2amRzN0sxQXExWTBtenhhV3QzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySWZ0OFdKaUNJZHlXbnBBUFNyWXhNS3hDdGZ1RDN0ZEhpR01LOHhvRDJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTGZXK3BBdFgrWkFnZWcwYlNvR0IzQ3F5YUVpWHhXWDJjRnZWeGZtcWdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndBZmhUazAxemFNR1dNSlN4KzRHM1d1TUViZUtjUkpnOG5BdXEzWEFBMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlzZGVMcExMcjBrTW5uN2hmTnA1WWZkbDh4UlVPc3hrTUhFSzc2OWpxa009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFrT2ViTEpUMWVkODFSbEJPSkw0d3p1eXUvTTJwM2kyTmZZS3VhR2lHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzdkTzZGTjkrYmcwcEc3dU1LODJabGIrRVZoRzJKYnkzKzZmd3lGWlhXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRrKzdtN2Q4R01WU1puZnlWOXZwaUxLancwNUVvb2pBd2N0SW1pcHNRRGFMa21vTUY4N3FxVU1wL3VWSERHcUN0RXMwVGcwbUhNT1V3aDNpbE9ha0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6IlRvaVJHd1g4TW9lckRNNnJBVzk5b0FqZlJGSmpwWlZtd1R5azRSbjg5ckk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTk3NjU2NjI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcwOUU3N0E4NzA1MUVBMEEzNzdGNDdGMTkxREJCRjE1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0NTk0NzB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJzV09yUzZuU0VTdVp4OXF1UGwwNHciLCJwaG9uZUlkIjoiMGJiZDEyYjItN2RiMi00M2ZiLWE0ZGQtM2U0NmQ2ZWNiYzRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEwTndlRnczV1NTZm1XV2dsTVIrdTdrbVA0az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRmRLV1g3UDQzK1hVdmZjWnp6S2FtcEg5SFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFhNREhIVDQiLCJtZSI6eyJpZCI6IjkyMzE5NzY1NjYyNToyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTzMzZjBERVA3RjdiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1UXdEVVUydzBWaVg1STJsVGMrSExNSDN5WWRjclVReGM1RVFZUFUrYkNBPSIsImFjY291bnRTaWduYXR1cmUiOiJuZVVTWW5LV1hRS1FMTjRwT1ZHanZQbUg3ZEFnMUtGckJ3bEwyakZ3elNDUTYwdnowZERlZUJhRVhPNWdodjZXVUdSU1dOS0xMRWM0eFBPZWZJRjhDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR0hXWUI0ZFRIWml3Y3FRT3RVSWZ0dFBKRWFaUjl2eHA2VjJkMVZ6M2o2VHcwblpKbjRQS244cG5reXpoRTM1VmlFczl4Q0JpdzVJeWIrVDVoZFIzQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxOTc2NTY2MjU6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJia01BMUZOc05GWWwrU05wVTNQaHl6Qjk4bUhYSzFFTVhPUkVHRDFQbXdnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDU5NDY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1VcCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Zaid_Md`",
  author: process.env.PACK_AUTHER || "Zaid_Md",
  packname: process.env.PACK_NAME || "Zaid",
  botname: process.env.BOT_NAME || "Zaid_Md",
  ownername: process.env.OWNER_NAME || "Zaid Hussain",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Zaid").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
