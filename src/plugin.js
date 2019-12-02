import qrvue from './qr.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('qrvue', qrvue);
  }
};
