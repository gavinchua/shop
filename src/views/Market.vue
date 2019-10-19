<template>
  <div class="market">
    <h1>Market Place</h1>
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from '@/components/market/ProductsList'

export default {
  name: 'Market',
  components: {
    ProductsList
  }
}
</script>

<style lang="stylus">

</style>
