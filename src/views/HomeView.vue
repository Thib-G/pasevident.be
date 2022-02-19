<template>
  <div class="home">
    <SentencesComponent :sentences="sentences" />
  </div>
</template>

<script>
// @ is an alias to /src
import sentences from '@/assets/sentences';
import SentencesComponent from '@/components/SentencesComponent.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      sentences,
    };
  },
  components: {
    SentencesComponent,
  },
};
</script>
