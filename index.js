import { input } from '@inquirer/prompts';
import qr from "qr-image"
import fs from "fs"

const answer = await input({ message: 'Enter the website URL: ' });
const qr_png = qr.image(answer);
qr_png.pipe(fs.createWriteStream('website_url.png'));

fs.writeFile('user_input.txt', answer, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 