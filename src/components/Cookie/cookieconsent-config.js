const config = {
  root: '#app',
  guiOptions: {
    consentModal: {
      layout: 'bar',
      position: 'bottom center',
    },
  },
  onFirstConsent: () => {
    console.log('onFirstConsent fired');
  },
  onConsent: () => {
    console.log('onConsent fired');
  },
  onChange: () => {
    console.log('onChange fired');
  },
  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [{name: /^(_ga|_gid)/}],
      },
    },
    ads: {},
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: `We use cookies to improve user experience, analyze site usage, and assist in marketing efforts. For details, see our <a href="#">privacy policy</a> and adjust your preferences.`,
          acceptAllBtn: 'ACCEPT COOKIES',
          acceptNecessaryBtn: 'DECLINE',
          closeIconLabel: 'Reject all and close',
        },
      },
    },
  },
};

export default config;
