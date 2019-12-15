<template>
  <nav class="panel matches">
    <div class="panel-heading has-text-left is-flex is-flex-between">
      <p>{{ $t('message.matchHistory') }}</p>
      <div class="dropdown is-right" :class="{'is-active': dropOpen}">
        <div class="dropdown-trigger">
          <a
            href="javascript:void(0)"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="fal fal-filter"
            @click.prevent="dropOpen = !dropOpen"
          ></a>
        </div>
        <div class="dropdown-menu" id="dropdown-menu6" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <p>{{ $t('message.filterBy') }}:</p>
              <div>
                <input id="checkAll" type="radio" value="all" v-model="filterBy">
                <label for="checkAll">{{ $t('message.all') }}</label>
              </div>
              <div>
                <input id="checkWin" type="radio" value="win" v-model="filterBy">
                <label for="checkWin">{{ $t('message.win') }}</label>
              </div>
              <div>
                <input id="checkDefeat" type="radio" value="defeat" v-model="filterBy">
                <label for="checkDefeat">{{ $t('message.defeat') }}</label>
              </div>
              <div>
                <input id="checkKda" type="radio" value="kda" v-model="filterBy">
                <label for="checkKda">Kda</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data">
      <div v-for="(value, index) in data" :key="index">
        <MatchListItem
          :value="value"
          v-if="value.show"
          @toggleModal="toggleModal"
        />
      </div>
    </div>

    <div class="modal" :class="{'is-active': modalOpen }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ $t('message.analysis') }}</p>
          <button
            class="delete"
            aria-label="close"
            @click.prevent="modalOpen = !modalOpen"
          >
          </button>
        </header>
        <section class="modal-card-body" v-if="analysis && analysis[0]">
         <p
           :key="index"
           v-for="(val, index) in analysis[0].user_performance"
           class="has-padding-bottom-7">
           {{ val.title }}
         </p>
        </section>
        <footer class="modal-card-foot">
          <button
            class="button"
            @click.prevent="modalOpen = !modalOpen"
          >{{ $t('message.cancel') }}</button>
        </footer>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import MatchListItem from './MatchListItem/';

export default {
  name: 'Matches',
  components: { MatchListItem },
  data() {
    return {
      data: [],
      dropOpen: false,
      filterBy: 'all',
      modalOpen: false,
    };
  },
  watch: {
    filterBy() {
      this.filterFunction();
    },
  },
  computed: {
    ...mapState({
      analysis: state => state.all,
    }),
  },

  created() {
    this.$store.dispatch('getAnalysis');
  },
  mounted() {
    axios.get('https://5df27b629b71960014bf6482.mockapi.io/api/v1/matches')
      .then((res) => {
        this.data = res.data[0].results.map((item) => {
          item.show = true;
          return item;
        });
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    filterFunction() {
      switch (this.filterBy) {
        case 'all':
          this.data = this.data.map((item) => {
            item.show = true;
            return item;
          });
          break;
        case 'win':
          this.data = this.data.map((item) => {
            if (item.win) {
              item.show = true;
            } else {
              item.show = false;
            }
            return item;
          });
          break;
        case 'defeat':
          this.data = this.data.map((item) => {
            if (item.win) {
              item.show = false;
            } else {
              item.show = true;
            }
            return item;
          });
          break;
        case 'kda':
          this.data = this.data.map((item) => {
            item.show = true;
            return item;
          }).sort((a, b) => b.kda - a.kda);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>

</style>
