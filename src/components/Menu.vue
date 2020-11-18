<template>
  <nav class="side-menu">
    <h3>{{ $t('app.title') }}</h3>
    <div class="w-100 d-flex flex-row-reverse">
      <small class="mr-3 version">V{{ version }}</small>
    </div>
    <hr>

    <router-link
      :to="{ name: 'CreateSchema' }"
      class="btn btn-primary mb-3 mr-2 ml-2"
    >
      {{ $t('menu.buttonCreate') }}
    </router-link>

    <ul class="list-unstyled">
      <li v-for="schema in schemasNames" :key="schema">
        <router-link
          :to="{ name:'SchemaViewer', params: { name: schema } }"
        >
          {{ schema }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import packageJson from '../../package.json'

import { SCHEMAS } from '../store/getters-type.js'
import { LOAD_MENU } from '../store/actions-type.js'

export default {
  name: 'Menu',
  data () {
    return {
      version: packageJson.version
    }
  },
  computed: {
    ...mapGetters({
      schemasNames: SCHEMAS
    })
  },
  mounted () {
    this.loadMenu()
  },
  methods: {
    ...mapActions({
      loadMenu: LOAD_MENU
    })
  }
}
</script>

<style lang="scss" scoped>
  .side-menu {
    background-color: #1f3c81;
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

    a {
      display: block;
      color: #ffffff;
      padding: 3px;
      padding: 5px;

      &.router-link-active {
        background-color: #0f75d4;
      }

      &:hover {
        color: #ffffff;
        text-decoration: none;
        background-color: #3ABDFC;
      }
    }
  }
</style>
