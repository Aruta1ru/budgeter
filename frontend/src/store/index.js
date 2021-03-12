import Vue from 'vue'
import Vuex from 'vuex'
import { Note, Category } from '../api/notes'
import {
  ADD_NOTE,
  REMOVE_NOTE,
  SET_NOTES,
  SET_CATEGORIES
} from './mutation-types.js'

Vue.use(Vuex)

const state = {
  notes: [],
  categories: []
}

const getters = {
  notes: state => state.notes,
  categories: state => state.categories
}

const mutations = {
  [ADD_NOTE] (state, note) {
    state.notes = [note, ...state.notes]
  },
  [REMOVE_NOTE] (state, { id }) {
    state.notes = state.notes.filter(note => {
      return note.id !== id
    })
  },
  [SET_NOTES] (state, { notes }) {
    state.notes = notes
  },
  [SET_CATEGORIES] (state, { categories }) {
    state.categories = categories
  }
}

const actions = {
  createNote ({ commit }, noteData) {
    Note.create(noteData).then(note => {
      commit(ADD_NOTE, note)
    })
  },
  deleteNote ({ commit }, note) {
    Note.delete(note).then(response => {
      commit(REMOVE_NOTE, note)
    })
  },
  getNotes ({ commit }) {
    Note.list().then(notes => {
      commit(SET_NOTES, { notes })
    })
  },
  getCategories ({ commit }) {
    Category.list().then(categories => {
      commit(SET_CATEGORIES, { categories })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
