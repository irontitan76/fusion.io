const program = require('commander');
const path = require('path');
const fs = require('fs');

const separator = (num) => ('=').repeat(num);

program
  .version('0.1.0', '-v, --version')

// TODO: Instead of using template file, write the file with component/view name
// TODO: Add option to add route to App.js
program
  .option('-l, --load <type>', 'Load "view" or "component" template')
  .option('-d, --directory <directory>', 'Specify directory to load template into')
  .option('-f, --filename <filename>', 'Specify the target file\'s name')
  .action((env, options) => {

    console.log(`${separator(33)} FUSION CLI ${separator(33)}\n`);

    const type = env.load;
    if ( type !== 'view' && type !== 'component' ) return null;

    const adjustedType = type.charAt(0).toUpperCase() + type.slice(1);
    const filename = env.filename || `Sample${adjustedType}-${Date.now()}`;
    const directory = env.directory || path.resolve(__dirname, `./../src/${type}s`);
    const target = `${directory}/${filename}.js`;
    const template = `${__dirname}/templates/Sample${adjustedType}.js`;

    if ( !fs.existsSync(directory) ) fs.mkdirSync(directory);

    console.log(`Copying sample ${type} to ${directory}`);
    fs.createReadStream(template).pipe(fs.createWriteStream(target));

    console.log(`Copied sample ${type} to ${directory}`);
    console.log('Exiting...');
    console.log('\n' + separator(78));
  })
  .parse(process.argv);