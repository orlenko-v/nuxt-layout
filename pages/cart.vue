<template>
  <main>
    <p>This is a cart</p>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      baseURL: 'getBaseURL',
    }),
    ...mapGetters('cart', {
      items: 'getItems',
    }),
  },
}
</script>
