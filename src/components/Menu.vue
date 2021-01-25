<template>
  <nav class="side-menu">
    <h3>{{ $t('app.title') }}</h3>
    <div class="w-100 d-flex flex-row-reverse">
      <small class="mr-3 version">V{{ version }}</small>
    </div>
    <hr>

    <ul class="list-unstyled">
      <li v-for="(schema, index) in schemas" :key="schema.group">
        <ItemMenu
          :value="schema"
          @toggleMenu="collapseMenus($event, index)"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import packageJson from '../../package.json'

import { SCHEMAS } from '../store/getters-type.js'
import { LOAD_MENU } from '../store/actions-type.js'

import ItemMenu from './MenuItem.vue'

export default {
  name: 'Menu',
  components: {
    ItemMenu
  },
  data () {
    return {
      version: packageJson.version,
      openMenu: ''
    }
  },
  watch: {
    '$route.params.name' (routeName) {
      const schema = this.schemas.find(s => s.schemas.includes(routeName))

      this.openMenu = schema?.group || ''
    }
  },
  computed: {
    schemas () {
      return this.$store.getters[SCHEMAS].map(({ group, schemas }) => {
        return {
          group,
          schemas,
          open: group === this.openMenu
        }
      })
    }
  },
  mounted () {
    this.loadMenu()
  },
  methods: {
    ...mapActions({
      loadMenu: LOAD_MENU
    }),

    collapseMenus (event) {
      this.openMenu = event.group
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary-color: #1f3c81;

  .side-menu {
    background-color: $primary-color;
    color: #ffffff;
    min-width: 200px;

    .version {
      color: rgba(255, 255, 255, 0.5);
    }

    h1, h2, h3, h4 {
      color: #ffffff;
    }

    hr {
      border-top: 1px solid rgba(167, 167, 167, 0.5);
    }
  }
</style>
