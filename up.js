const axios = require("axios");

const fs = require("fs");
const fsp = require('fs/promises');
const FormData = require('form-data');

var data = {};
data.results = {};
data.results.video = "/media/lifesignals/LifeSIgnals/cypress_dev/cypress_ui/cypress/videos/usercreation.spec.js.mp4"


async function start(){
    console.log(data)
    if (data.results) {
        var video = data.results.video;
        if (video) {
            if (fs.existsSync(video)) {
                const media = await fsp.readFile(video);
                const form = new FormData();
                form.append('file', media,'my-whatever-file-name.mp4');
                console.log(form.getHeaders())
                const response = await axios.post('http://localhost:4500/static', form, {
                    headers: {
                        //...form.getHeaders(),
                       // "Content-Type": "multipart/form-data",
                       // Authentication: 'Bearer ...',
                    },
                });
                console.log(response)
            }
        }
    }
}

start();