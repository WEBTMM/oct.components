<template>
	<view class="content">
		<oct-address
			:lists="addressList"
			:isEdit="false"
			:pattern="true"
			:btnStyle="{'backgroundColor': '#FF6160'}"
			@onAddress="onInfo"
			@onAdd="add"
		>
			<!-- <template #btn>
				按钮
			</template>
			<template #null>
				缺省
			</template> -->
		</oct-address>
	</view>
</template>

<script>
export default {
	data() {
		return {
			addressList: [
				{
					name: '唐明明',
					phone: '18245180131',
					city: '黑龙江省哈尔滨市香坊区',
					address: '旭升南街108号',
					default: false,
					tag: '公司'
				},{
					name: '张静',
					phone: '18245180131',
					city: '黑龙江省哈尔滨市香坊区',
					address: '旭升南街108号',
					default: true,
					tag: '家'
				},{
					name: '法外狂徒张三',
					phone: '18245180131',
					city: '黑龙江省哈尔滨市香坊区',
					address: '旭升南街108号',
					default: false,
					tag: ''
				},{
					name: '王尼玛',
					phone: '18245180131',
					city: '黑龙江省哈尔滨市香坊区',
					address: '旭升南街108号',
					default: false,
					tag: ''
				},{
					name: '纸巾劳斯',
					phone: '18245180131',
					city: '黑龙江省哈尔滨市香坊区',
					address: '旭升南街108号',
					default: false,
					tag: ''
				},{
					name: '张同学',
					phone: '18245180131',
					city: '黑龙江省哈尔滨市香坊区',
					address: '旭升南街108号',
					default: false,
					tag: ''
				},{
					name: '大叔',
					phone: '18245180131',
					city: '黑龙江省哈尔滨市香坊区',
					address: '旭升南街108号',
					default: false,
					tag: ''
				}
			]
		};
	},
	methods: {
		onInfo(val){
			console.log(val)
		},
		add(){
			console.log("新增地址")
		}
	}
};
</script>

<style lang="scss">
	.content{
		background: #F8F8F8;
		overflow: hidden;
		min-height: 100vh;
	}
</style>
