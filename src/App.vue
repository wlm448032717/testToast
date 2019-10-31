<template>
  <div id="app">
      <div @click="xxx">点击</div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
   
  },
 
  mounted(){
    

  },
  methods:{
    xxx(){
      this.$toast('this is toast!',{
      closeButton:{
        text:'我知道啦',
        callback(){
          console.log('回调 ');
        }
      }
    })
    }
  }
}
</script>

<style lang="scss">
#app {
  
}
</style>
