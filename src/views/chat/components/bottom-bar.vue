<template>
    <div>
        <div class="bar">
            <div class="bar-icon">
                <i class="icon-yuyin iconfont"></i>
            </div>
            <div class="bar-input">
                <input v-model="msg" @keyup.enter="send" @focus="activeInput" type="text" />
            </div>
            <div class="bar-icon">
                <i class="icon-xiaolian iconfont"></i>
            </div>
            <div class="bar-icon">
                <i class="icon-jia1 iconfont"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: ""
        }
    },
    methods:{
        activeInput(){
            this.$emit("on-focus")
        },
        send(){
            if( !this.msg ) return
            let msg = this.msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
            msg = msg.replace(/[|]*\n/, '') //去除行尾空格
            msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
            this.$emit("on-enter",msg)
            this.msg = ""
        }
    }
}
</script>

<style lang="less" scoped>
@bar_height: .96rem;
.bar{
    height: @bar_height;
    padding: 0.16rem 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(246,246,246);
    position: fixed;
    max-width: 750px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;

    &-icon{
        i{
            font-size: 0.60rem;
            color: #333;
        }
    }
    &-input{
        width: 4.8rem;
        height: 100%;
        background-color: #fff;
        input{
            padding: 0.2rem;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            caret-color: #9eea6a;
            font-size:0.24rem;
        }
    }
}
</style>


