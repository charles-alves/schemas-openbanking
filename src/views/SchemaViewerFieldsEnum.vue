<template>
  <ssh-pre language="javascript" :label="enumName" :reactive="true">
    {{ enumStr }}
  </ssh-pre>
</template>

<script>
import SshPre from 'simple-syntax-highlighter'

export default {
  name: 'SchemaViewerFieldsEnum',
  components: {
    SshPre
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
      return this.meta.allowedValues.join(',\n  ')
    },
    enumStr () {
      return `enum ${this.enumName} {
  ${this.enumFields}
}`
    }
  }
}
</script>
