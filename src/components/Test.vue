<template>
<div>
  <div id="desert">
        <div class="circular">
          <img src="../assets/desert.jpg" id="background">
		  <img src="../assets/IMGError404.png" id="imgErrorC">
          <img v-if="imgSeen1" src="../assets/etoile1.png" id="etoile1">
          <img v-if="imgSeen2" src="../assets/etoile2.png" id="etoile2">
          <img v-if="imgSeen3" src="../assets/etoile3.png" id="etoile3">
          <img v-if="imgSeen4" src="../assets/etoile1.png" id="etoile4">
          <img v-if="imgSeen5" src="../assets/etoile2.png" id="etoile5">
          <img v-if="imgSeen6" src="../assets/etoile2.png" id="etoile6">
          <img v-if="imgSeen7" src="../assets/etoile3.png" id="etoile7">
          <img v-if="imgSeen8" src="../assets/etoile3.png" id="etoile8">
          <img v-if="imgSeen9" src="../assets/etoile1.png" id="etoile9">
          <img v-if="imgSeen10" src="../assets/etoile1.png" id="etoile10">
          <img v-if="imgSeen11" src="../assets/etoile3.png" id="etoile11">
          <img v-if="imgSeen12" src="../assets/etoile1.png" id="etoile12">
          <img v-if="imgSeen13" src="../assets/etoile3.png" id="etoile13">
          <img v-if="imgSeen14" src="../assets/etoile2.png" id="etoile14">
          <img v-if="imgSeen15" src="../assets/etoile3.png" id="etoile15">
          <img v-if="imgSeen16" src="../assets/etoile1.png" id="etoile16">
          <img v-if="imgSeen17" src="../assets/etoile3.png" id="etoile17">
          <img v-if="imgSeen18" src="../assets/etoile1.png" id="etoile18">
          <img v-if="imgSeen19" src="../assets/etoile1.png" id="etoile19">
          <img v-if="imgSeen20" src="../assets/etoile2.png" id="etoile20">
          <img v-if="imgSeen21" src="../assets/etoile3.png" id="etoile21">
        </div>
        
    </div>

</div>
  
  
</template>
<script>
  export default {
    name: 'firstroute',
    data () {
      return {
      msg: 'FirstRoute',
      imgSeen1: false,
      imgSeen2: false,
      imgSeen3: false,
      imgSeen4: false,
      imgSeen5: false,
      imgSeen6: false,
      imgSeen7: false,
      imgSeen8: false,
      imgSeen9: false,
      imgSeen10: false,
      imgSeen11: false,
      imgSeen12: false,
      imgSeen13: false,
      imgSeen14: false,
      imgSeen15: false,
      imgSeen16: false,
      imgSeen17: false,
      imgSeen18: false,
      imgSeen19: false,
      imgSeen20: false,
      imgSeen21: false
    }
  },
    mounted() {
    window.setInterval(() => {
        this.imgSeen1 = true;
        this.imgSeen4 = true;
        this.imgSeen7 = true;
        this.imgSeen10 = true;
        this.imgSeen13 = true;
        this.imgSeen16 = true;
        this.imgSeen19 = true;
    },1000);
    window.setInterval(() => {
        this.imgSeen2 = true;
        this.imgSeen5 = true;
        this.imgSeen8 = true;
        this.imgSeen11 = true;
        this.imgSeen14 = true;
        this.imgSeen17 = true;
        this.imgSeen20 = true;
    },1500);
    window.setInterval(() => {
        this.imgSeen3 = true;
        this.imgSeen6 = true;
        this.imgSeen9 = true;
        this.imgSeen12 = true;
        this.imgSeen15 = true;
        this.imgSeen18 = true;
        this.imgSeen21 = true;
    },2000);
    window.setInterval(() => {
        this.imgSeen1 = false;
        this.imgSeen4 = false;
        this.imgSeen7 = false;
        this.imgSeen10 = false;
        this.imgSeen13 = false;
        this.imgSeen16 = false;
        this.imgSeen19 = false;
    },3000);
    window.setInterval(() => {
        this.imgSeen2 = false;
        this.imgSeen5 = false;
        this.imgSeen8 = false;
        this.imgSeen11 = false;
        this.imgSeen14 = false;
        this.imgSeen17 = false;
        this.imgSeen20 = false;
    },4500);
    window.setInterval(() => {
        this.imgSeen3 = false;
        this.imgSeen6 = false;
        this.imgSeen9 = false;
        this.imgSeen12 = false;
        this.imgSeen15 = false;
        this.imgSeen18 = false;
        this.imgSeen21 = false;
    },5500);
  }
}
</script>