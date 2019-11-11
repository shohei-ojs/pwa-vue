<template>
  <div>
    <small>{{label}}：</small>
    <input id="time" type="time" :value=value @change="this.changeTime">
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    value: String
  },
  methods: {
    changeTime: function () {
      this.time = document.getElementById('time').value
      this.$emit('changeTime', this.time)
    }
  },
  computed: {
    // 算出 getter 関数
    vulue: function () {
      // `this` は vm インスタンスを指します
      return value
    }
  }
}
</script>
