import { HTTP } from './common'

export const Note = {
  create (config) {
    return HTTP.post('/notes/', config).then(response => {
      return response.data
    })
  },
  delete (note) {
    return HTTP.delete(`/notes/${note.id}/`)
  },
  list () {
    return HTTP.get('/notes/').then(response => {
      return response.data
    })
  }
}

export const Category = {
  list () {
    return HTTP.get('/categories/').then(response => {
      return response.data
    })
  }
}
