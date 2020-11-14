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
    fieldType () {
      const meta = this.schema.meta
      return meta !== undefined ? meta.fieldType : null
    },

    title () {
      return this.fieldType || 'Schema'
    },

    isEnumField () {
      return this.fieldType !== null && this.fieldType.includes('Enum')
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
