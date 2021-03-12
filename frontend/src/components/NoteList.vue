<template lang="pug">
    #app
        .card(v-for="note in notes")
            .card-header
                button.btn.btn-clear.float-right(@click="deleteNote(note)")
                .card-title {{ operation[note.operation] }} | {{ categories[note.category-1].title }}
                .card-subtitle {{ note.created_at }}
            .card-body
                .col-9 {{ note.body }}
                .col-3 {{ note.amount }} &#x20bd;
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'note-list',
  data () {
    return {
      operation: {
        'EXPENSES': 'Расходы',
        'INCOME': 'Доходы'
      }
    }
  },
  computed: mapGetters(['notes', 'categories']),
  methods: {
    deleteNote (note) {
      this.$store.dispatch('deleteNote', note)
    }
  },
  beforeMount () {
    this.$store.dispatch('getNotes')
  }
}
</script>

<style>
    header {
        margin-top: 50px;
    }
</style>
