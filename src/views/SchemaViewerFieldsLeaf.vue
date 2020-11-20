<template>
  <table class="table mt-3">
    <tbody>
      <tr v-for="(value, key) in meta" :key="key">
        <th>{{ $t(`app.metaFields.${key}`)}}</th>
        <td class="value">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SchemaViewerFieldsLeaf',
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  computed: {
    meta () {
      const meta = { ...this.schema.meta }

      meta.allowedValues = this.schema.meta.allowedValues
        .map(e => {
          return e.value
        })
        .join('\n')

      return meta
    }
  }
}
</script>

<style lang="scss" scoped>
  .table {
    .value {
      white-space: pre-wrap !important;
    }
  }
</style>
