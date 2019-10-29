<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
      <v-list dense>
        <v-list-item @click="mvAttendance">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>きんたい</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="mvMemo">
          <v-list-item-action>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>メモ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-Attendance v-if="this.attendance"></v-Attendance>
    <v-Memo v-if="this.memo"></v-Memo>

    <v-app-bar
      app
      color="cyan"
      dark
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-footer
      color="cyan"
      app
    >
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Attendance from './components/Attendance.vue'
import Memo from './components/Memo.vue'
export default {
  components: {
    'v-Attendance': Attendance,
    'v-Memo': Memo
  },
  props: {
    source: String
  },
  data () {
    return {
      drawer: null,
      attendance: true,
      memo: false
    }
  },
  methods: {
    mvAttendance: function () {
      this.memo = false
      this.attendance = true
    },
    mvMemo: function () {
      this.attendance = false
      this.memo = true
    }
  }
}
</script>
