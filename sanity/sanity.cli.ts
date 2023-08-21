import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '20m2sobp',
    dataset: 'production'
  }
})

const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2021-10-21', // use a UTC date string
})
