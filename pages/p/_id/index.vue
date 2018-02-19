<template>
  <div class="uk-section uk-section-default">
    <div class="uk-container uk-margin-top">
      <div class="uk-grid">
        <article class="uk-article uk-width-2-3@s">

          <h1 class="uk-article-title">{{$t(estate.properties.dealType)}} {{$t(estate.properties.estateType)}}</h1>

          <div class="price-wrap" v-if="estate.properties.salePrice">
            <span> {{$t('TOTAL_PRICE')}}: </span>
            <span class="price-value"> {{estate.properties.salePrice | price}} </span>
          </div>

          <div class="price-wrap" v-if="estate.properties.mortgagePrice">
            <span> {{$t('MORTGAGE')}}: </span>
            <span class="price-value"> {{estate.properties.mortgagePrice | price}} </span>
          </div>

          <div class="price-wrap" v-if="estate.properties.rentPrice">
            <span> {{$t('RENT')}}:</span>
            <span class="price-value"> {{estate.properties.rentPrice | price}} </span>
          </div>

          <div class="uk-grid uk-child-width-expand@m uk-margin-top">
            <div class="uk-text-primary">{{$t('estateCode')}}: {{estate.properties.estateCode}}</div>
            <div class="uk-text-left">{{estate.properties.createdDate}}</div>
          </div>

          <h4 class="uk-heading-line uk-margin">
            <span>{{$t('GENERAL_INFO')}}</span>
          </h4>

          <gmap-map class="map-container" :center="{lat: estate.geometry.coordinates[1], lng: estate.geometry.coordinates[0]}" :zoom="16" :options="mapOptions">
            <gmap-marker :position="{lat: estate.geometry.coordinates[1], lng: estate.geometry.coordinates[0]}"></gmap-marker>
          </gmap-map>

        </article>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ app, params }) {
    return app.$axios.$get(`https://coridor.ir/api/v1/estates/${params.id}`)
      .then((res) => {
        return {
          estate: res.data
        }
      })
  },
  scrollToTop: true,
  data() {
    return {
      mapOptions: {
        clickableIcons: false,
        streetViewControl: false,
        noClear: true,
        styles: [{
          featureType: 'poi',
          stylers: [{ visibility: 'off' }]
        }]
      }
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 22px;
  font-weight: 600;
}
.price-value {
  font-size: 20px;
  color: #e03131;
}

.map-container {
  width: 100%;
  height: 300px;
  margin-top: 40px;
  border: 1px solid #adb5bd;
}
</style>