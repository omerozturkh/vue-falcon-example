<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <LocaleChanger />
    -->
    <div class="is-block-mobile is-hidden-desktop">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://senpai.gg/img/e308bc3.svg" width="112" height="28">
        </a>
        <a role="button" class="navbar-burger burger" @click.prevent="mobileNavbar = !mobileNavbar" :class="{'is-active' : mobileNavbar }" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
    <div class="columns is-fullheight">
      <div class="column is-2 is-sidebar-menu ">
        <aside class="menu">
          <div class="menu-label has-padding-4 is-hidden-mobile">
            <img style="width: 120px" src="https://senpai.gg/img/e308bc3.svg">
          </div>
          <div  id="navbarBasicExample" class="navbar-menu" :class="{'is-active' : mobileNavbar }">
            <ul class="has-text-left">
              <li>
                <a><img src="@/assets/svg/dashboard.svg"></a>
              </li>
              <li>
                <a><img src="@/assets/svg/charts.svg"></a>
              </li>
              <li>
                <a><img src="@/assets/svg/details.svg"></a>
              </li>
              <li>
                <a><img src="@/assets/svg/user.svg"></a>
              </li>
              <li>
                <a><img src="@/assets/svg/videos.svg"></a>
              </li>

              <li class="has-margin-top-4">
                <a><img src="@/assets/svg/search.svg"></a>
              </li>
              <li>
                <a><img src="@/assets/svg/settings.svg"></a>
              </li>
              <li class="logout">
                <a><img src="@/assets/svg/logout.svg"></a>
              </li>
            </ul>
          </div>
        </aside>
        <div class="sidebar is-hidden-mobile">
          <div></div>
        </div>
      </div>
      <div class="column is-main-content">
        <transition
          name="fade"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter">
          <router-view/>
        </transition>
        <Footer/>
      </div>

    </div>

  </div>
</template>

<script>
  import LocaleChanger from './components/LocaleChanger.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'app',
    components: {
      LocaleChanger,
      Footer
    },
    data() {
      return {
        prevHeight: 0,
        mobileNavbar: false,
      };
    },
    methods: {
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height;
      },
      enter(element) {
        const elementData = element;
        const { height } = getComputedStyle(element);

        elementData.style.height = this.prevHeight;

        setTimeout(() => {
          elementData.style.height = height;
        });
      },
      afterEnter(element) {
        const elementData = element;
        elementData.style.height = 'auto';
      },
    },
  };
</script>
