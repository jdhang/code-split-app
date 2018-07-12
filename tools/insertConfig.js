const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const settings = require('../settings.json');

const indexHtmlPath = path.resolve(__dirname, '../dist/index.html');

fs.readFile(indexHtmlPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const startOfEndHeadTag = data.indexOf('</head>');
    const endOfEndHeadTag = data.indexOf('</head>') + '</head>'.length;

    fs.writeFile(indexHtmlPath, `${data.substring(0, startOfEndHeadTag)}<script type="text/javascript">_FPSettings = <%- JSON.stringify(settings) %></script>${data.substring(startOfEndHeadTag)}`, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log('Step 1 Done! ');

        ejs.renderFile(indexHtmlPath, { settings: settings }, (err, str) => {
          if (err) {
            console.error(err);
            return;
          } else {
            fs.writeFile(indexHtmlPath, str, 'utf8', err => {
              if (err) {
                console.error(err);
              } else {
                console.log('Step 2 Done!');
                console.log('Insert Complete!');
                console.log('\n');
                return;
              }
            });
          }
        });
      }
    });
  }
});