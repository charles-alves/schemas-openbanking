export default {
  app: {
    title: 'Open Banking',
    forms: {
      name: 'name',
      namePlaceholder: 'Schema name',
      structure: 'structure',
      buttons: {
        cancel: 'Cancel',
        next: 'Next'
      }
    },
    metaFields: {
      fieldType: 'Type',
      description: 'Description',
      size: 'Size',
      required: 'Required',
      validation: 'Validation',
      allowedValues: 'Allowed Values',
      observation: 'Observation'
    }
  },
  menu: {
    buttonCreate: 'Create Schema'
  },
  forms: {
    createSchema: {
      title: 'Create Schema',
      description: 'Here you can upload a new CSV file with the new schema structure',
      filePlaceholder: 'Select the Schema file'
    },
    schemaConfiguration: {
      title: 'Schema Configuration',
      description: 'Map the schema fields with the right entity name',
      buttons: {
        createSchema: 'Create Schema'
      }
    }
  },
  views: {
    schemaViewerFields: {
      description: 'To access this JSON directly click or copy the link below:'
    }
  }
}
