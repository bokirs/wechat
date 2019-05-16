<template>
    <div class="chat">
        <Header title="杏子" @click.native="test" />
        <div class="chat-main" ref="chatMain">
            <div 
                v-for="(item,index) in chatRecord"
                :key="index"
            >
                <Chat
                  :propsObj="item"
                />
            </div>
        </div>
        <Bottom 
          @on-enter="sendMsg" 
          @on-focus="handlePush"
        />
    </div>
</template>

<script>
import Chat from "@/components/chat-dialog.vue"
import Header from "@/components/yan-header.vue"
import Bottom from "./components/bottom-bar.vue"
import { chat } from '@/api/chat.api.js';

export default {
  data(){
    return{
      show: true,
      vswitch: false,
      friendName: "杏子",
      headOptions: {
        left:{
          showBack: true,
          backText: ""
        },
        right:{
          showMore: true
        }
      },
      chatRecordItem: {
        userType: 0,
        date: 1557151860000,
        content: "聊天内容聊天内容聊天内容聊天内容"
      },
      chatRecord: [],
      n: 0,
      lastTime: 0,
      message: ""
    }
  },
  methods:{
    sendMsg(msg){
      console.log("react")
      const now = +new Date;
      this.lastTime = now;
      this.message = msg;
      this.chatRecord.push({
        userType: 1,
        date: now,
        content: msg
      })
      this.handlePush() 
      this.react()
    },
    react(){
      const now = +new Date;
      this.lastTime = now;
      chat(this.message).then(res => {
        const reactMsg = res.data.results[0].values.text
        this.chatRecord.push({
          userType: 0,
          date: now,
          content: reactMsg
        })
        this.handlePush() 
      }).catch(err => {
        console.log( err )
      })
    },
    handler(){

    },
    test(){
      const item = Object.assign({},this.chatRecordItem);
      const n = Math.ceil( Math.random() * 200 );
      this.chatRecord.push({
        userType: n%2,
        date: item.date + n*1000,
        content: item.content.repeat(10) + n
      })
      
      this.handlePush()
    },
    more(){
      console.log('more')
    },
    init(){
      const item = Object.assign({},this.chatRecordItem);
      let list = [];
      for( let i=0; i<10; i++ ){
        const n = Math.ceil( Math.random() * 200 );
        list.push({
          userType: i%2,
          date: item.date - i*n*1000,
          content: item.content + n
        })
      }
      list.sort((itemA,itemB) => {
        return itemA.date - itemB.date
      })
      this.chatRecord = list;
    },
    handlePush(){
      this.$nextTick(()=>{
        const sT = document.documentElement.scrollTop;
        // 元素高
        const elH = this.$refs.chatMain.offsetHeight
        // 屏幕高
        const sH = document.documentElement.clientHeight;
        // 两者的差
        const _offset = elH - sH;

        document.documentElement.scrollTop = elH - sH + 200
      })
    }
  },
  created(){
    // this.init()
  },
  mounted(){
    
  },
  components: {
    Chat,
    Header,
    Bottom
  },
}
</script>

<style scoped>
.chat-main{
    margin: 0.96rem auto;
    width: 100%;
    max-width: 750px;
    background-color: rgb(237, 237, 237);
    outline: 1px;
}
</style>

<style>
#vux_view_box_body,body{
  background-color: #f0f0f0;
}
</style>
