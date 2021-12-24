<template>
	<view class="">
		<view class="logistics--header">
			<image class="logo" :src="info.logo" mode="aspectFill"></image>
			<view class="info">
				<view class="info--company">快递公司：{{info.company}}</view>
				<view class="info--no" @click="copyNo">{{info.no}}<text>复制</text></view>
			</view>
		</view>
		<view class="logistics--logs">
			<block v-for="(log, logIndex) in logs" :key="logIndex">
				<view class="item">
					<view class="">{{log.state}}</view>
					<view class="">{{log.date}}</view>
					<view class="">{{log.info}}</view>
				</view>
			</block>
		</view>
	</view>
</template>
<script>
	export default{
		props: {
			logs: {
				type: Array,
				default: () => {
					return []
				}
			},
			info: {
				type: Object,
				default: () => {
					return {
						logo	: "",
						no		: "",
						company	: ""
					}
				}
			}
		},
		methods:{
			copyNo(){
				uni.setClipboardData({
					data: this.info.no,
					success: res => {
						uni.showToast({
							title: "单号已复制",
							icon : "none"
						})
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	$margin: 30rpx;
	$radius: 10rpx;
	.logistics--header{
		position: relative;
		background: #3764FF;
		color: white;
		padding: $margin $margin $margin*2;
		min-height: 88rpx;
		.logo{
			width: 88rpx;
			height: 88rpx;
			vertical-align: top;
		}
		.info{
			position: absolute;
			left: $margin * 2 + 88rpx;
			top: $margin;
			font-size: 28rpx;
			&--no{
				line-height: 44rpx;
				font-weight: normal;
				text{
					margin-left: $margin/2;
				}
			}
			&--company{
				height: 44rpx;
				line-height: 40rpx;
				font-weight: normal;
			}
		}
	}
	.logistics--logs{
		position: relative;
		margin-top: -$margin;
		background: white;
		border-radius: $radius $radius 0 0;
		z-index: 9;
		padding: $margin;
		.item{
			position: relative;
			margin-top: $margin;
			padding-left: 50rpx;
			font-size: 28rpx;
			color: #444;
			&::after,
			&::before{
				position: absolute;
				content: " ";
			}
			&::before{
				top: 10rpx;
				left: 10rpx;
				background-color: #ddd;
				height: 200%;
				width: 2rpx;
			}
			&::after{
				width: 22rpx;
				height: 22rpx;
				background-color: #ddd;
				left: 0;
				top: 10rpx;
				border-radius: 50%;
			}
			&:first-child{
				margin-top: 0;
				&::after{
					background-color: #007AFF;
				}
			}
		}
	}
</style>
