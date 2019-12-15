<template>
  <div class="home columns">
    <div class="column is-half">
    <div class="user-detail" :class="{'resize' : resize }">
        <div class="is-flex has-padding-left-6">
          <div class="user-detail__image">
            <img src="@/assets/img/heroes/ahri.jpg">
            <div class="is-flex">
              <a href=""><i class="fal fal-refresh" /></a>
              <a href=""><i class="fal fal-star" /></a>
            </div>
            <p>{{ $t('message.profileUpdate') }}</p>
          </div>
          <div class="user-detail__info has-padding-top-6 has-padding-left-6">
            <div class="user-detail__info--name">
              <div class="is-flex is-flex-between">
                <div class="has-padding-top-6">
                  <h1 class="has-text-weight-bold">Thotpick</h1>
                  <p>Rank 6 (1.35% of top)</p>
                </div>
                <div class="has-padding-left-6 has-padding-right-6">
                  <img src="@/assets/img/challenger-1.png">
                </div>
              </div>
            </div>
            <div class="user-detail__info--stats ">
              <div class="head has-margin-bottom-6">
                <span class="is-small">Ranked Solo</span>
                <h4 class="has-text-weight-bold">Challenger</h4>
                <p class="has-text-weight-bold">1987LP / 3315W 2157L</p>
              </div>
              <div class="body is-flex has-text-white">
                <div>
                  <span class="is-small">{{ $t('message.winRate') }}</span>
                  <p class="has-text-success">72.33%</p>
                </div>
                <div>
                  <span class="is-small">{{ $t('message.winLose') }}</span>
                  <p class="has-text-danger">-1</p>
                </div>
                <div>
                  <span class="is-small">AVG/KDA</span>
                  <p>1.28</p>
                </div>
                <div>
                  <span class="is-small">CS {{ $t('message.perMin') }}</span>
                  <p>3.84</p>
                </div>
                <div class="is-flex">
                  <img src="" alt="">
                  <span class="is-small">{{ $t('message.highest') }} <br> Multikill</span>
                </div>
              </div>
              <div class="foot has-margin-top-6 has-margin-bottom-4">
                <p class="has-text-weight-bold">18,787 {{ $t('message.matches') }}</p>
              </div>
            </div>
          </div>
        </div>
        <a href="" class="fal fal-resize" @click.prevent="resize = !resize"></a>
      </div>

      <div class="user-hero-detail has-margin-top-6">
        <div class="columns">
          <div class="column is-half">
            <div class="user-hero-detail__heroes is-flex">
              <div>
                <img src="@/assets/img/heroes/annie.jpg">
              </div>
              <div>
                <h5 class="has-text-weight-bold">Annie</h5>
                <small>192.</small>
              </div>
              <div>
                <p class="has-text-weight-bold has-text-warning">3.08:1 KDA</p>
                <small>10.7 / 5.7 / 6.9</small>
              </div>
              <div>
                <p class="has-text-weight-bold has-text-warning">3.08:1 KDA</p>
                <small>41 Games</small>
              </div>
            </div>
            <div class="user-hero-detail__heroes is-flex">
              <div>
                <img src="@/assets/img/heroes/aatrox.jpg">
              </div>
              <div>
                <h5 class="has-text-weight-bold">Aatrox</h5>
                <small>192.</small>
              </div>
              <div>
                <p class="has-text-weight-bold has-text-warning">3.08:1 KDA</p>
                <small>10.7 / 5.7 / 6.9</small>
              </div>
              <div>
                <p class="has-text-weight-bold has-text-warning">3.08:1 KDA</p>
                <small>41 Games</small>
              </div>
            </div>
            <div class="user-hero-detail__heroes is-flex">
              <div>
                <img src="@/assets/img/heroes/akali.jpg">
              </div>
              <div>
                <h5 class="has-text-weight-bold">Akali</h5>
                <small>192.</small>
              </div>
              <div>
                <p class="has-text-weight-bold has-text-warning">3.08:1 KDA</p>
                <small>10.7 / 5.7 / 6.9</small>
              </div>
              <div>
                <p class="has-text-weight-bold has-text-warning">3.08:1 KDA</p>
                <small>41 Games</small>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="user-hero-detail__lanes has-padding-6">
              <ul>
                <li class="is-flex has-margin-bottom-6">
                  <img src="@/assets/svg/lanes/all.svg" alt="">
                  <div class="bar has-margin-left-7" style="width: 80%">
                    <span class="has-text-weight-bold">19</span>
                  </div>
                </li>
                <li class="is-flex has-margin-bottom-6">
                  <img src="@/assets/svg/lanes/top-lane.svg" alt="">
                  <div class="bar has-margin-left-7" style="width: 60%">
                    <span class="has-text-weight-bold">12</span>
                  </div>
                </li>
                <li class="is-flex has-margin-bottom-6">
                  <img src="@/assets/svg/lanes/jungle.svg" alt="">
                  <div class="bar has-margin-left-7" style="width: 35%">
                    <span class="has-text-weight-bold">5</span>
                  </div>
                </li>
                <li class="is-flex has-margin-bottom-6">
                  <img src="@/assets/svg/lanes/middle-lane.svg" alt="">
                  <div class="bar has-margin-left-7" style="width: 100%">
                    <span class="has-text-weight-bold">23</span>
                  </div>
                </li>
                <li class="is-flex has-margin-bottom-6">
                  <img src="@/assets/svg/lanes/bottom-lane.svg" alt="">
                  <div class="bar has-margin-left-7" style="width: 50%">
                    <span class="has-text-weight-bold">10</span>
                  </div>
                </li>
                <li class="is-flex has-margin-bottom-6">
                  <img src="@/assets/svg/lanes/support.svg" alt="">
                  <div class="bar has-margin-left-7" style="width: 75%">
                    <span class="has-text-weight-bold">13</span>
                  </div>
                </li>
              </ul>
            </div>
          </div><!--/.is-half-->
        </div><!--/.columns-->
      </div>

      <div class="user-statics has-margin-top-6">
        <div class="columns">
          <div class="column is-3">
            <div class="user-statics__tabs">
              <ul>
                <li>
                  <a
                    href=""
                    :class="{ 'active': tab === 1 }"
                    @click.prevent="tab = 1"
                  >
                    {{ $t('message.normal') }}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    :class="{ 'active': tab === 2 }"
                    @click.prevent="tab = 2"
                  >
                    {{ $t('message.single') }}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    :class="{ 'active': tab === 3 }"
                    @click.prevent="tab = 3"
                  >
                    {{ $t('message.flex') }}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    :class="{ 'active': tab === 4 }"
                    @click.prevent="tab = 4"
                  >
                    {{ $t('message.all') }}
                  </a>
                </li>
              </ul>
            </div><!--/.user-statics__tabs-->
          </div>
          <div class="column">
            <div class="user-statics__content has-padding-top-4 has-padding-left-7 has-padding-right-7">
              <div v-if="tab === 1" class="is-flex">
                <div class="circle green" data-perc="40">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155"
                            class="progress-bar__background"/>
                    <circle cx="16" cy="16" r="15.9155"
                            class="progress-bar__progress js-progress-bar"/>
                  </svg>
                  <p class="has-text-white has-padding-top-7">{{ $t('message.playedGames') }}</p>
                </div><!--/.circle-->
                <div
                  class="has-text-weight-bold has-padding-top-6 has-padding-left-7 has-padding-right-7 has-text-white ">
                  <h2 class="has-margin-bottom-6 has-text-size-24">20T 10G 9Y</h2>
                  <p>
                    <span class="has-text-warning">5.9</span>
                    /
                    <span class="has-text-danger">6.6</span>
                    /
                    <span class="has-text-success">6.7</span>
                  </p>
                  <p class="has-text-size-24">1.92:1<span class="has-text-danger">(36%)</span></p>
                </div>
                <div class="circle" data-perc="63.8%">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155"
                            class="progress-bar__background"/>
                    <circle ref="circle1" :style="{'strokeDashoffset': circlePercFunc(62)}" cx="16" cy="16" r="15.9155"
                            class="progress-bar__progress js-progress-bar"/>
                  </svg>
                  <p class="has-text-white has-padding-top-7">{{ $t('message.successRate') }}</p>
                </div><!--/.circle-->
              </div>
              <div v-if="tab === 2" class="has-text-white">
                {{ $t('message.single') }}
              </div>
              <div v-if="tab === 3" class="has-text-white">
                {{ $t('message.flex') }}
              </div>
              <div v-if="tab === 4" class="has-text-white">
                {{ $t('message.all') }}
              </div>
            </div>
          </div>
        </div>

      </div><!--/.user-hero-detail__statics-->
    </div>
    <div class="column is-half">
      <Matches />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Matches from '@/components/Matches.vue';

export default {
  name: 'home',
  components: {
    Matches,
  },

  data() {
    return {
      tab: 1,
      matches: [],
      resize: false,
    };
  },
  methods: {
    circlePercFunc(val) {
      const b = ((100 - val) / 100) * 100;
      return b;
    },
  },
};
</script>
