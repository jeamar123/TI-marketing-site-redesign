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
  created() {
    this.scrollToSection();
  },
  watch: {
    hash(value) {
      this.scrollToSection()
    },
  },
  computed: {
    hash() {
      return this.$route.hash.split('#')[1];
    },
  },
  methods: {
    scrollToSection(hash) {
      if (hash) {
        const elem = document.getElementById(hash);
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
}
</script>
