<template>
  <div>
    <BlogPost :post="blogPost" />
    <MorePosts :all-posts="blogPostsList" />
  </div>
</template>

<script>
import BlogPost from '~/components/blog/BlogPost';
import MorePosts from '~/components/blog/MorePosts';

export default {
  name: 'BlogPostPage',
  props: {},
  components: {
    BlogPost,
    MorePosts,
  },
  asyncData({ store, route }) {
    let blogPost = {};
    let blogPostsList = [];

    const getPostsList = store.dispatch('crud/GET', { route: '/admin/blog' })
      .then(data => { blogPostsList = data });

    const getPost = store.dispatch('crud/GET', { route: `/admin/blog/${route.params.post}` })
      .then(data => blogPost = data);

    return Promise.all([ getPostsList, getPost ])
      .then(() => ({ blogPost, blogPostsList }));
  },
  data: () => ({}),
  computed: {
    cardPosts() {
      const posts = [...this.blogPosts];
      posts.splice(0, 1);

      return posts.splice(0, 3);
    },
  },
  methods: {},
};
</script>
