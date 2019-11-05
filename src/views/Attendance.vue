<template>
  <v-sheet height="500">
    <v-calendar
      type="month"
      :now="today"
    ></v-calendar>
    <v-TimePicker label="始まり" value="09:30"></v-TimePicker>
    <v-TimePicker label="終わり" value="18:30"></v-TimePicker>
    <v-btn large>おやすME (๑´ڡ`๑)てへぺロ♡</v-btn>
  </v-sheet>
</template>

<script>
import TimePicker from '@/components/TimePicker.vue'
export default {
  components: {
    'v-TimePicker': TimePicker
  },
  data () {
    return {
      today: new Date().toISOString().substr(0, 10).toString()
    }
  }
}
</script>
