var jdenticon = require("jdenticon"),
    fs = require("fs"),
    size = 200,
    value = "anonymous_user",
    png = jdenticon.toPng(value, size);
    
fs.writeFileSync("./anonymous_user_avatar.png", png);
