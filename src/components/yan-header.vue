<template>
    <div class="yan-header">
        <div class="yan-header-left">
            <i class="iconfont icon-left"></i>
        </div>
        <div class="yan-header-mid">
            {{ title }}
        </div>
        <div class="yan-header-right">
            <i class="iconfont icon-more"></i>            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="less" scoped>
.yan-header{
	height: 0.96rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.2rem;
	box-sizing: border-box;
	background-color: #fff;
    border-bottom: 1px solid #e3e3e3;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    z-index: 2000;
	.iconfont{
		font-size: 0.28rem;
	}
    &-mid{
        font-weight: 500;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #000;
    }
}
</style>


