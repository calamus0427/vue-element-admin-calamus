<template>
  <div id="icon">
    <el-form :model="searchForm" :inline="true" :rules="rulesSearch" ref="searchForm" label-width="100px" >
        <el-form-item prop="name" label="图标名称：">
            <el-input size="small" v-model="searchForm.name" placeholder="请输入图标名字" >
                <template slot="prepend">el-icon-</template>
            </el-input>
        </el-form-item>
        <el-form-item prop="type" label="图标类型：">
            <el-select size="small" clearable  v-model="searchForm.type" placeholder="请选择图标类型">
                <el-option
                    label="字体图标"
                    value="fontclass">
                </el-option>
                <el-option
                    label="彩色图标svg"
                    value="symbol">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item v-if="searchForm.type === 'symbol'" prop="sizesvg" label="图标大小：">
            <el-select size="small" clearable v-model="searchForm.sizesvg" placeholder="请选择图标类型">
                <el-option
                    label="小"
                    value="smallsvg">
                </el-option>
                <el-option
                    label="中"
                    value="normalsvg">
                </el-option>
                <el-option
                    label="大"
                    value="largesvg">
                </el-option>
            </el-select>
        </el-form-item>
                <el-form-item v-else prop="size" label="图标大小：">
            <el-select size="small" clearable v-model="searchForm.size" placeholder="请选择图标类型">
                <el-option
                    label="小"
                    value="small">
                </el-option>
                <el-option
                    label="中"
                    value="normal">
                </el-option>
                <el-option
                    label="大"
                    value="large">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item v-if="searchForm.type === 'fontclass'" prop="color" label="图标颜色：" >
            <el-color-picker size="small" v-model="searchForm.color" show-alpha></el-color-picker>
        </el-form-item>
    </el-form>    
    <el-card >
        <cl-icon v-if="searchForm.type === 'symbol'" :name="searchForm.name"  :type="searchForm.type" :sizesvg="searchForm.sizesvg"></cl-icon>
        <cl-icon v-else :name="searchForm.name" :type="searchForm.type" :size="searchForm.size" :color="searchForm.color"></cl-icon>        
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">
                <pre v-if="searchForm.type === 'symbol'">
                    &lt;cl-icon name='{{searchForm.name}}' sizesvg='{{searchForm.sizesvg}}' type='{{searchForm.type}}'  &gt;&lt;cl-icon&gt;
                </pre>  
                <pre v-else>
                    &lt;cl-icon name='{{searchForm.name}}' size='{{searchForm.size}}' type='{{searchForm.type}}' color='{{searchForm.color}}' &gt;&lt;cl-icon&gt;
                </pre>   
            </span>
        </div>
    </el-card>  
    <router-link :to="url" >查看全部图标</router-link>
    <div v-show="show">
        <router-view ></router-view>
    </div>
  </div>
</template>

<script>
    // import CLIcon from '../../components/icon/icon.vue'
    export default {
        name:'icon',
            data:function(){
                return {
                    show:true ,
                    searchForm:{
                        name:'',
                        type:'fontclass',
                        color:'rgba(0,0,0,1)',
                        size:'normal',
                        sizesvg:'normalsvg',
                    },
                    rulesSearch:{},
                }
            },
            methods:{
                showdiv(){
                    this.show =( this.show == false ? true :false) ;
                    console.log(this.show);
                }
            },
            computed:{
                url:function(){
                    var  ourl = '/icon/example' ;  
                               
                    return ourl ;
                
                    }
            }
  }

</script>