<template>
  <div>
    <Hero />
    <main>
      <About />
      <Events />
      <Blog />
    </main>
  </div>
</template>

<script>
import Hero from '~/components/homePage/Hero';
import About from '~/components/homePage/About';
import Events from '~/components/homePage/Events/Events';
import Blog from '~/components/homePage/Blog/Blog';

export default {
  name: 'HomePage',
  components: {
    Hero,
    About,
    Events,
    Blog,
  },
}
</script>
