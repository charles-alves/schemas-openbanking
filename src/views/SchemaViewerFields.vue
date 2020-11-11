<template>
  <div>
    <h5 class="mt-4">{{ title }}</h5>
    <component :is="schemaView" :schema="schema"></component>
  </div>
</template>

<script>
import SchemaViewerFieldsObject from './SchemaViewerFieldsObject.vue'
import SchemaViewerFieldsEnum from './SchemaViewerFieldsEnum'

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

    isEnumField () {
      const fieldType = this.schema.fieldType
      return fieldType !== undefined && fieldType.includes('Enum')
    },

    schemaView () {
      if (this.isEnumField) {
        return SchemaViewerFieldsEnum
      }
      return SchemaViewerFieldsObject
    }
  }
}
</script>
