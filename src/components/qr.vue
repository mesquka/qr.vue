<template>
  <img :src="dataimg">
</template>

<script>
import QRCode from 'qrcode';

export default {
  name: 'qrvue',
  data() {
    return {
      dataimg: '',
    };
  },
  props: {
    value: null,
    options: Object,
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler() {
        this.generate();
      },
    },
  },
  methods: {
    generate() {
      const value = this.value.toString();
      const options = this.options || {};
      options.width = options.width || 1000;

      QRCode.toDataURL(value, options, (error, url) => {
        this.dataimg = url;
      });
    },
  },
  mounted() {
    this.generate();
  },
};
</script>
