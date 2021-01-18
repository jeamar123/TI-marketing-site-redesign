<template>
  <div>
    <Hero id="home" />
    <main>
      <About id="about" />
      <Events id="events" />
      <Blog id="blog" />
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
