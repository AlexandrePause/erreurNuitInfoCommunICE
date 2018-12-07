<template>
   <div>
     <h1>{{ msg }}</h1>
       Hello {{ $route.params.number }}
   </div>
</template>
<script>
  export default {
    name: 'firstroute',
    data () {
      return {
      msg: 'FirstRoute'
    }
  }
}
</script>