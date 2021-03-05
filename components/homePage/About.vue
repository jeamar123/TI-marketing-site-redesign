<template>
  <TextSection
    :heading="title"
    :text="text"
    class="about"
  />
</template>

<script>
import config from '~/static/config';
import Heading from '~/components/common/Heading';
import TextSection from '~/components/common/TextSection';

export default {
  name: 'HomePageAbout',
  props: {},
  components: {
    Heading,
    TextSection,
  },
  data: () => ({
    title: `What is ${config.currentEvent === 'exploit' ? 'Exploit' : 'ArcticCon'}?`,
    text: `${config.currentEvent === 'exploit' ? 'ExploitCon' : 'ArcticCon'} is a national conference
      that focuses on providing attendees with technical information from industry experts
      in order to educate the IT community on advancements in Cyber Security and Information Technology.
      Enjoy presentations from local speakers on a wide range of IT topics,
      connect with peers and other industry experts, or get hands on experience at any of our villages.
      At ${config.currentEvent === 'exploit' ? 'Exploit' : 'ArcticCon'} we work hard to provide our attendees
      with the latest and greatest in Cyber Security and our main goal is to make sure you walk away more educated.`
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>