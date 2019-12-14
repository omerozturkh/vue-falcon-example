<template>
  <div class="panel-block is-flex matches-item victory has-text-white">
    <div class="matches-item__win">
      <p>Victory</p>
    </div>
    <div class="matches-item__status">
      <h4 class="has-text-weight-bold has-text-size-14">Ranked Solo</h4>
      <small class="is-block is-size-7">16 Hours ago</small>
      <span class="is-size-7">31:05</span>
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
      <p class="is-size-5 has-text-weight-bold">14/5/7</p>
      <p class="has-text-weight-bold">4:20:1 KDA</p>
    </div>
    <div class="matches-item__info">
      <small class="is-size-7">Level 17</small>
      <p class="has-text-weight-bold">160 CS</p>
      <small class="is-size-7">50% KP</small>
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
        <div class="is-flex">
          <span>loremipsum</span>
          <img src="@/assets/img/heroes/annie.jpg" alt="">
        </div>
        <div class="is-flex">
          <span>loremipsum</span>
          <img src="@/assets/img/heroes/annie.jpg" alt="">
        </div>
        <div class="is-flex">
          <span>loremipsum</span>
          <img src="@/assets/img/heroes/annie.jpg" alt="">
        </div>
        <div class="is-flex">
          <span>loremipsum</span>
          <img src="@/assets/img/heroes/annie.jpg" alt="">
        </div>
        <div class="is-flex">
          <span>loremipsum</span>
          <img src="@/assets/img/heroes/annie.jpg" alt="">
        </div>
      </div>
      <div class="">
        <div class="is-flex">
          <img src="@/assets/img/heroes/annie.jpg" alt="">
          <span>loremipsum</span>
        </div>
        <div class="is-flex">
          <img src="@/assets/img/heroes/annie.jpg" alt="">
          <span>loremipsum</span>
        </div>
        <div class="is-flex">
          <img src="@/assets/img/heroes/annie.jpg" alt="">
          <span>loremipsum</span>
        </div>
        <div class="is-flex">
          <img src="@/assets/img/heroes/annie.jpg" alt="">
          <span>loremipsum</span>
        </div>
        <div class="is-flex">
          <img src="@/assets/img/heroes/annie.jpg" alt="">
          <span>loremipsum</span>
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
export default {
  name: 'MatchListItem',
};
</script>

<style scoped>

</style>
