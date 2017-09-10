// console.log("Hello world from main.js");

const loader = require('monaco-loader');
const { ipcRenderer } = require('electron');
const fs = require('fs');

loader().then( monaco => {

    let editor = monaco.editor.create(
        document.querySelector('#app'),
        {
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true
        }
    );

    ipcRenderer.on('open-file', (e, url) => {
        //console.log(url);
        fs.readFile(url.slice(7), 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                editor.setModel(monaco.editor.createModel(data, 'javascript'));
            }
        });
    });

});
