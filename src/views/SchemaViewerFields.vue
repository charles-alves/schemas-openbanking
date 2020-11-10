<template>
  <div>
    <h5 class="mt-4">{{ title }}</h5>
    <component :is="schemaView" :schema="schema"></component>
  </div>
</template>

<script>
import SchemaViewerFieldsObject from './SchemaViewerFieldsObject.vue'

export default {
  name: 'SchemaViewerFields.vue',
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  computed: {
    title () {
      return this.schema.fieldType || 'Schema'
    },

    schemaView () {
      return SchemaViewerFieldsObject
    }
  }
}
</script>
