<template>
	<view class="content">
		<navigator class="oct-itme" url="../pay/pay">收银台</navigator>
		<navigator class="oct-itme" url="../logistics/logistics">物流查询</navigator>
		<navigator class="oct-itme" url="../order/order">订单列表</navigator>
		<navigator class="oct-itme" url="../address/address">地址管理</navigator>
		<navigator class="oct-itme" url="../cards/cards">购物车</navigator>
	</view>
</template>

<script>
	import octAuth from '@/uni_modules/oct-auth/js_sdk/oct-auth'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// octAuth.smsLogin()
		},
		methods: {
			demo(e){
				
			}
		}
	}
</script>

<style>
	.content {
		background: #white;
		min-height: 100vh;
		overflow: hidden;
	}
	
	.oct-itme{
		background: white;
		margin: 30rpx 30rpx;
		line-height: 90rpx;
		text-align: center;
		border-radius: 10rpx;
		box-shadow: 0 0 5rpx 5rpx rgba(0,0,0,.05);
		color: #333;
		font-size: 32rpx;
	}
</style>
