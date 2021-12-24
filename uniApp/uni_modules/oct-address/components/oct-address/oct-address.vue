<template>
	<scroll-view class="address--scroll" scroll-y="true" >
		<view class="address--footer">
			<view class="address--newAdd" @click="$emit('onAdd')" :style="btnStyle">
				<slot name="btn">新建收货地址</slot>
			</view>
		</view>
		<block v-if="lists.length > 0">
			<view class="address--lists">
				<view class="address--item" :class="[pattern ? 'chunk': 'broad', {'edit': isEdit}]" v-for="(item, index) in lists" :key="index">
					<view class="city">
						<text v-if="item.default" class="city--tag city--default">默认</text>
						<text v-if="item.tag && item.tag != ''" class="city--tag city--type">{{item.tag}}</text>
						{{item.city}}
					</view>
					<view class="address">{{item.address}}</view>
					<view class="name">{{item.name}}<text>{{item.phone}}</text></view>
					<view class="edit" @click="$emit('onAddress', item)">{{isEdit ? '编辑' : '选择'}}</view>
				</view>
			</view>
		</block>
		<block v-else>
			<view class="address--null">
				<slot name="null">
					<image class="null--icon" v-if="nullIcon != ''" :src="nullIcon" mode="widthFix"></image>
					<view class="null--text">{{nullText}}</view>
				</slot>
			</view>
		</block>
	</scroll-view>
</template>
<script>
	export default{
		props: {
			// 订单样式否为块
			pattern: {
				type: Boolean,
				default: true
			},
			// 地址列表
			lists: {
				type: Array,
				default: () => {
					return []
				}
			},
			// 是否为管理列表
			isEdit: {
				type: Boolean,
				default: true
			},
			// 状态标签颜色
			stateColor: {
				type	: Object,
				default	: () => {
					return {}
				}
			},
			// 底部按钮颜色
			btnStyle: {
				type	: Object,
				default	: () => {
					return {}
				}
			},
			// 缺省页提示文字
			nullText: {
				type	: String,
				default : '还没有创建收货地址~'
			},
			// 缺省页提示icon
			nullIcon: {
				type	: String,
				default : () => {
					return require('../../static/null-icon.png')
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	$margin: 30rpx;
	$radius: 10rpx;
	
	.address--footer{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: white;
		padding: $margin;
		z-index: 999;
		.address--newAdd{
			
			background-color: #3764FF;
			color: white;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: $radius;
			text-align: center;
			font-size: 32rpx;
			margin-bottom: env(safe-area-inset-bottom);
			margin-bottom: constant(safe-area-inset-bottom);
		}
	}
	
	.address--scroll{
		height: 100vh;
		width: 100vw;
		box-sizing: border-box;
		.address--lists{
			padding-bottom: ($margin*3) + 90rpx;
			padding-bottom: ($margin*3) + 90rpx;
			overflow: hidden;
			.address--item{
				position: relative;
				background: white;
				&.chunk{
					margin: $margin;
					border-radius: $radius;
					padding: $margin ($margin + 120rpx) $margin $margin;
				}
				&.broad{
					padding: $margin;
					border-bottom: solid 1rpx #ddd;
				}
				&.edit{
					color: #007AFF;
				}
				&>.edit{
					position: absolute;
					right: $margin;
					top: 50%;
					margin-top: -45rpx;
					line-height: 90rpx;
					width: 90rpx;
					text-align: center;
					font-size: 28rpx;
					color: #FF6160;
				}
				&>.city{
					font-size: 26rpx;
					color: #888;
					.city--tag{
						vertical-align: middle;
						margin-right: $margin/2;
					}
					.city--default{
						background: #FF6160;
						color: white;
						padding: 0 $margin/3;
						border-radius: $radius;
						font-size: 22rpx;
					}
					.city--type{
						background: #007AFF;
						padding: 0 $margin/3;
						border-radius: $radius;
						color: white;
						font-size: 22rpx;
					}
				}
				&>.address{
					font-size: 30rpx;
					color: #333;
					line-height: 30rpx;
					padding: $margin/3 0;
					font-weight: bold;
				}
				&>.name{
					font-size: 26rpx;
					color: #888;
					text{
						padding-left: $margin;
					}
				}
				&:last-child{
					margin-bottom: env(safe-area-inset-bottom);
					margin-bottom: constant(safe-area-inset-bottom);
				}
			}
		}
	}
	
	.address--null{
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.null--icon{
			width: 188rpx;
		}
		.null--text{
			color: #555;
			font-size: 28rpx;
			margin-top: $margin;
		}
	}
</style>
