<template>
  <div>
    <div
      v-for="s in sentences"
      :key="s.id"
    >
      <router-link :to="`/${s.id}`">
        <blockquote v-html="s.html" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SentencesComponent',
  props: {
    sentences: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
