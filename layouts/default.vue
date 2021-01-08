<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/features/Nav';
import Footer from '~/components/features/Footer';

export default {
  name: 'Layout',
  components: {
    Nav,
    Footer,
  },
}
</script>
