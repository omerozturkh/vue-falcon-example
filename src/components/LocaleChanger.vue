<template>
  <div class="locale-changer">
    <div class="control">
      <div class="select">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data() {
    return { langs: ['en', 'tr'] };
  },
};
</script>
