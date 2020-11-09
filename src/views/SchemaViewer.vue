<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <ssh-pre language="json" label="Javascript" :reactive="true">
      {{ schema }}
    </ssh-pre>
  </div>
</template>

<script>
import SshPre from 'simple-syntax-highlighter'
import axios from 'axios'

import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: 'SchemaViewer',
  components: {
    SshPre
  },
  data () {
    return {
      schema: null
    }
  },
  computed: {
    name () {
      return this.$route.params.name
    }
  },
  async beforeRouteEnter (to, from, next) {
    const response = await axios.get(`http://localhost:3001/api/schemas/${to.params.name}`)

    next(vm => {
      vm.schema = response.data.structure
    })
  },
  async beforeRouteUpdate (to, from, next) {
    const response = await axios.get(`http://localhost:3001/api/schemas/${to.params.name}`)

    this.schema = response.data.structure
    next()
  }
}
</script>
