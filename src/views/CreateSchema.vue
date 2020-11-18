<template>
  <div class="content">
    <h1>{{ $t('forms.createSchema.title') }}</h1>
    <p>{{ $t('forms.createSchema.description') }}</p>

    <form @submit.prevent="proccessFile()" class="form col-6 offset-3 mt-5">
      <div class="form-group">
        <label for="name" class="text-capitalize">{{ $t('app.forms.name') }}</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          :placeholder="$t('app.forms.namePlaceholder')"
          v-model="schemaName"
        >
      </div>

      <div class="form-group">
        <label for="structure" class="text-capitalize">
          {{ $t('app.forms.structure') }}
        </label>
        <div class="custom-file">
          <input
            id="structure"
            name="structure"
            type="file"
            class="custom-file-input"
            accept=".csv"
            @change="filesChange($event.target.name, $event.target.files);"
          >
          <label
            class="custom-file-label"
            for="structure"
            aria-describedby="structure"
          >
            {{ filePlaceholder}}
          </label>
        </div>
      </div>

      <div class="form-group d-flex">
        <router-link
          :to="{ name: 'Home' }"
          type="button"
          class="btn btn-danger w-100 mr-1 text-capitalize"
        >
          {{ $t('app.forms.buttons.cancel') }}
        </router-link>
        <button
          type="submit"
          class="btn btn-success w-100 ml-1 text-capitalize"
        >
          {{ $t('app.forms.buttons.next') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateSchema',
  data () {
    return {
      schemaName: '',
      file: null
    }
  },
  computed: {
    filePlaceholder () {
      return this.file !== null ? this.file.name : this.$t('forms.createSchema.filePlaceholder')
    }
  },
  methods: {
    async proccessFile (schema) {
      const formData = new FormData()
      formData.set('name', this.schemaName)
      formData.set('structure', this.file)
      const response = await axios.post('api/schemas/process-file', formData)
      this.$router.push({
        name: 'SchemaConfiguration',
        params: {
          name: response.data.name,
          schema: response.data
        }
      })
    },
    filesChange (fieldName, fileList) {
      this.file = fileList[0]
    }
  }
}
</script>
