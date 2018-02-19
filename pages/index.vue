<template>
  <section class="uk-section">
    <div class="uk-container">
      <div class="uk-child-width-1-4@m uk-grid uk-grid-match">
        <estate-card v-for="estate in estates" :key="estate.id" :estate-info="estate"/>
      </div>
    </div>
  </section>
</template>

<script>
import EstateCard from "~/components/EstateCard.vue";
export default {
  components: {
    EstateCard
  },
  layout(context){
    const domain = context.req.headers.host.split('.')
    const subdomain = (domain.length > 2) && domain[0]
    return subdomain ? 'subdomain': 'default'
  },
  asyncData({ app }) {
    return app.$axios.$get("https://coridor.ir/api/v1/estates/list?limit=4&hasImage=true&dealType=SALE")
      .then(res => {
        return { estates: res.data.list };
      });
  }
};
</script>

<style>

</style>
