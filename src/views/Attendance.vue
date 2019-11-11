<template>
  <v-sheet height="500">
    <v-calendar
      type="month"
      :now="today"
    >
      <template v-slot:day="day">
        <v-sheet
          v-if="true"
        >
          {{start}}~<br>{{end}}
        </v-sheet>
      </template>
    </v-calendar>
    <v-TimePicker label="始まり" value="09:30" @changeTime='(time)=> this.start = time'></v-TimePicker>
    <v-TimePicker label="終わり" value="18:30" @changeTime='(time)=> this.end = time'></v-TimePicker>
    <v-btn large>おやすME</v-btn>
    <p>Total:{{sum}}</p>
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
      today: new Date().toISOString().substr(0, 10).toString(),
      start: '09:30',
      end: '18:30',
      sum: 0
    }
  }
}
</script>
