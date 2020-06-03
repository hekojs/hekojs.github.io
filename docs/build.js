const { execSync, exec } = require('child_process')

const repositories = [
  '2d-physics',
  '2d-renderer',
  'audio',
  'controls',
  'core',
  'helpers',
  'multiplayer-client',
  'multiplayer-server',
]

console.log('Building documentation for ' + repositories.length + ' packages ...')
const tempFolder = __dirname + '/temp'
process.chdir(__dirname)

execSync('rm -Rf ' + tempFolder)
execSync('mkdir ' + tempFolder)
repositories.forEach(function (repository) {
  let folder = tempFolder + '/' + repository
  exec('mkdir ' + folder, function (error, stdout, stderr) {
    if (error) throw error
    exec('git clone https://github.com/hekojs/' + repository + '.git ' + folder, function (error, stdout, stderr) {
      if (error) throw error
      exec('../node_modules/.bin/jsdoc -c ' + __dirname + '/jsdoc.json ' + folder + '/src -P ' + folder + '/package.json -r --verbose', function (error, stdout, stderr) {
        if (error) throw error
        console.log('- @hekojs/' + repository + ' success !')
      })
    })
  })
})

process.on('exit', function(code) {
  console.log('Cleaning up ...')
  execSync('rm -Rf ' + tempFolder)
});