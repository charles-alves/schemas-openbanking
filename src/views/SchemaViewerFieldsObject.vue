<template>
    <table class="table">
      <thead>
        <tr>
          <th class="text-capitalize">{{ $t('app.forms.name') }}</th>
          <th>{{ $t('app.metaFields.fieldType') }}</th>
          <th>{{ $t('app.metaFields.required') }}</th>
          <th>{{ $t('app.metaFields.description') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in fields" :key="key">
          <td>
            <div class="d-flex">
              <router-link
                :to="{
                  name: 'SchemaViewerFields',
                  params: {
                    name: $route.params.name,
                    fields: fieldsParams(key)
                  }
                }">{{ key }}</router-link>
              <b-icon-exclamation-triangle-fill
                v-if="value.meta.observation"
                variant="warning"
                font-scale="0.7"
                v-b-popover.hover.bottom="value.meta.observation"
                class="pointer"
              />
            </div>
          </td>
          <td>{{ value.meta.fieldType }}</td>
          <td>{{ value.meta.required }}</td>
          <td>{{ value.meta.description }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: 'SchemaViewerFieldsObject',
  props: {
    schema: {
      type: Object,
      require: true
    }
  },
  computed: {
    fields () {
      return Object.entries(this.schema)
        .filter(([k]) => k !== 'meta')
        .reduce((a, [k, v]) => {
          a[k] = v
          return a
        }, {})
    },

    fieldsRouteParams () {
      return this.$route.params.fields?.split('/') || []
    }
  },
  methods: {
    fieldsParams (value) {
      return [...this.fieldsRouteParams, value].join('/')
    }
  }
}
</script>
