<template>
	<div>
    	<div class="title">vue simple swiper</div>
    	<div class="title2">horizontal</div>
    	<simple-swiper direction="horizontal" :paginationVisible="true">
    		<div class="simple-swiper-silde"><span>page 1</span></div>
            <div class="simple-swiper-silde"><span>page 2</span></div>
            <div class="simple-swiper-silde"><span>page 3</span></div>
    	</simple-swiper>
    	<div class="title2">vertical</div>
        <simple-swiper direction="vertical" :paginationVisible="false">
            <div class="simple-swiper-silde blue"><span>page 1</span></div>
            <div class="simple-swiper-silde red "><span>page 2</span></div>
            <div class="simple-swiper-silde yellow"><span>page 3</span></div>
        </simple-swiper>
    	<div class="title2">horizontal loop</div>
         <simple-swiper direction="horizontal" :paginationVisible="true" :loop="true">
            <div class="simple-swiper-silde blue"><span>page 1</span></div>
            <div class="simple-swiper-silde red "><span>page 2</span></div>
            <div class="simple-swiper-silde yellow"><span>page 3</span></div>
        </simple-swiper>
    	<div class="title2">horizontal autoplay</div>
        <simple-swiper direction="horizontal" :autoPlay="2000" >
            <div class="simple-swiper-silde blue"><span>page 1</span></div>
            <div class="simple-swiper-silde red "><span>page 2</span></div>
            <div class="simple-swiper-silde yellow"><span>page 3</span></div>
        </simple-swiper>
        <div class="title2">asy data</div>
         <simple-swiper direction="vertical" :autoPlay="3000" ref="asyDemo">
            <div class="simple-swiper-silde" v-for="item in asyItems" :key="item.id">page{{item.name}}</div>
         </simple-swiper>
	</div>
</template>
<script>
	//引用外部css
	import './asset/css/common.scss';
	import simpleSwiper from './view/simple-swiper.vue';
	export default {
    data(){
        return{
            asyItems:[],
        }
    },
    components: {
    	'simple-swiper':simpleSwiper
    },
    methods:{
        
    },
    mounted(){
       setTimeout(()=>{
            this.asyItems = [{'id':1,'name':1},{'id':2,'name':2},{'id':3,'name':3}]
            this.$refs.asyDemo.updateSlidesBindEvent();
       },300)
    },
    destroyed(){

    }
}
</script>
<style lang="scss">
	.title{
		font-size:0.32rem;
		padding:0.3rem 0.2rem;
	}
	.title2{
		padding:0.2rem;
	}
    .simple-swiper-silde{
        text-align: center;
        background: #ccc;
        line-height: 200px;
    }
    .blue{
        background-color:blue;
        color:#fff;
    }
    .yellow{
        background-color:yellow;
        color:#333;
    }
    .red{
        background-color:red;
        color:#fff;
    }
</style>
