<template>
	<view>
		<oct-pay
			price="100.00"
			payNo="2021321649127837218918231"
			:payPlatform="['alipay', 'wxpay']"
			@onPay="pay"
		/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			pay(e){
				console.log("支付平台" + e.platform)
				console.log("请求支付接口")
			}
		}
	}
</script>

<style>

</style>
