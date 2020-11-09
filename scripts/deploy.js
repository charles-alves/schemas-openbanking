/* eslint-disable no-console */
const execa = require('execa')
const fs = require('fs')
const packageJson = require('../package.json')

const deploy = async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'page'])
    // eslint-disable-next-line no-console
    console.log('Building started...')
    await execa('npm', ['run', 'build'])
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build'
    await execa('git', ['--work-tree', folderName, 'add', '--all'])
    await execa('git', ['--work-tree', folderName, 'commit', '-m', `V${packageJson.version}`])
    console.log('Pushing to page...')
    await execa('git', ['push', 'origin', 'HEAD:page', '--force'])
    await execa('git', ['checkout', '-f', 'master'])
    await execa('git', ['branch', '-D', 'page'])
    console.log('Successfully deployed, check your settings')
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message)
    process.exit(1)
  }
}

deploy()
