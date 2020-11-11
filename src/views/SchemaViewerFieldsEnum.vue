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
    enumName () {
      return /Enum<(\w+)>/.exec(this.schema.fieldType)[1]
    },
    enumFields () {
      return this.schema.allowedValues.join(',\n  ')
    },
    enumStr () {
      return `enum ${this.enumName} {
  ${this.enumFields}
}`
    }
  }
}
</script>
