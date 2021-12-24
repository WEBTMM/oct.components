
/**
 * Web唐明明
 * 匆匆数载恍如梦，岁月迢迢华发增。
 * 碌碌无为枉半生，一朝惊醒万事空。
 * moduleName: 收银
 */

interface payObj {
	platform : String;
	orderInfo: String | Object;
}

class cashierPay {
	constructor() {

	}
	// 收银台
	pay(payInfo: payObj) {
		return new Promise((resolve, reject) => {
			if (!payInfo.platform) {
				uni.showToast({
					title: '缺少必要参数：支付平台类型',
					icon: 'none'
				})
				return
			}
			if (!payInfo.orderInfo) {
				uni.showToast({
					title: '缺少必要参数：支付参数不能为空',
					icon: 'none'
				})
				return
			}
			uni.requestPayment({
				provider: platform,
				orderInfo: orderInfo,
				success: payRes => {
					resolve(payRes)
				},
				fail: payErr => {
					reject(payErr)
				}
			})
		})
	}
}

let octPay =  new cashierPay()

export { octPay };
