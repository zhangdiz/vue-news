<template>
    <div class="toast-wrapper layout-rc">
        <div class="toast-box" v-html="message"></div>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
    props: { message: String }
};
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
@import "~common/stylus/variable"

.toast-wrapper
    position fixed
    z-index 1001
    top 50%
    left 50%
    transform translate(-50%, -50%)
    padding 0
    animation toast-show 2.5s forwards linear
    .toast-box
        max-width 250px
        padding 10px 25px
        border-radius 10px
        text-align justify
        font-size $font-size-small-s
        color #fff
        background rgba(0, 0, 0, 0.8)
@keyframes toast-show
    from, to
        opacity 0
    10%
        opacity 1
    70%
        opacity 1
</style>