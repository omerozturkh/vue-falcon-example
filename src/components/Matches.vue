<template>
  <nav class="panel matches">
    <div class="panel-heading has-text-left is-flex is-flex-between">
      <p>Match History</p>
      <span>Filter</span>
    </div>
    <div v-if="matches && matches.results">
      <div v-for="(value, index) in matches.results" :key="index">
        <MatchListItem :value="value" />
      </div>
    </div>
  </nav>
</template>

<script>
import MatchListItem from './MatchListItem';
export default {
  name: 'Matches',
  props: ['matches'],
  components: { MatchListItem },
};
</script>

<style scoped>

</style>
