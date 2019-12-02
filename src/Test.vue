<template>
  <div id="app">
    <qrvue value="Test"/>
  </div>
</template>

<script>
import qrvue from './components/qr.vue';

export default {
  name: 'app',
  components: {
    qrvue,
  },
};
</script>
