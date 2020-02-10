

var one = new Vue({
    el: '#vue-app',
    data: {
        output:'Your Fav Food'
    },
    methods: {
       readRefs:function(){
        this.output = this.$refs.input.value
        console.log(this.$refs.test.innerHTML)
       }
    }
   

});

