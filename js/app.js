var one = new Vue({

    el: '#vue-app-one',
    data: {
        title:"view one"
    },
    methods: {
       
    },
    computed: {
        greet:function(){
            return "Hello from app one"
        }
    }

});
var two = new Vue({

    el: '#vue-app-two',
    data: {
        title:"view two"
    },
    methods: {
        changeTitle: function(){
            one.title = "This is changed by the second vue app"
        }
    },
    computed: {
         greet:function(){
            return "Hi dude this is app two"
        }
    }

});

