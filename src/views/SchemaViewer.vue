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
import axios from 'axios'

import 'simple-syntax-highlighter/dist/sshpre.css'

import SchemaViewerBreadcrumb from './SchemaViewerBreadcrumb.vue'
import SchemaViewerFields from './SchemaViewerFields.vue'

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
      return this.schema.fieldType || 'Schema'
    }
  },
  async beforeRouteEnter (to, from, next) {
    const response = await axios.get(`api/schemas/${to.params.name}`)
    const fields = to.params.fields ? to.params.fields.split('/') : []
    const schema = fields.reduce((a, v) => { return a[v] }, response.data.structure)
    next(vm => {
      vm.schema = schema
    })
  },
  async beforeRouteUpdate (to, from, next) {
    const response = await axios.get(`api/schemas/${to.params.name}`)
    const fields = to.params.fields ? to.params.fields.split('/') : []
    this.schema = fields.reduce((a, v) => { return a[v] }, response.data.structure)
    next()
  }
}
</script>
