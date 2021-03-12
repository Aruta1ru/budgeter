<template lang="pug">
    form.form-horizontal(@submit="submitForm")
        .form-group
            .col-3
                label.form-label Тип операции
            .col-2
                div(v-for='op in operations')
                    label
                        input(type="radio" :value="op.name" v-model="operationPicked")
                        | {{ op.title }}
        .form-group
            .col-3
                label.form-label Категория
            .col-9
                select(v-model='selectedCategory')
                    option(v-for='category in formCategories', v-bind:value='category.id')
                        | {{ category.title }}
        .form-group
            .col-3
                label.form-label Описание
            .col-9
                textarea.form-input(type="text" v-model="body" rows=3 placeholder="Введите описание операции...")
        .form-group
            .col-3
                label.form-label Сумма
            .col-4
                input.form-input(type="text" v-model="amount" placeholder="Введите сумму операции...")
        .form-group
            .col-3
            .col-9
                button.btn.btn-primary(type="submit") Добавить
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'create-note',
  computed: {
    ...mapGetters(['categories']),
    formCategories: function () {
      // eslint-disable-next-line
      this.selectedCategory = this.operationPicked === 'EXPENSES' ? 5 : 8
      return this.categories.slice().filter(category => category.operation === this.operationPicked)
    }
  },
  data () {
    return {
      'amount': '',
      'body': '',
      'selectedCategory': 5,
      'operationPicked': 'EXPENSES',
      'operations': [
        { name: 'INCOME', title: 'Доход' },
        { name: 'EXPENSES', title: 'Расход' }
      ]
    }
  },
  methods: {
    submitForm (event) {
      this.createNote()
      this.amount = ''
      this.body = ''
      this.selectedCategory = 5
      this.operationPicked = 'EXPENSES'
      event.preventDefault()
    },
    createNote () {
      this.$store.dispatch('createNote', {
        amount: this.amount,
        body: this.body,
        category: this.selectedCategory,
        operation: this.operationPicked
      })
    }
  },
  beforeMount () {
    this.$store.dispatch('getCategories')
  }
}
</script>

<style>

</style>
