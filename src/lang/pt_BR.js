export default {
  app: {
    title: 'Open Banking',
    forms: {
      name: 'nome',
      namePlaceholder: 'Nome do Schema',
      structure: 'estrutura',
      buttons: {
        cancel: 'Cancelar',
        next: 'Próximo'
      }
    },
    metaFields: {
      fieldType: 'Tipo',
      description: 'Descrisção',
      size: 'Tamanho',
      required: 'Obrigatório',
      validation: 'Validação',
      allowedValues: 'Valores permitidos',
      observation: 'Observações'
    }
  },
  menu: {
    buttonCreate: 'Criar Schema'
  },
  forms: {
    createSchema: {
      title: 'Criar Schema',
      description: 'Aqui você pode fazer o upload do arquivo CSV contendo a estrutura do Schema',
      filePlaceholder: 'Selecione o arquivo do Schema'
    },
    schemaConfiguration: {
      title: 'Configuração de Schema',
      description: 'Mapeie os campos do schema com o nome correto das entidades',
      buttons: {
        createSchema: 'Criar Schema'
      }
    }
  },
  views: {
    schemaViewerFields: {
      description: 'Para acessar o JSON diretamente, click ou copie o link abaixo:'
    }
  }
}
