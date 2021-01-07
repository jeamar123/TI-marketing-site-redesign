<template>
  <div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/features/Footer';

export default {
  name: 'Layout',
  components: {
    Footer,
  },
}
</script>
