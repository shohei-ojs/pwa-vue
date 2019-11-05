<template>
  <!-- base on vuetify default application markup -->
  <v-app id="inspire">
    <!-- burger menu -->
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

    <!-- main content -->
    <v-content>
      <v-container
        fluid
      >
        <v-Attendance v-if="this.attendance"></v-Attendance>
        <v-Memo v-if="this.memo"></v-Memo>
      </v-container>
    </v-content>

    <!-- header -->
    <v-app-bar
      app
      color="cyan"
      dark
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>きんたいくん</v-toolbar-title>
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
import Attendance from '@/views/Attendance.vue'
import Memo from '@/views/Memo.vue'
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
