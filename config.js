module.exports = {
  port: 8080,
  mediaTypes: ['images', 'audios', 'videos'],
  folders: {
    assets: 'assets',
    libraries: 'libraries',
    cache: 'cache',
    uploads: 'uploads'
  },
  urls: {
    registry: 'https://raw.githubusercontent.com/h5p/h5p-registry/main/libraries.json',
    library: {
      language: 'https://raw.githubusercontent.com/{org}/{dep}/master/language/en.json',
      semantics: 'https://raw.githubusercontent.com/{org}/{dep}/master/semantics.json',
      list: 'https://raw.githubusercontent.com/{org}/{dep}/master/library.json',
      zip: 'https://github.com/{org}/{repo}/archive/refs/heads/master.zip'
    }
  },
  core: {
    libraries: ['h5p-editor-php-library', 'h5p-php-library']
  }
}
