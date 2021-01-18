<template>
  <div>
    <Hero id="home" />
    <main>
      <About id="about" />
      <Events :events-list="upcomingEvents" id="events" />
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
  asyncData({ store }) {
    let upcomingEvents = null;
    let blogPosts = null;

    const getEvents = store.dispatch('crud/GET', { route: '/admin/event/upcoming' })
      .then (data => { upcomingEvents = data });
      

    return Promise.all([ getEvents ])
      .then(() => ({ upcomingEvents }))
      .catch(data => { console.log(data) });
  }
}
</script>
