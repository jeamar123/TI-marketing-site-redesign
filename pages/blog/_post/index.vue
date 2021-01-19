<template>
  <div>
    <BlogPost :post="blogPosts[0]" />
    <GenericSection>
      <Heading color="whiite" text-align="center">
        Blog
      </Heading>
      <MoreBlogPosts :posts="cardPosts" />
    </GenericSection>
  </div>
</template>

<script>
import BlogPost from '~/components/blog/BlogPost';
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import MoreBlogPosts from '~/components/common/blog/MoreBlogPosts';

export default {
  name: 'BlogPostPage',
  props: {},
  components: {
    BlogPost,
    GenericSection,
    Heading,
    MoreBlogPosts,
  },
  data: () => ({
    blogPosts: [
      {
        id: 1,
        img: 'https://picsum.photos/600/800',
        title: "Apple's Head of Security Charged in Bribery Case: Here's How It Happened",
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse. Senectus et netus et malesuada fames. Nullam eget felis eget nunc lobortis mattis aliquam. Faucibus nisl tincidunt eget nullam. Lobortis scelerisque fermentum dui faucibus in ornare. Facilisis sed odio morbi quis commodo odio. Nisl tincidunt eget nullam non nisi est sit. Quisque sagittis purus sit amet. Non nisi est sit amet facilisis magna etiam. Orci porta non pulvinar neque. Scelerisque mauris pellentesque pulvinar pellentesque. Tempor nec feugiat nisl pretium fusce id velit. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Semper auctor neque vitae tempus quam pellentesque. Sed sed risus pretium quam vulputate dignissim. Gravida arcu ac tortor dignissim. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Rutrum tellus pellentesque eu tincidunt tortor. Enim blandit volutpat maecenas volutpat blandit. At tellus at urna condimentum mattis. Sapien pellentesque habitant morbi tristique senectus et. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Ac turpis egestas integer eget. Egestas sed sed risus pretium quam vulputate dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisl purus in mollis nunc sed id semper. Viverra mauris in aliquam sem fringilla. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Nisi lacus sed viverra tellus. Hac habitasse platea dictumst quisque. Urna nunc id cursus metus aliquam eleifend. Nisi vitae suscipit tellus mauris a. Amet est placerat in egestas erat imperdiet. Morbi blandit cursus risus at ultrices. Non odio euismod lacinia at quis risus sed vulputate. Mattis rhoncus urna neque viverra justo nec. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Purus sit amet luctus venenatis lectus. Vel facilisis volutpat est velit egestas. Sagittis id consectetur purus ut. Mi ipsum faucibus vitae aliquet. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Egestas integer eget aliquet nibh. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Tristique et egestas quis ipsum. Fusce ut placerat orci nulla. Tellus mauris a diam maecenas sed enim ut sem. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Aliquam etiam erat velit scelerisque in dictum. Ac tortor dignissim convallis aenean et tortor at risus viverra. Egestas fringilla phasellus faucibus scelerisque eleifend. In aliquam sem fringilla ut morbi tincidunt. Dapibus ultrices in iaculis nunc sed. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Eget mauris pharetra et ultrices. Massa ultricies mi quis hendrerit dolor magna eget est lorem. At imperdiet dui accumsan sit. Amet consectetur adipiscing elit pellentesque habitant morbi. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Aliquet eget sit amet tellus cras adipiscing enim eu. Pellentesque massa placerat duis ultricies. Augue ut lectus arcu bibendum at varius vel pharetra vel. Quam lacus suspendisse faucibus interdum. Erat pellentesque adipiscing commodo elit. Leo urna molestie at elementum eu facilisis. Mauris augue neque gravida in fermentum et sollicitudin ac. Ipsum dolor sit amet consectetur adipiscing elit ut. Eu facilisis sed odio morbi quis commodo odio aenean sed. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Elit at imperdiet dui accumsan. Ac feugiat sed lectus vestibulum. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Eget est lorem ipsum dolor sit. Tellus molestie nunc non blandit massa enim nec. Dui sapien eget mi proin sed libero. Turpis egestas sed tempus urna. Commodo nulla facilisi nullam vehicula ipsum. Semper eget duis at tellus at urna condimentum mattis pellentesque. Porta lorem mollis aliquam ut porttitor leo a diam. Non curabitur gravida arcu ac tortor. Eu turpis egestas pretium aenean pharetra magna ac. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nec ullamcorper sit amet risus. Pellentesque elit eget gravida cum sociis."
      },
      {
        id: 2,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 3,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 4,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 5,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 6,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 7,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 8,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
    ],
  }),
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
