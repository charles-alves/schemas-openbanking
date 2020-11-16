<template>
  <div>
    <ssh-pre
      language="javascript"
      :label="enumName"
      class="mb-2"
    >
      {{ enumStr }}
    </ssh-pre>
    <SchemaViewerFieldsLeaf :schema="schema" />
  </div>
</template>

<script>
import SshPre from 'simple-syntax-highlighter'

import SchemaViewerFieldsLeaf from './SchemaViewerFieldsLeaf.vue'

export default {
  name: 'SchemaViewerFieldsEnum',
  components: {
    SshPre,
    SchemaViewerFieldsLeaf
  },
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  computed: {
    meta () {
      return this.schema.meta
    },
    enumName () {
      return /Enum<(\w+)>/.exec(this.meta.fieldType)[1]
    },
    enumFields () {
      return this.meta.allowedValues
        .map(e => e.value || e)
        .join(',\n  ')
    },
    enumStr () {
      return `enum ${this.enumName} {
  ${this.enumFields}
}`
    }
  }
}
</script>
