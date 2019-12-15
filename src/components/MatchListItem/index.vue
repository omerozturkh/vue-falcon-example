<template>
  <div class="panel-block is-flex matches-item has-text-white" :class="{'victory' : value.win}">
    <div class="matches-item__win">
      <p v-if="value.win" class="is-uppercase">{{ $t('message.victory') }}</p>
      <p v-else class="is-uppercase">{{ $t('message.defeat') }}</p>
    </div>
    <div class="matches-item__status">
      <h4 class="has-text-weight-bold has-text-size-14">{{ value.match.gameMode}}</h4>
      <small class="is-block is-size-7">
        {{ value.match.gameCreation | timeAgo  }} {{ $t('message.ago') }}
      </small>
      <span class="is-size-7">
        {{ value.match.gameDuration | secToMin }} {{ $t('message.min') }}
      </span>
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
      <small class="is-size-7">Level --</small>
      <p class="has-text-weight-bold">{{ value.cs }} CS</p>
      <small class="is-size-7">{{ value.killParticipation }}% KP</small>
    </div>
    <div class="matches-item__items is-flex">
      <a href="#" :key="index" :data-tooltip="item" v-for="(item, index) in value.build">
        <img :src="`/items/item${Math.floor(Math.random() * (6 - 1) + 1)}.png`" v-if="item">
        <img v-else src="/items/empty.png">
      </a>
    </div>
    <div class="matches-item__team is-flex">
      <div class="">
        <div
          :key="index"
          class="is-flex is-flex-end"
          v-for="(team, index) in value.match.teamSummary"
          v-if="team.teamId === 100"
          :data-tooltip="champion(team.championId)"
        >
          <span>{{ team.summonerName }}</span>
          <img :src="`/heroes/${champion(team.championId)}.jpg`" @error="imgUrlAlt">
        </div>
      </div>
      <div class="">
        <div
          :key="index"
          class="is-flex"
          v-for="(team, index) in value.match.teamSummary"
          v-if="team.teamId === 200"
          :data-tooltip="champion(team.championId)"
        >
          <img :src="`/heroes/${champion(team.championId)}.jpg`" @error="imgUrlAlt"  >
          <span>{{ team.summonerName }}</span>
        </div>
      </div>
    </div>
    <div class="matches-item__buttons">
      <a href="javascript:void(0)" class="has-text-success is-block has-margin-bottom-7"
         @click.prevent="toggleModal">{{ $t('message.analysis') }}</a>
      <a href="javascript:void(0)"
         class="has-text-warning is-block">{{ $t('message.details') }}</a>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getChampion } from '../../utils/champion';

export default {
  name: 'MatchListItem',
  props: ['value'],
  methods: {
    champion(item) {
      return getChampion(item);
    },
    imgUrlAlt(event) {
      // eslint-disable-next-line no-param-reassign
      event.target.src = '/items/empty.png';
    },
    toggleModal() {
      this.$emit('toggleModal', '');
    },
  },
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
