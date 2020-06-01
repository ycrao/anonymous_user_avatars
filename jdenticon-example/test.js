for (i = 0; i < 100; i ++) {
    var jdenticon = require("jdenticon"),
    fs = require("fs"),
    size = 200,
    value = "anonymous_user_" + i,
    png = jdenticon.toPng(value, size);
    
    fs.writeFileSync("./anonymous_avatars/" + i + ".png", png);
}

