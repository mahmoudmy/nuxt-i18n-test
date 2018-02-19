module.exports = {
  locales: [{
    code: 'fa',
    iso: 'fa-IR',
    name: 'فارسی'
  }, {
    code: 'en',
    iso: 'en-US',
    name: 'English'
  }],
  defaultLocale: 'fa',
  vueI18n: {
    fallbackLocale: 'fa',
    silentTranslationWarn: true
  },
  loadLanguagesAsync: true,
  langDir: 'locales/',
  langFiles: {
    fa: 'fa.js',
    en: 'en.js'
  }
}
