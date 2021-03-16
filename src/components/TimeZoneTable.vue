<template>
  <div class="TimeZoneTable">
    <TimeZoneItem
      v-for="el in countries"
      :key="el.key"
      :country="el.country"
      :city="el.city"
      :timezone="el.zone"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimeZoneItem from '@/components/TimeZoneItem.vue';
import jsonCountries from '@/json/countries.json';

export default defineComponent({
  name: 'TimeZoneTable',
  components: { TimeZoneItem },
  setup() {
    interface Countries = {
      key: number,
      zone: string,
      country: string,
      city: string,
    }

    const countries = jsonCountries;
    return { countries };
  },
});
</script>

<style lang="scss" scoped>
.TimeZoneTable {
  display: grid;
  justify-content: center;
  column-gap: 15px;
  row-gap: 15px;
  width: 100%;
  @include below(medium) {
    grid-template-columns: 300px;
  }
  @include between(medium, big) {
    grid-template-columns: repeat(2, 50%);
  }
  @include between(big, large) {
    grid-template-columns: repeat(3, 1fr);
  }
  @include above(large) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
