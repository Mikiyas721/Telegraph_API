'use strict'

module.exports = (app)=>{
	app.dataSources.mongo.automigrate(['message','chat','user'],err=>{
		if(err) console.log(err)
		console.log('Models Synced!');
	})
}