<template>
  <div>
    <blockquote
      ref="quote"
      v-html="sentence.html"
    />
    <div class="player">
      <span class="sep">
        <router-link :to="prev"><i class="fa fa-step-backward" /></router-link>
      </span>
      <span class="sep">
        <a
          href
          @click.prevent="togglePlay"
          @keydown.prevent="togglePlay"
          aria-label="Play/Stop playback"
        >
          <i
            class="fa fa-stop"
            v-if="appService.playing"
            aria-hidden="true"
          />
          <i
            class="fa fa-play"
            v-else
            aria-hidden="true"
          />
        </a>
      </span>
      <span class="sep">
        <router-link :to="next"><i class="fa fa-step-forward" /></router-link>
      </span>
    </div>
  </div>
</template>

<script>
import sentences from '@/assets/sentences';
import AppService from '@/services/app-service';

export default {
  data() {
    return {
      appService: AppService,
      sentences,
      timeout: null,
    };
  },
  beforeUnmount() {
    this.appService.playing = false;
    clearTimeout(this.timeout);
  },
  beforeRouteUpdate(to, from, next) {
    if (this.appService.playing) {
      this.play();
    }
    next();
  },
  mounted() {
    this.updateTitle();
  },
  watch: {
    sentence() {
      this.updateTitle();
    },
  },
  computed: {
    id() {
      return +this.$route.params.id;
    },
    sentence() {
      return this.sentences.find((x) => x.id === this.id);
    },
    prev() {
      // https://stackoverflow.com/questions/3803331/how-can-i-modulo-when-my-numbers-start-from-1-not-zero
      return {
        name: 'SentenceView',
        params: { id: ((this.id - 1 - 1 + this.sentences.length) % this.sentences.length) + 1 },
      };
    },
    next() {
      return {
        name: 'SentenceView',
        params: { id: ((this.id + 1 - 1 + this.sentences.length) % this.sentences.length) + 1 },
      };
    },
  },
  methods: {
    togglePlay() {
      this.appService.playing = !this.appService.playing;
      if (this.appService.playing) {
        this.play();
      } else {
        this.stop();
      }
    },
    play() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => this.$router.push(this.next), 3000);
    },
    stop() {
      clearTimeout(this.timeout);
    },
    updateTitle() {
      this.$nextTick(() => {
        document.title = `Pas évident.be - ${this.$refs.quote.textContent}`;
      });
    },
  },
};
</script>

<style scoped>
  .sep {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .player {
    margin-top: 2rem;
  }
</style>
