$(function(){
   'use strict';


new Vue({
  el: '.bodywrap',
  data: {
    newChat: '',
    chats: []
  },
  methods: {
    addChat: function () {
      var text = this.newChat.trim()
      if (text) {
        this.chats.push({ text: text });
        this.newChat = '';
        switch (text) {
           case '@temp':
           this.chats.push({text: check});

              break;
           default: text;

        }
      }
   }, //end addChat
   removeChat: function(index){
      this.chats.splice(index,1);
   }

} // end of Methods
}); //end of new Vue

}) //end of line
>>>>>>> 5cab6d89064fbe21e42b77ebd3a330b880dea0c6
