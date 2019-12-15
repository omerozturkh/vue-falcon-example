<template>
  <nav class="panel matches">
    <div class="panel-heading has-text-left is-flex is-flex-between">
      <p>Match History</p>
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
              <p>Filter by:</p>
              <div>
                <input id="checkAll" type="radio" value="all" v-model="filterBy">
                <label for="checkAll">All</label>
              </div>
              <div>
                <input id="checkWin" type="radio" value="win" v-model="filterBy">
                <label for="checkWin">Win</label>
              </div>
              <div>
                <input id="checkDefeat" type="radio" value="defeat" v-model="filterBy">
                <label for="checkDefeat">Defeat</label>
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
        <MatchListItem :value="value" v-if="value.show"/>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import MatchListItem from './MatchListItem';

export default {
  name: 'Matches',
  components: { MatchListItem },
  data() {
    return {
      data: [],
      dropOpen: false,
      filterBy: 'all',
    };
  },
  watch: {
    filterBy() {
      this.filterFunction();
    },
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
