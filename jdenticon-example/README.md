# jdenticon nodejs example

> see https://jdenticon.com/js-get-started/node-js.html


To use Jdenticon on Node.js, start by installing the Jdenticon NPM package. Create an empty directory and run the following command in that directory.


```bash
npm install jdenticon
```

The following code illustrates how to generate an identicon and save it as a PNG file. Save it as 'test.js' in the directory you created above.

```javascript
var jdenticon = require("jdenticon"),
    fs = require("fs"),
    size = 200,
    value = "icon value",
    png = jdenticon.toPng(value, size);
    
fs.writeFileSync("./testicon.png", png);
```

Run the test file and open testicon.png in the working directory.

```bash
node ./test.js
```
