<template>
  <div id="shop">
      <span>1</span>
  </div>
</template>

<style scoped>

</style>


<script>
export default{
    name:'shop',
    data(){
        return{
            totalMoney:0,
            productList:{},
        }
    },
    filters:{

    },
    mounted:function(){
        this.$nextTick(function(){
            this.shopView() ;
        })
    },
    methods:{
        shopView(){
            var _this = this ;
            this.$http.get('/mock/shop.json').then(function (res) {
                console.log(res.data);
                _this.productList = res.data.result.list ;
                _this.totalMoney = res.data.result.totalMoney ;
                console.log(_this.productList);
            }).catch(function (error) {
                console.log(error);
            });
            },
    },
}
</script>