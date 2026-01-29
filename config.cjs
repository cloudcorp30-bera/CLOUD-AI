const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "BERA~H4sIAAAAAAAAA5VUW5OqOBD+K1t5xToqt4hVU7UoqKAoKnjbOg8RAkSuEi7iKf/7FuPMmXnYnZ19Szrp7q+//rp/gSQlFM9xA4a/QJaTChW4PRZNhsEQjErPwznoABcVCAwBWp1uh3vt7JNINyeSVsY7MeOi49XjqiAWu8LKUGR6sRYz+QU8OiArzxFxvghYRKdtMupVWL9Nuv69CKSbOtUMX9JTzuIChmHW8+79klqN/QIebUREcpL4ahbgGOcomuPGRCT/JnxFhErd9WZQ3NvSithdUR+wHKXw5h8dG6JAM058D0PW+B788XzaveLoSi8JddwT3MyMrezux5VgGMTdTKmJ696F23Bq/YRPiZ9gV3NxUpCi+Tbv49XSsNP9qQ/V8Wk+WAROLE4MRWc2VI+80hw3Pok9j+729veAK4F6vG6XSHPUkcVcHHfsCN6lC+Vg7fgrKDHhat+4vnAM7c/AzfxdK+H/4T3UassRlw3UdRwL5r7aDZq9Tmi2Nnrnor/y98pd4Y2A7Yffg59uwt1hMZlVnqiGRyvratQ0hcCx0mMgHboVOgRXMzysDgftAz4qyvwrlNT1wvPGGKwvzZE4Vu23ejYH6yaR5otVpQ3qeOKvF/clf7+buNA9eN4ub7Jy33n2ZDroh7iRTrS5++wuvhijXl9zceC/vFYU4kZzwbD/6IAc+4QWOSpImrQ2ju8A5FZb7OS4eGUX8NRcVq4UNCMuQKUW7Nb3ODsrxioXFofztEbxLM6yoDqQ+gV0QJanDqYUuzNCizRvDEwp8jEFw79+dkCCb8Wzb6/Z+h3gkZwWdlJmUYrc96a+PyLHScuk2DaJM24POAfD3ocZFwVJfNrSWCYodwJS4XGACgqGHooo/l0gzrH7Zvvt3Xq5uEAkoq2odVxX53qqLtkQGnQ6lVVfHvsy+Mj23rUnLYPAXVvsQLFZYV8R+WoI9bLmg+ldSCLHVa8OXV4Fntky1vHlH4KAIfDHrMeH7k2SoJiWYzXaCiWJUijPqMLcjdNxpKkhVPWRaSwvkyiabM/nyai8NpZ6NVU23ehelq2zMF/KG4/RDGYXC+P6pc3m4oo4+HOyvqyf1UwT5kuxOZw5bjPvZmszYq/m1OaFah/MFBOFZgVNy0uuDHKRKu6OmWv3I5k5nuqot0Fh6hn+lkHQSPwZnsmX9VNP8auQiQuGgBV4OIACC6HADVn4J/1Rt/1AWfYjwQXogAS1v1uAOEoznP9xxjkCHRA93TlOZHsDTpQgL7K9NkL78D4z0duuIq9yalO2V4/g19F/C/2fEJ7ktBLrPTqfYrwtk38ZyJGnHWxVquT+stzlvD+/rBzFWWkbypyEw2wzTxYKKrEZViELHo+fHZBFqPDSPG6nOT63ReZp2QpWS7z0q/0q9zTZ97dt2RGihfwxBBaJMS1QnIFhH4qSCDmO5Z+/zDzNZogGLQM7CK82ePwNWIV8a1EHAAA=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : true,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "BRUCE BERA",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254743982206",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 

  // New Features
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,

  // Juice WRLD Quotes for AutoBio
  BIO_QUOTES: [
    "I still see your shadows in my room...",
    "You left me falling and landing inside my grave...",
    "I know that the truth is hard to digest...",
    "We ain't making it past 21...",
    "I'm a jealous boy, I really feel like John Lennon...",
    "Took a pill in Ibiza to show Avicii I was cool..."
  ]
};

module.exports = config;
