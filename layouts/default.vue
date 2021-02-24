<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import Nav from '~/components/features/Nav';
import Footer from '~/components/features/Footer';

export default {
  name: 'Layout',
  components: {
    Nav,
    Footer,
  },
  mounted() {
    this.scrollToSection();
    this.getCognitoUserName().then(username => {
      this.getUserProfile(username);
      this.getCurrentToken();
    });
  },
  watch: {
    hash(value) {
      this.scrollToSection();
    },
  },
  computed: {
    hash() {
      return this.$route.hash.split('#')[1];
    },
  },
  methods: {
    ...mapActions({
      getCognitoUserName: 'auth/getCurrentUser',
      getCurrentToken: 'auth/getCurrentToken',
      GET: 'crud/GET',
    }),
    ...mapMutations([
      'setUser',
    ]),
    scrollToSection(hash) {
      if (hash) {
        const elem = document.getElementById(hash);
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    },
    getUserProfile(username) {
      this.GET({
        authed: true,
        route: `/profile/${username}`
      }).then(result => {
        this.setUser(result);
      });
    },
  },
}
</script>
