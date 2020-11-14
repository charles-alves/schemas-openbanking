<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <SchemaViewerBreadcrumb />
    <SchemaViewerFields :schema="schema"/>
    <hr>

    <ssh-pre language="json" :label="title" :reactive="true">
      {{ schema }}
    </ssh-pre>
  </div>
</template>

<script>
import SshPre from 'simple-syntax-highlighter'

import 'simple-syntax-highlighter/dist/sshpre.css'

import SchemaViewerBreadcrumb from './SchemaViewerBreadcrumb.vue'
import SchemaViewerFields from './SchemaViewerFields.vue'
import store from '../store/index.js'
import { LOAD_SCHEMA } from '../store/actions-type.js'

export default {
  name: 'SchemaViewer',
  components: {
    SshPre,
    SchemaViewerBreadcrumb,
    SchemaViewerFields
  },
  data () {
    return {
      schema: {}
    }
  },
  computed: {
    name () {
      return this.$route.params.name
    },

    title () {
      const meta = this.schema.meta
      return meta !== undefined ? meta.fieldType : 'Schema'
    }
  },
  async beforeRouteEnter (to, from, next) {
    const schema = await store.dispatch(LOAD_SCHEMA, to.params)
    next(vm => {
      vm.schema = schema
    })
  },
  async beforeRouteUpdate (to, from, next) {
    this.schema = await store.dispatch(LOAD_SCHEMA, to.params)
    next()
  }
}
</script>
