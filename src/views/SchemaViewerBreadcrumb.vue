<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <router-link
        :to="{
          name: 'SchemaViewer',
          params: {
            name: $route.params.name
          }
        }"
        v-slot="{ href, navigate, isExactActive }"
      >
        <li class="breadcrumb-item" :class="[isExactActive && 'active']">
          <span v-if="isExactActive">Schema</span>
          <a v-else :href="href" @click="navigate">Schema</a>
        </li>
      </router-link>
      <router-link
        v-for="nav in navigation"
        :key="nav.field"
        :to="{
          name: 'SchemaViewerFields',
          params: {
            name: $route.params.name,
            fields: nav.params.fields
          }
        }"
        v-slot="{ href, navigate, isExactActive }"
      >
        <li class="breadcrumb-item"
          :class="[isExactActive && 'active']"
        >
          <span v-if="isExactActive">{{ nav.field }}</span>
          <a v-else :href="href" @click="navigate">{{ nav.field }}</a>
        </li>
      </router-link>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'SchemaViewerBreadcrumb',
  computed: {
    fields () {
      return this.$route.params.fields ? this.$route.params.fields.split('/') : []
    },
    navigation () {
      const navigation = []
      const acumulator = []

      for (const field of this.fields) {
        acumulator.push(field)
        navigation.push({
          field,
          params: {
            fields: acumulator.join('/')
          }
        })
      }

      return navigation
    }
  }
}
</script>
