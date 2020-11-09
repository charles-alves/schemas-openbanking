<template>
  <div class="content">
    <h1>Create Schema</h1>
    <p>Here you can upload a new CSV file with the new schema structure</p>

    <form @submit.prevent="proccessFile()" class="form col-6 offset-3 mt-5">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="Schema Name"
          v-model="schemaName"
        >
      </div>

      <div class="form-group">
        <label for="structure">Structure</label>
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
            Choose your schema file
          </label>
        </div>
      </div>

      <div class="form-group d-flex">
        <router-link
          :to="{ name: 'Home' }"
          type="button"
          class="btn btn-danger w-100 mr-1"
        >
          Cancel
        </router-link>
        <button type="submit" class="btn btn-success w-100 ml-1">Next</button>
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
      formData: new FormData()
    }
  },
  methods: {
    async proccessFile (schema) {
      this.formData.set('name', this.schemaName)
      const response = await axios.post('api/schemas/process-file', this.formData)
      this.$router.push({
        name: 'SchemaConfiguration',
        params: {
          name: response.data.name,
          schema: response.data
        }
      })
    },
    filesChange (fieldName, fileList) {
      this.formData.set(fieldName, fileList[0])
    }
  }
}
</script>
