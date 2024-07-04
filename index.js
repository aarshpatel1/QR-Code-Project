import { input } from '@inquirer/prompts';
import qr from "qr-image"
import fs from "fs"

const answer = await input({ message: 'Enter the website URL: ' });
const qr_png = qr.image(answer, { type: 'png' });
qr_png.pipe(fs.createWriteStream('i_love_qr.png'));
