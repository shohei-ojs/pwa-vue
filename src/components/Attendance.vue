<template>
  <v-sheet height="500">
    <v-calendar
      type="month"
      :now="today"
    ></v-calendar>
  </v-sheet>
</template>

<script>
export default {
  data () {
    return {
      today: new Date().toISOString().substr(0, 10).toString()
    }
  }
}
</script>
