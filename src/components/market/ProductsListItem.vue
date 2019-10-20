<template>
  <div class="productslistitem my-4 px-4 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div class="px-4 relative item">
      <h5 class="mb-1">
        {{ item.name }}
      </h5>
      <p class="text-sm">
        Price S${{ item.price }}
      </p>
      <p class="text-sm">
        Qty {{ item.qty }}
      </p>
      <p>
        <img :src="item.img">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
/* purgecss start ignore */
.item
  img
    @apply mt-3
/* purgecss end ignore */
</style>
