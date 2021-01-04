<template>
  <div>
    <Hero />
    <main>
      <About />
    </main>
  </div>
</template>

<script>
import Hero from '~/components/homePage/Hero';
import About from '~/components/homePage/About';

export default {
  name: 'HomePage',
  components: {
    Hero,
    About,
  },
}
</script>
