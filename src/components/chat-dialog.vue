<template>
    <div>
        <div class="chat-box" :class="'chat-box-' + pos">
            <div class="chat-box-main flex">
                <div class="chat-box-main-avatar">
                    <img :src=" imgs[propsObj.userType] " alt="">
                </div>
                <div class="chat-box-main-dialog">
                    {{ propsObj.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgs: [
                require("@/assets/1.jpg"),
                require("@/assets/2.jpg")
            ]
        }
    },
    props: {
        propsObj: {
            type: Object,
            default(){
                return{
                    userType: 0,
                    date: 1557151860000,
                    content: "聊天内容"
                }
            }
        }
    },
    computed: {
        pos(){
            return !this.propsObj.userType ? "left" : "right";
        }
    }
}
</script>

<style lang="less" scoped>
@avatar_width: 0.8rem;
@narrow_padding: 0.2rem;
@wide_padding: 1.2rem;
@radius: 5px;

.chat-box{
  width: 100%;
  box-sizing: border-box;
  &-main{
    width: 100%;
    align-items: flex-start;
    &-avatar{
      width: @avatar_width;
      height: @avatar_width;
      border-radius: @radius;
      overflow: hidden;
      flex: 0 0 @avatar_width;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-dialog{
      border-radius: @radius;
      text-align: justify;
      padding: @narrow_padding;
      line-height: 0.4rem;
      position: relative;
      &:after{
        content: " ";
        display: block;
        height: 0;
        width: 0;
        position: absolute;
        top: calc( @avatar_width / 2 );
        transform: translateY(-0.08rem);
        border-style: solid;
      }
    }
  }
}

.chat-box-right{
  padding: @narrow_padding @narrow_padding @narrow_padding @wide_padding;
  .chat-box-main{
    justify-content: flex-end;
    &-avatar{
      order: 999;
    }
    &-dialog{
      margin-right: @narrow_padding;
      background-color: rgb(158,234,106);
      &:after{
        right: -0.1rem;
        border-width: 0.08rem 0 0.08rem 0.1rem;
        border-color: transparent transparent transparent rgb(158,234,106);
      }
    }
  }
}
.chat-box-left{
  padding: @narrow_padding @wide_padding @narrow_padding @narrow_padding;
  .chat-box-main{
    justify-content: flex-start;
    &-dialog{
      margin-left: @narrow_padding;
      background-color: #ffffff;
      &:after{
        left: -0.1rem;
        border-width: 0.08rem 0.1rem 0.08rem 0;
        border-color: transparent #ffffff transparent transparent;
      }
    }
  }
}
.flex{
  display: flex;
}
</style>
