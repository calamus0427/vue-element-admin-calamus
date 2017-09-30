// 音乐播放器首页
<template>
    <div>
        <div class="span">
            <div class="set_info">    
                <el-button size="small" type="text">
                    <i class="el-icon-minus"></i>
                </el-button>
                <el-button size="small" type="text"><i class="el-icon-plus"></i></el-button>
                <el-button size="small" type="text"><i class="el-icon-setting"></i></el-button>
            </div>
            <div class="user_info">
                <!-- <cl-icon name="shop" type="fontclass" size="normal"></cl-icon> -->
                
                <cl-icon name="shenfenzheng" type="symbol" sizesvg="normalsvg"></cl-icon>
                <span class="user_name"> {{user_name}}</span>
            </div>
        </div>
        <div class="body_content">
            
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            user_name:"calamus",
        };
    },
    methods:{

    },

}
</script>

<style lang="scss">
.span{
    position:absolute ;
    min-height:3vh;
    margin-left:50ch;
    z-index:100;
    border-bottom:1px solid red;
    width:50ch;
    .set_info{
        position: inherit;
        bottom:0px;
        right:0px;
        // line-height:inherit;
        margin-right:10px;
    }
    .user_info{
        margin-left:5ch;
        // line-height:30px;
        .user_name{
            // line-height:inherit;
            font-size:18px;
            // margin-top:-5px;
        }
    }
}
    .body_content{
        position:absolute ;
        width:50ch;
        height:97vh;
        background-color:#dfe6ec;
        position: relative;
        margin-left:50ch;
    }
</style>
