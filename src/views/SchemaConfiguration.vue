<template>
  <div class="container">
    <h1>{{ $t('forms.schemaConfiguration.title') }}</h1>
    <p>{{ $t('forms.schemaConfiguration.description') }}</p>

    <form @submit.prevent="save()" class="form mt-5 col-6 offset-3">
      <div class="form-group" v-for="field in fields" :key="field.name">
        <label :for="field.name">{{ field.name }}</label>
        <input
          :id="field.name"
          :name="field.name"
          type="text"
          class="form-control"
          v-model="field.type"
        >
      </div>

      <div class="form-group d-flex mb-5">
        <router-link :to="{ name:'Home' }" class="btn btn-danger w-100 mr-1">
          {{ $t('app.forms.buttons.cancel') }}
        </router-link>
        <button type="submit" class="btn btn-success w-100 ml-1">
          {{ $t('forms.schemaConfiguration.buttons.createSchema') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

import { ADD_SCHEMA_MENU } from '../store/mutations-type.js'

export default {
  name: 'SchemaConfiguration',
  props: {
    schema: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      fields: []
    }
  },
  mounted () {
    const structure = this.$route.params.schema.structure

    this.fields = this.filterObjectsFields(structure)
  },
  methods: {
    ...mapMutations({
      addSchema: ADD_SCHEMA_MENU
    }),
    async save () {
      for (const f of this.fields) {
        const field = f.name.split('.')
          .reduce((a, v) => a[v], this.schema.structure)
        field.meta.fieldType = f.type
      }

      await axios.post('api/schemas', this.schema)
      this.addSchema({
        name: this.schema.name
      })
      this.$router.push({
        name: 'SchemaViewer',
        params: {
          name: this.schema.name
        }
      })
    },

    filterObjectsFields (obj) {
      const result = []
      const entries = Object.entries(obj)
        .filter(([k]) => k !== 'meta')

      for (const [key, value] of entries) {
        if (this.isObjectField(value)) {
          result.push(this.createField(key, value.meta.fieldType))
        }

        if (this.existsSubfields(value)) {
          const fields = this.mapSubfields({ key, value })
          result.push(...fields)
        }
      }
      return result
    },

    isObjectField (value) {
      const fields = this.getFields(value)
      return (
        fields.length !== 0 ||
        value.meta.fieldType === 'Enum' ||
        value.meta.fieldType === 'Field'
      )
    },

    createField (name, type) {
      return { name, type }
    },

    existsSubfields (value) {
      const fields = this.getFields(value)
      return fields.length !== 0
    },

    getFields (value) {
      return Object.keys(value)
        .filter(k => k !== 'meta')
    },

    mapSubfields ({ key, value }) {
      return this.filterObjectsFields(value)
        .map(f => this.createField(`${key}.${f.name}`, f.type))
    }
  }
}
</script>
