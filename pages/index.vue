<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    console.log(process.env.VUE_APP_BASE_API);
  },
}
</script>
