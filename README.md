<h1>vue-simple-swiper v1.0</h1>
a simple vue swiper


<h3>step1:npm install  step2:npm run dev </h3>

see demo


<h3>API params</h3>

<table>
	<tr>
		<th>params</th><th>description</th><th>default</th>
	</tr>
	<tr>
		<td>direction</td><td>slide change direction </td><td>vertical|horizontal</td>
	</tr>
	<tr>
		<td>paginationVisible</td><td>pagination display</td><td>false|true</td>
	</tr> 
	<tr>
		<td>loop</td><td>slide can loop</td><td>false|true</td>
	</tr>
	<tr>
		<td>speed</td><td>slide transform time(ms)</td><td>500</td>
	</tr>
	<tr>
		<td>performanceMode</td><td>slide can change by finger moving</td><td>false|true</td>
	</tr>
	<tr>
		<td>autoPlay</td><td>slide loop auto play</td><td>false|true</td>
	</tr>
	<tr>
		<td>initPage</td><td>init defalut page number</td><td>1</td>
	</tr>
	<tr>
		<td>timing</td><td>slide transition-timing-function</td><td>ease|ease-in|ease-out|...</td>
	</tr>
</table>


<h3>API methods</h3>

<table>
	<tr>
		<th>methods</th><th>description</th><th>param</th>
	</tr>
	<tr>
		<td>next</td><td>go next page</td><td>--</td>
	</tr>
	<tr>
		<td>prev</td><td>go prev page</td><td>--</td>
	</tr>
	<tr>
		<td>setPage</td><td>go intent page</td><td>pageNumber</td>
	</tr>
	<tr>
		<td>updateSlideBindEvent</td><td>if you have asy function to get slides data, you must rebinding and reinit. you still can income param pageNumber set the init page</td><td>pageNumber</td>
	</tr>
</table>


<h3>API events</h3>

<table>
	<tr>
		<th>events</th><th>description</th><th>callback params</th>
	</tr>
	<tr>
		<td>slideChangeStart</td><td>start change slide callback</td><td>pageNumber,el</td>
	</tr>
	<tr>
		<td>slideChangeEnd</td><td>change slide end callback</td><td>pageNumber,el</td>
	</tr>
	<tr>
		<td>slideRevertStart</td><td>not change slide start callback</td><td>pageNumber,el</td>
	</tr>
	<tr>
		<td>slideRevertEnd</td><td>not change slide end callback</td><td>pageNumber,el</td>
	</tr>
	<tr>
		<td>slideMove</td><td>slide move callback</td><td>offset,el</td>
	</tr>
</table>


<h3>API demos</h3>

```
<simple-swiper direction="horizontal" :paginationVisible="true">
	<div class="simple-swiper-silde"><span>page 1</span></div>
    <div class="simple-swiper-silde"><span>page 2</span></div>
    <div class="simple-swiper-silde"><span>page 3</span></div>
</simple-swiper>
```

```
<div class="title2">vertical</div>
<simple-swiper direction="vertical" :paginationVisible="false">
    <div class="simple-swiper-silde blue"><span>page 1</span></div>
    <div class="simple-swiper-silde red "><span>page 2</span></div>
    <div class="simple-swiper-silde yellow"><span>page 3</span></div>
</simple-swiper>
```

```
<div class="title2">horizontal loop</div>
 <simple-swiper direction="horizontal" :paginationVisible="true" :loop="true">
    <div class="simple-swiper-silde blue"><span>page 1</span></div>
    <div class="simple-swiper-silde red "><span>page 2</span></div>
    <div class="simple-swiper-silde yellow"><span>page 3</span></div>
</simple-swiper>
```

```
<div class="title2">horizontal autoplay</div>
<simple-swiper direction="horizontal" :autoPlay="2000" >
    <div class="simple-swiper-silde blue"><span>page 1</span></div>
    <div class="simple-swiper-silde red "><span>page 2</span></div>
    <div class="simple-swiper-silde yellow"><span>page 3</span></div>
</simple-swiper>
```

```
<div class="title2">asy data</div>
 <simple-swiper direction="vertical" :autoPlay="3000" ref="asyDemo">
    <div class="simple-swiper-silde" v-for="item in asyItems" :key="item.id">page{{item.name}}</div>
 </simple-swiper>

  mounted(){
       setTimeout(()=>{
            this.asyItems = [{'id':1,'name':1},{'id':2,'name':2},{'id':3,'name':3}]
            this.$refs.asyDemo.updateSlidesBindEvent();
       },300)
    }
```


<h3>Thanks for your attention  and  if you have problems, you can give me issues ~</h3>
