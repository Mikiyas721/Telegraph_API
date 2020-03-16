'use strict';

module.exports = function(Chat) {
	Chat.getUserChats =>(userId){
		
	}
Chat.remoteMethod('userChats',{
	accepts:{
		arg: 'userId',
		type: 'string'
	},
	returns:{
		arg: 'chatIds',
		type: [
           'object'
      ],
		
	},
	http: {
		verb: 'get'
	}
})
};
