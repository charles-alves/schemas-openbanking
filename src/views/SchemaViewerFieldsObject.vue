<template>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in fields" :key="key">
          <td>
            <div class="d-flex">
              <router-link v-if="hasSubfields(value)"
                :to="{
                  name: 'SchemaViewerFields',
                  params: {
                    name: $route.params.name,
                    fields: fieldsParams(key)
                  }
                }">{{ key }}</router-link>
              <span v-else>{{ key }}</span>
              <b-icon-exclamation-triangle-fill
                v-if="value.observation"
                variant="warning"
                font-scale="0.7"
                v-b-popover.hover.bottom="value.observation"
                class="pointer"
              />
            </div>
          </td>
          <td>{{ value.fieldType }}</td>
          <td>{{ value.required }}</td>
          <td>{{ value.description }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: '',
  props: {
    schema: {
      type: Object,
      require: true
    }
  },
  computed: {
    fields () {
      return Object.entries(this.schema)
        .reduce((a, [k, v]) => {
          if (k !== 'fieldType') {
            a[k] = v
          }

          return a
        }, {})
    },

    fieldsRouteParams () {
      if (this.$route.params.fields !== undefined) {
        return this.$route.params.fields.split('/')
      }

      return []
    }
  },
  methods: {
    fieldsParams (value) {
      return [...this.fieldsRouteParams, value].join('/')
    },

    hasSubfields (value) {
      return !value.fieldType.includes('String') &&
        !value.fieldType.includes('boolean') &&
        !value.fieldType === 'Field'
    }
  }
}
</script>
