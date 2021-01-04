<template>
  <div>
    <Hero />
    <main>
      <About />
      <Events />
    </main>
  </div>
</template>

<script>
import Hero from '~/components/homePage/Hero';
import About from '~/components/homePage/About';
import Events from '~/components/homePage/Events/Events';

export default {
  name: 'HomePage',
  components: {
    Hero,
    About,
    Events,
  },
}
</script>
