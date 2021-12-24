<template>
    <view class="">
        <oct-goods :plateType="plateType"></oct-goods>
        <view class="" @click="replaceType()">
            更换样式
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                plateType: 'portrait'  // 列表样式 portrait(竖版) landscape(横版)
            }
        },
        methods: {
            replaceType() {
                this.plateType = this.plateType == 'landscape' ? 'portrait' : 'landscape'
            }
        }
    }
</script>

<style>
</style>
