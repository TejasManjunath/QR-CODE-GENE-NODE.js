import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
  {
    message:"Type your URL:",
    name: "URL",
  },
]).then(answers => {
  const url = answers.URL;

    var qr_img=qr.image(url);
    qr_img.pipe(fs.createWriteStream('QR_CODE.png'));

    fs.writeFile('URL.txt',url, (err) => {
      if (err) throw err;
      console.log('QR-Code is Generated in QR_CODE.png');
    });
  })
    .catch((error)=>{
      if(error.isTtyError){
        console.log("QR code not generated");
      }else{
        
      }
    
  });