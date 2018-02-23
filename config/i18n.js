module.exports = {
  locales: [{
    code: 'fa',
    iso: 'fa-IR',
    name: 'فارسی',
    langFile: 'fa.js'
  }, {
    code: 'en',
    iso: 'en-US',
    name: 'English',
    langFile: 'en.js'
  }],
  defaultLocale: 'fa',
  vueI18n: {
    fallbackLocale: 'fa',
    silentTranslationWarn: true
  },
  loadLanguagesAsync: true,
  langDir: 'locales/'
}
