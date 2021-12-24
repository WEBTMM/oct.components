<template>
    <view>
		<view class="order--content" :class="[pattern ? 'chunk': 'broad']">
			<block v-if="!stores">
				<view class="order--header">
					<view class="order--no">
						订单号：{{orderInfo.no}}
					</view>
					<view class="stateText" :style="{color: stateColor}">
						{{orderInfo.stateText}}
					</view>
				</view>
				<view class="order--flex">
					<image class="order--cover" :src="orderInfo.cover" mode="aspectFill"></image>
					<view class="order--title">{{orderInfo.name}}</view>
					<view class="order--count">
						<view class="order--price"><text>￥</text>{{orderInfo.price}}</view>
						<view class="order--sum">共{{orderInfo.sum}}件</view>
					</view>
				</view>
			</block>
			<block v-else>
				<view class="order--group">
					<view class="order--group--header">
						<image class="logo" v-if="orderInfo.store.logo != ''" :src="orderInfo.store.logo" mode="aspectFill"></image>
						<view class="store">
							{{orderInfo.store.name}}
						</view>
						<view class="stateText" :style="{color: stateColor}">
							{{orderInfo.stateText}}
						</view>
					</view>
					<view class="order--group--flex" v-for="(storeItem, storeGood) in orderInfo.storesGoods" :key="storeGood">
						<image class="order--cover" :src="storeItem.cover" mode="aspectFill"></image>
						<view class="order--title">{{storeItem.name}}</view>
						<view class="order--count">
							<view class="order--price"><text>￥</text>{{storeItem.price}}</view>
							<view class="order--sum">共{{storeItem.sum}}件</view>
						</view>
					</view>
				</view>
			</block>
			<slot name="btns">
				<view class="order--btns">
					<block v-for="(btnItem, btnIndex) in orderBtns" :key="btnIndex">
						<view class="item" @click="$emit('onBtn', {type: btnItem.type, order: orderInfo})" :style="btnItem.style">{{btnItem.text}}</view>
					</block>
				</view>
			</slot>
		</view>
    </view>
</template>
<script>
	export default{
		props:{
			// 订单样式否为块
			pattern: {
				type: Boolean,
				default: true
			},
			// 店铺模式
			stores: {
				type: Boolean,
				default: false
			},
			// 订单信息
			orderInfo: {
				type: Object,
				default: () => {
					return {
						cover		: "",
						name		: "",
						price		: "",
						sum			: 1,
						stateText	: ""
					}
				}
			},
			// 状态标签颜色
			stateColor: {
				type	: String,
				default	: "#FF6160"
			},
			// 可操作按钮组
			orderBtns: {
				type	: Array,
				default : () => {
					return [
						{
							text: "订单详情",
							type: "info"
						},{
							text : "删除订单",
							type : "delete",
							style: { color: "#FF6160" }
						}
					]
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	$margin: 30rpx;
	$radius: 10rpx;
	.text-nowrap {
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.text-ellipsis{
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.order--content{
		background: white;
		&.chunk{
			margin: $margin $margin;
			border-radius: $radius;
			padding: $margin;
		}
		&.broad{
			padding: $margin;
			border-bottom: solid 1rpx #ddd;
		}
		.order--header{
			display: flex;
			justify-content: space-between;
			padding-bottom: $margin;
			align-items: center;
			& > .order--no{
				flex: 1;
				margin-right: $margin;
				font-size: 28rpx;
				line-height: 40rpx;
				color: #555;
			}
			&> .stateText{
				font-size: 26rpx;
			}
		}
		.order--flex{
			display: flex;
			align-items: center;
			.order--cover{
				vertical-align: top;
				width: 128rpx;
				height: 128rpx;
			}
			.order--title{
				@extend .text-ellipsis;
				text-align: left;
				flex: 1;
				padding-left: $margin;
				font-size: 28rpx;
				line-height: 40rpx;
			}
			.order--count{
				text-align: right;
				padding-left: $margin;
				line-height: 40rpx;
				.order--price{
					font-size: 30rpx;
					font-weight: bold;
					&>text{
						font-size: 24rpx;
					}
				}
				.order--sum{
					font-size: 26rpx;
					color: #777;
				}
			}
		}
		.order--group{
			.order--group--header{
				padding-bottom: $margin;
				display: flex;
				justify-content: space-between;
				align-items: center;
				&> .logo{
					width: 38rpx;
					height: 38rpx;
					vertical-align: middle;
					margin-right: $margin/2;
				}
				&> .store{
					@extend .text-nowrap;
					flex: 1;
					margin-right: $margin;
					font-size: 28rpx;
					line-height: 40rpx;
					color: #555;
				}
				&> .stateText{
					font-size: 26rpx;
				}
			}
			.order--group--flex{
				@extend .order--flex;
				margin-bottom: $margin - 10;
				&:last-child{
					margin: 0;
				}
			}
		}
		.order--btns{
			display: flex;
			justify-content: flex-end;
			padding-top: $margin - 10;
			&> .item{
				font-size: 26rpx;
				margin-left: $margin/2;
				color: #333;
				line-height: 56rpx;
				border: solid 1rpx #ddd;
				padding: 0 ($margin - 10);
				border-radius: 28rpx;
			}
		}
	}
</style>
