<template>
  <div class="home">
    <SentencesComponent :sentences="sentences" />
    <p>
      &copy;&nbsp;Thibaut Goelff et tous les gens qui m’ont suggéré des phrases.
      <br>
      <a href="https://github.com/Thib-G/pasevident.be"><i
        class="fa fa-github"
        aria-hidden="true"
      />&nbsp;Source</a>
    </p>
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
