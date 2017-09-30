<template>
<span >
    <i  
        v-show="type === 'fontclass'"
        class="icon"
        :class="[size,'cl-icon-'+name]"
        :style="{'color':color}">
    </i>
   <svg 
        v-show="type === 'symbol'"
        class="iconsvg" 
        aria-hidden="true" 
        :class="sizesvg">
        <use :xlink:href="'#cl-icon-'+name"></use>
    </svg>
</span>

</template>
<script>
  import './font/iconfont.js';  
</script>

<script>

    export default{
        name:'CLIcon',
        props:{
            name:{
                type:String,
                required:true,
            },
            type:{
                type:String,
                default:'fontclass',
            },
            size:{
                type:String,
                default:'normal',
            },
            sizesvg:{
                type:String,
                default:'normalsvg',
            },
            color:{
                type:String,
                default:'#000',
            }
        }
    };
</script>

<style lang="scss" scoped>
@import './font/iconfont.css';
$small:14px;
$normal:18px;
$large:28px;
.icon{
    position: relative;
    z-index:0 ;
    display: inline;    
    border-radius:4px;
    list-style-type: square none;
    text-align:center ;
    cursor:text;
}
.iconsvg{
    position: relative;
    top:1%;
    z-index:0 ;
    display: inline;
    border-radius:4px;
    list-style-type: square none;
    text-align:center ;
    cursor:text;
}
.small{
    font-size:$small;
    top:0.02 * $small}
.normal{
    font-size:$normal;
    top:0.02777 * $normal
}
.large{
    font-size:$large;
    top:0.16 * $large
    }
.smallsvg{
    width:$small;
    height:$small;
    top:0.12 * $small ;}
.normalsvg{
     width:$normal;
    height:$normal;
    top:0.15 * $normal ;
}
.largesvg{
    width:$large;
    height:$large;
    top:0.3 * $large ;
    }
</style>

