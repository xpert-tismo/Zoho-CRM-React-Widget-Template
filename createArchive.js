const AdmZip = require('adm-zip');
const fs = require('fs');

const dist = './dist';

async function createZipArchive() {
  const zip = new AdmZip();

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  const outputFile = './dist/app.zip';
  zip.addLocalFolder('./build');
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();