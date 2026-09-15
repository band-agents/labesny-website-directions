import fs from 'fs';
const src = process.argv[2], out = process.argv[3], stub = process.argv[4] === 'stub';
let html = fs.readFileSync(src,'utf8');

if (!html.includes('/*__LOGOS__*/')) { console.error('no logo placeholder in '+src); process.exit(1); }
html = html.replace('/*__LOGOS__*/', fs.readFileSync('logos.css','utf8'));

if (!html.includes('<script src="engine.js"></script>')) { console.error('no engine tag'); process.exit(1); }
html = html.replace('<script src="engine.js"></script>', '<script>\n' + fs.readFileSync('engine.js','utf8') + '\n</script>');

const real = JSON.parse(fs.readFileSync('imgs.json','utf8'));
let imgs = real;
if (stub) {
  const ph = 'data:image/svg+xml;base64,' + Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400"><rect width="300" height="400" fill="#d8d3cc"/></svg>'
  ).toString('base64');
  imgs = {}; Object.keys(real).forEach(k => imgs[k] = ph);
}
if (!html.includes('/*__IMAGES__*/{}')) { console.error('no image placeholder'); process.exit(1); }
html = html.replace('/*__IMAGES__*/{}', JSON.stringify(imgs));
html = html.replace('var IMG = ', 'var IMG = window.IMG = ');

fs.writeFileSync(out, html);
console.log(out, (Buffer.byteLength(html)/1024/1024).toFixed(2)+'MB', stub?'(stub)':'(real)');
