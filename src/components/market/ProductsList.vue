<template>
  <div class="productslist container__inner">
    <template v-if="getProducts.length">
      <div class="flex justify-end">
        <a
          class="inline-block"
          href="#"
          @click.prevent="sortByName"
        >
          Sort by Name
        </a>
        <a
          class="inline-block ml-4"
          href="#"
          @click.prevent="sortByPrice"
        >
          Sort by Price
        </a>
      </div>
      <paginate
        ref="paginator"
        name="getProducts"
        tag="div"
        :list="getProducts"
        :per="itemPerPage"
      >
        <div class="flex flex-wrap -mx-4">
          <ProductsListItem
            v-for="item in paginated('getProducts')"
            :key="item.id"
            :item="item"
          />
        </div>
      </paginate>
      <paginate-links
        class="relative text-center mt-4 md:absolute md:bottom-0"
        for="getProducts"
        :async="true"
        :limit="2"
        :show-step-links="true"
        :classes="{ 'li': 'inline' }"
        :hide-single-page="true"
      />
      <div class="paginate-details p-3 md:flex md:align-items-center">
        <div class="text-center md:text-left md:w-1/2">
          <span v-if="$refs.paginator">
            {{ $refs.paginator.pageItemsCount }} shown
          </span>
        </div>
        <div class="text-center md:text-right mt-3 md:mt-0 md:w-1/2">
          <a
            href="#"
            @click.prevent="toggleAllEvents"
          >
            {{ toggleAllEventsText }}
          </a>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="text-center">
        There is no product to display.
      </div>
    </template>
  </div>
</template>

<script>
import '@/plugins/vue-paginate'
import { mapGetters } from 'vuex'

import ProductsListItem from '@/components/market/ProductsListItem'

export default {
  name: 'ProductsList',
  components: {
    ProductsListItem
  },
  data() {
    return {
      itemPerPage: 8,
      toggleAllEventsText: 'Show all',
      paginate: ['getProducts']
    }
  },
  computed: {
    ...mapGetters('appProducts', [
      'getProducts'
    ])
  },
  methods: {
    sortByName() {
      this.getProducts.sort((a, b) => a.name.localeCompare(b.name, 'en', { numeric: true }))
    },
    sortByPrice() {
      this.getProducts.sort((a, b) => a.price - b.price)
    },
    toggleAllEvents() {
      if (this.$refs.paginator && this.itemPerPage === 8) {
        this.itemPerPage = 10000000
        this.toggleAllEventsText = 'Show pagination'
      } else {
        this.itemPerPage = 8
        this.toggleAllEventsText = 'Show all'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
/* purgecss start ignore */
.paginate-links >>>
  transform translate(-50%,-50%)
  left 50%
  li
    cursor pointer
    padding 0 5px
    &.active
      font-weight bold
/* purgecss end ignore */
</style>
