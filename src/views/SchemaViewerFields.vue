<template>
  <div>
    <h5 class="mt-4">{{ title }}</h5>

    <b-tabs>
      <b-tab title="HTML">
        <template #title>
          <b-icon icon="file-earmark-code" />
          HTML
        </template>
        <component :is="schemaView" :schema="schema"></component>
      </b-tab>
      <b-tab title="RAW">
        <template #title>
          <b-icon icon="file-earmark-text" />
          RAW
        </template>
        <ssh-pre language="json" :label="title" :reactive="true">
          {{ schema }}
        </ssh-pre>
      </b-tab>
      <b-tab title="JSON">
        <template #title>
          <b-icon icon="file-earmark-break" />
          JSON
        </template>
        <p class="mt-4 ml-3">
          To access this JSON directly click or copy the link below:
          <br>
          <a :href="jsonUrl" target="_blank">{{ jsonUrl }}</a>
        </p>
        <ssh-pre language="json" label="JSON" :reactive="true">
          {{ response | stringify }}
        </ssh-pre>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import SshPre from 'simple-syntax-highlighter'
import { mapState } from 'vuex'

import 'simple-syntax-highlighter/dist/sshpre.css'

import SchemaViewerFieldsObject from './SchemaViewerFieldsObject.vue'
import SchemaViewerFieldsEnum from './SchemaViewerFieldsEnum'
import SchemaViewerFieldsLeaf from './SchemaViewerFieldsLeaf.vue'

export default {
  name: 'SchemaViewerFields.vue',
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
    ...mapState([
      'response'
    ]),

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
      if (this.fieldType === null || Object.keys(this.schema).length > 1) {
        return SchemaViewerFieldsObject
      }
      return SchemaViewerFieldsLeaf
    },

    jsonUrl () {
      return `${process.env.VUE_APP_BASE_URL}/api/schemas/${this.$route.params.name}/json`
    }
  },
  filters: {
    stringify (value) {
      if (value === null) {
        return '{ }'
      }
      return JSON.stringify(value, null, 2)
    }
  }
}
</script>

<style lang="scss">
  .ssh-pre {
    padding: 0;

    pre {
      white-space: pre !important;
      word-break: normal !important;
      margin-bottom: 0;
      padding: 0.5em 0.5em 1.5rem 0.5em;
    }
  }
</style>
