const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const dir = 'C:\\Users\\Schne\\.gemini\\antigravity\\brain\\95863d6b-1d57-41e2-9496-a1dc97b0c835';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

async function checkPdfs() {
  for (const f of files) {
    const dataBuffer = fs.readFileSync(path.join(dir, f));
    try {
      const data = await pdf(dataBuffer);
      console.log(`File: ${f} | Text preview: ${data.text.substring(0, 100).replace(/\n/g, ' ')}`);
    } catch(e) {
      console.error(e);
    }
  }
}
checkPdfs();
