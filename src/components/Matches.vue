<template>
  <nav class="panel matches">
    <div class="panel-heading has-text-white has-text-left is-flex is-flex-between">
      <p>Match History</p>
      <span>Filter</span>
    </div>
    <MatchListItem />
    <MatchListItem />
    <MatchListItem />
  </nav>
</template>

<script>
import MatchListItem from './MatchListItem';
export default {
  name: 'Matches',
  components: { MatchListItem },
};
</script>

<style scoped>

</style>
