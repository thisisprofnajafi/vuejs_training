new Vue({

    el:'#vue-app',
    data:{
        age: 24,
        x:0,
        y:0
    },
    methods:{
        add:function(inc){
            this.age+=inc
        },
        subtract:function(dec){
            this.age-= dec;
        }
        ,updateXY:function(){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click:function(){
            alert("Are you ready to buy some shit?");
        }
        ,logAge:function(){
            console.log("you insert your age");
        },
        logAge:function(){
            console.log("you insert your name");
        }
    }

});