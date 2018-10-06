const program = require('commander');
const path = require('path');
const fs = require('fs');
const { mkDirByPathSync } = require('./functions');

const repeater = (num, str = '=') => (str).repeat(num);

program
  .version('0.1.0', '-v, --version')

// TODO: Instead of using template file, write the file with component/view name
// TODO: Add option to add route to App.js
program
  .option('-l, --load <type>', 'Load "view" or "component" template')
  .option('-t, --target <target>', 'Specify client/{type} location to load template into')
  .action((env, options) => {

    console.log(`${repeater(33)} FUSION CLI ${repeater(33)}\n`);

    const type = env.load;
    const adjustedType = type.charAt(0).toUpperCase() + type.slice(1);
    if ( type !== 'view' && type !== 'component' ) return null;

    let filename = '';
    let target = path.resolve('./../client/src/', `${env.load === 'view' ? 'views' : env.target}`);
    const template = `${__dirname}/templates/Sample${adjustedType}.js`;

    console.log(`Copying sample ${type} to ${target}`);

    if ( target.slice(-2) !== 'js' ) {
      filename = `/Sample${adjustedType}-${Date.now()}.js`;
      target = target + filename;
    } else {
      filename = target.split('/').slice(-1)[0];
    }

    const directory = target.split('/').slice(0, -1).join('/');

    if ( !fs.existsSync(directory) ) {
      mkDirByPathSync(
        directory, {
          isRelativeToScript: true
        }
      );
    }

    fs.createReadStream(template).pipe(fs.createWriteStream(target));

    console.log(`Copied sample ${type} to ${target}`);
    console.log('Exiting...');
    console.log('\n' + repeater(78));


  })
  .parse(process.argv);