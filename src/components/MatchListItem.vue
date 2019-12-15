<template>
  <div class="panel-block is-flex matches-item has-text-white" :class="{'victory' : value.win}">
    <div class="matches-item__win">
      <p v-if="value.win">VİCTORY</p>
      <p v-else>DEFEAT</p>
    </div>
    <div class="matches-item__status">
      <h4 class="has-text-weight-bold has-text-size-14">{{ value.match.gameMode}}</h4>
      <small class="is-block is-size-7">{{ value.match.gameCreation | timeAgo  }} ago</small>
      <span class="is-size-7">{{ value.match.gameDuration | secToMin }} min</span>
    </div>
    <div class="matches-item__profile is-flex">
      <div data-tooltip="Annie is awesome">
        <img src="@/assets/img/heroes/annie.jpg"  alt="">
      </div>
      <div>
        <img src="@/assets/img/spells/spell.png">
        <img src="@/assets/img/spells/spell2.png">
      </div>
    </div>
    <div class="matches-item__stats">
      <p class="is-size-5 has-text-weight-bold">
        {{ `${value.kills}/${value.deaths}/${value.assists}` }}
      </p>
      <p class="has-text-weight-bold">{{ value.kda }} KDA</p>
    </div>
    <div class="matches-item__info">
      <small class="is-size-7">Level 17</small>
      <p class="has-text-weight-bold">{{ value.cs }} CS</p>
      <small class="is-size-7">{{ value.killParticipation }}% KP</small>
    </div>
    <div class="matches-item__items is-flex">
      <img src="@/assets/img/items/item1.png">
      <img src="@/assets/img/items/item2.png">
      <img src="@/assets/img/items/item3.png">
      <img src="@/assets/img/items/item4.png">
      <img src="@/assets/img/items/item5.png">
      <img src="@/assets/img/items/item6.png">
      <img src="@/assets/img/items/empty.png">
      <img src="@/assets/img/items/build.png">
    </div>
    <div class="matches-item__team is-flex">
      <div class="">
        <div class="is-flex is-flex-end" v-for="team in value.match.teamSummary" v-if="team.teamId === 100">
          <span>{{ team.summonerName }}</span>
          <img src="@/assets/img/heroes/annie.jpg" alt="">
        </div>
      </div>
      <div class="">
        <div class="is-flex" v-for="team in value.match.teamSummary" v-if="team.teamId === 200">
          <img src="@/assets/img/heroes/annie.jpg" alt="">
          <span>{{ team.summonerName }}</span>
        </div>
      </div>
    </div>
    <div class="matches-item__buttons">
      <a href="" class="has-text-success is-block has-margin-bottom-7">Analysis</a>
      <a href="" class="has-text-warning is-block">Details</a>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'MatchListItem',
  props: ['value'],

  filters: {
    timeAgo(val) {
      return moment(val).fromNow(true);
    },
    secToMin(val) {
      return Math.floor(val / 60);
    },
  },
};
</script>

<style scoped>

</style>
