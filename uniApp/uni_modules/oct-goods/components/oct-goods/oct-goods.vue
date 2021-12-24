<template>
    <view class="oct--goods">
        <!-- 竖版列表 -->
        <view class="" v-if="plateType === 'portrait'">
            竖版列表
        </view>
        
        <!-- 横版列表 -->
        <view class="" v-if="plateType === 'landscape'">
            横版列表
        </view>
    </view>
</template>
<script>
    
    /* modulesName: 收银台
     * author: 手太欠
     * ----------------------------
     * 板式类型：plateType
	 * 参数类型：String
	 * 支持参数：portrait(竖版)/landscape(横版)
	 * 默认参数：portrait(竖版)
    * */
    export default {
        props: {
            plateType: {
                type    : String,
                default : 'portrait'
            }
        }
    }
    
</script>
<style lang="scss">
</style>
