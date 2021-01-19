<template>
  <GenericSection>
      <Heading color="whiite" text-align="center">
        Blog
      </Heading>
      <MoreBlogPosts :posts="cardPosts" />
    </GenericSection>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';


</style>