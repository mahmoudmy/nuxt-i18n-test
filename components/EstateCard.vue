<template>
  <nuxt-link :to="localePath({name: 'p-id', params: {id: estate.id}})">
    <div class="uk-card uk-card-default uk-card-hover uk-inline">
      <div class="uk-card-media-top uk-background-cover" :style="{backgroundImage: 'url(' + estate.properties.thumb + '), url(https://static.trulia-cdn.com/images/search/house.svg)'}"></div>
      <div class="uk-card-body uk-padding-small">
        <h1>{{$t(estate.properties.estateType)}}</h1>
        <div class="price uk-text-primary" v-if="estate.properties.salePrice">{{estate.properties.salePrice | price}}</div>
        <div class="price uk-text-danger" v-if="estate.properties.mortgagePrice">{{estate.properties.mortgagePrice | price}}</div>
        <div class="price uk-text-danger" v-if="estate.properties.rentPrice">{{estate.properties.rentPrice | price}}</div>
        <ul class="uk-breadcrumb">
          <li v-if="estate.properties.estateType === 'APARTMENT'">{{estate.properties.buildingArea}} {{$t('METER')}}</li>
          <li v-if="estate.properties.estateType !== 'APARTMENT'">{{estate.properties.totalArea}} {{$t('METER')}}</li>
          <li v-if="estate.properties.beds">{{estate.properties.beds}} {{$t('BEDS')}}</li>
        </ul>
      </div>
    </div>
  </nuxt-link>
</template> 

<script>
export default {
  props: ['estateInfo'],
  data: function () {
    return {
      estate: this.estateInfo
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 18px;
  /* line-height: .5; */
  margin-bottom: 10px;
}
h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 13px;
  color: #495057;
}
h3 {
  padding: 5px;
  font-size: 15px;
}
.uk-card-media-top {
  height: 180px;
}

.price {
  margin-bottom: 5px;
}

.uk-breadcrumb {
  margin-top: 0;
  font-size: 14px;
}

.uk-breadcrumb > :nth-child(n + 2):not(.uk-first-column):before {
  margin: 0 10px;
  color: #ccc;
}
</style>
