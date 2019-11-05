<template>
  <div>
    <small>{{label}}：</small>
    <input type="time" :value=value>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    value: String
  }
}
</script>
