<template>
	<view class="content">
		<!-- 多店铺 -->
		<view>
			<oct-order
				v-for="(item, storeIndex) in storesArr"
				:key="storeIndex"
				:order-info="item"
				:stores="true"
				:pattern="true"
				@onBtn="onType">
			</oct-order>
		</view>
		<!-- 单店铺 -->
		<view>
			<oct-order
				v-for="(item, arrayIndex) in array"
				:key="arrayIndex"
				:order-info="item"
				@onBtn="onType"
			></oct-order>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 单店铺模式
				array: [
					{
						no			: "2261957223036048580",
						cover		: "https://yanxuan-item.nosdn.127.net/ef838761c8528888213766d3dcc50907.jpg",
						name		: "秋冬潮湿多雨，便携迷你除湿器",
						price		: "59.90",
						sum			: 1,
						stateText	: "已完成",
						store		: {
							name: "网易严选",
							logo: "https://yanxuan-item.nosdn.127.net/4ad8a83fa25e2aab8c05ade4c05e135f.jpg"
						}
					},{
						no			: "2261957223036048580",
						cover		: "https://yanxuan-item.nosdn.127.net/4ad8a83fa25e2aab8c05ade4c05e135f.jpg",
						name		: "稻纯贵州茅台镇新一代酱香型白酒 53度",
						price		: "158.00",
						sum			: 2,
						stateText	: "待支付",
						store		: {
							name: "网易严选",
							logo: "https://yanxuan-item.nosdn.127.net/4ad8a83fa25e2aab8c05ade4c05e135f.jpg"
						}
					}
				],
				// 多店铺模式
				storesArr: [
					{
						store		: {
							name: "网易严选",
							logo: ""
						},
						storesGoods : [
							{
								cover		: "https://yanxuan-item.nosdn.127.net/6fb9dda053d1799568df59bb05908628.png",
								name		: "细菌/异味/粉尘全搞定，无耗材空气净化器X3",
								price		: "1799.00",
								sum			: 1,
							},{
								cover		: "https://yanxuan-item.nosdn.127.net/5c84eaee415c498425ed198f90a15777.jpg",
								name		: "健康好牙第一步，升级版智能牙刷除菌收纳架",
								price		: "89.00",
								sum			: 1,
							},{
								cover		: "https://yanxuan-item.nosdn.127.net/ef918d30e4e6b05c3b3f2e101156b897.png",
								name		: "扫拖不用亲自动手，扫拖两用机器人",
								price		: "158.00",
								sum			: 1,
							}
						],
						stateText	: "待支付"
					},{
						store		: {
							name: "Apple Store旗舰店",
							logo: ""
						},
						storesGoods : [
							{
								cover		: "https://img.alicdn.com/imgextra/i3/1917047079/O1CN011M1IYq22AESE7qsIr_!!2-item_pic.png_430x430q90.jpg",
								name		: "Apple/苹果 iPhone 13",
								price		: "5999.00",
								sum			: 1,
							},{
								cover		: "https://img14.360buyimg.com/n1/s450x450_jfs/t1/204426/36/11925/99080/616dcf29E86dfb629/27e4292aaa125b57.jpg",
								name		: "Apple MacBook Pro 16英寸 M1 Pro芯片(10核中央处理器 16核图形处理器) 16G 512G 深空灰 笔记本电脑 轻薄本 MK183CH/A",
								price		: "18999.00",
								sum			: 1,
							}
						],
						stateText	: "已完成"
					}
				]
			};
		},
		methods: {
			onType(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	.content{
		background: #F8F8F8;
		overflow: hidden;
		min-height: 100vh;
	}
</style>
