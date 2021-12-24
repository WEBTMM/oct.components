<template>
	<view class="oct--pay">
		<!-- 支付信息 -->
		<view class="header">
			<view class="price" :style="{color: priceColor}"><text>￥</text>{{price}}</view>
			<view class="info">
				<slot name="pay-info">
					<view class="pay--no">订单号：{{payNo}}</view>
				</slot>
			</view>
		</view>
		<!-- 支付方式 -->
		<radio-group class="radios" @change="radioChang">
			<block v-for="(pay, payIndex) in payPlatform" :key="payIndex">
				<view class="radio--item" v-if="pay === 'wxpay'">
					<label class="radio-flex">
						<view class="radio--text">
							<image class="radio--icon" src="../../static/wechat.png" mode="widthFix"></image>
							微信
						</view>
						<radio value="wxpay" :checked="payIndex === 0" :color="color" />
					</label>
				</view>
				<view class="radio--item" v-if="pay === 'alipay'">
					<label class="radio-flex">
						<view class="radio--text">
							<image class="radio--icon" src="../../static/alipay.png" mode="widthFix"></image>
							支付宝
						</view>
						<radio value="alipay" :checked="payIndex === 0" :color="color" />
					</label>
				</view>
			</block>
		</radio-group>
		<!-- 提交支付 -->
		<view class="footer">
			<button class="footer--pay" :style="{backgroundColor: color}" type="default" @click="subPay">支付</button>
		</view>
	</view>
</template>
<script>
	
	/* modulesName: 收银台
	 * author: 唐明明
	 * ----------------------------
	 * 支付平台：price
	 * 参数类型：String
	 * 支持参数：-
	 * 默认参数：0.00
	 * ----------------------------
	 * 支付平台：payPlatform
	 * 参数类型：Array
	 * 支持参数：wxpay/alipay
	 * 默认参数：["wxpay", "alipay"]
	 * ----------------------------
	 * 支付编号：payNo
	 * 参数类型：String
	 * 支持参数：-
	 * 默认参数：-
	 * 定义插槽pay-info后无效
	 * ----------------------------
	 * 主题颜色：color
	 * 参数类型：String
	 * 支持参数：-
	 * 默认参数：#3764FF
	 * ----------------------------
	 * 价格颜色：priceColor
	 * 参数类型：String
	 * 支持参数：-
	 * 默认参数：#FF6160
	 * ----------------------------
	 * */
	 
	export default{
		props: {
			// 支付方式配置
			payPlatform: {
				type: Array,
				default: ()=> {
					return ["wxpay", "alipay"]
				}
			},
			// 支付编号
			payNo: {
				type	: String,
				default	: "-"
			},
			// 主题颜色
			color : {
				type	: String,
				default	: "#3764FF"
			},
			// 价格颜色
			priceColor : {
				type	: String,
				default	: "#fa3534"
			},
			// 价格
			price: {
				type:String,
				default: '0.00'
			}
		},
		data(){
			return {
				platform: this.payPlatform[0]
			}
		},
		methods:{
			subPay(){
				this.$emit("onPay", {
					platform: this.platform
				})
			},
			radioChang(e){
				this.platform = e.detail.value
			}
		}
	}
</script>
<style lang="scss">
	$margin: 30rpx;
	$radius: 10rpx;
	
	.oct--pay{
		padding: $margin;
		&>.header{
			text-align: center;
			padding: ($margin*2) $margin;
			.price{
				font-size: 58rpx;
				font-weight: bold;
				&>text{
					font-size: 70%;
				}
			}
			.info{
				.pay--no{
					color: #82848a;
					font-size: 30rpx;
				}
			}
		}
		&>.radios{
			.radio--item{
				margin-bottom: $margin;
				background: white;
				border-radius: $radius;
				.radio-flex{
					height: 100rpx;
					padding: 0 $margin;
					align-items: center;
					display: flex;
					justify-content: space-between;
					font-size: 30rpx;
					color: #333;
					& > radio{
						transform:scale(0.8)
					}
				}
				.radio--text{
					.radio--icon{
						width: 52rpx;
						height: 52rpx;
						margin: 0;
						vertical-align: middle;
						margin-right: $margin/3;
					}
				}
			}
		}
		&>.footer{
			margin-top: $margin;
			.footer--pay{
				height: 90rpx;
				line-height: 90rpx;
				color: white;
				border-radius: $radius;
				font-size: 34rpx;
				font-weight: bold;
				&::after{
					border: none;
				}
			}
		}
	}
</style>
