//1
/*var Note = Backbone.Model.extend({
 //默认值
 defaults:{
 title:'',
 created_at : new Date()
 },
 //创建完model后执行
 initialize:function(){
 console.log('冯参参'+ this.get('title'));
 }
 })
 var  note= new Note({title:'baba'});*/


/*var Note = Backbone.Model.extend({
 //默认值
 defaults:{
 title:'',
 created_at : new Date()
 },
 //创建完model后执行
 initialize:function(){
 console.log('冯参参'+ this.get('title'));
 this.on('change',function(model,options){
 console.log('冯ss发生了变化');
 });

 this.on('change:title',function(model,option){
 console.log('titlefcc发生了变化');
 })
 },
 })
 var note= new Note();
 note.set('title','冯参参2');*/



//2
/*var Note = Backbone.Model.extend({
	//默认值
	defaults : {
		title : '',
		created_at : new Date()
	},
	//创建完model后执行
	initialize : function() {
		//		console.log('冯参参'+ this.get('title'));
		this.on('change', function(model, options) {
			console.log('冯ss发生了变化');
		});

		this.on('change:title', function(model, options) {
			console.log('titlefcc发生了变化');
		});

		this.on('invalid', function(model, error) {
			console.log(error)
		})
	},
	//提交之前验证属性的值,条件不成立返回： false，
	validate : function(attrs, options) {
		if (attrs.title.length < 3) {
			return '冯参参小于3';
		}
	}
});*/
/*var note = new Note();
note.set('title', '冯', {validate : true})*///冯参参小于3





//3
//var Note = Backbone.Model.extend({
//	//默认值
//	defaults : {
//		title : '',
//		created_at : new Date()
//	},
//	//创建完model后执行
//	initialize : function() {
//		console.log('冯参参'+ this.get('title'));
//
//		this.on('change', function(model, options) {
//			console.log('冯ss发生了变化');
//		});
//
//		this.on('change:title', function(model, options) {
//			console.log('titlefcc发生了变化');
//		});
//
//		this.on('invalid', function(model, error) {
//			console.log(error)
//		})
//	},
//	//提交之前验证属性的值,条件不成立返回： false，
//	validate : function(attrs, options) {
//		if (attrs.title.length < 3) {
//			return '冯参参小于3';
//		}
//	}
//});
//
//
//var NoteView = Backbone.View.extend({
//	tagName : 'li',
//	className : 'item',
//	attributes : {
//		'data-role' : 'list'
//	},
//	render : function() {
//		this.$el.html(this.model.get('title'));
//	}
//});
//
//var note = new Note({
//	'title' : '西红柿炒鸡蛋'
//});
//
//var noteView = new NoteView({
//	model : note
//});

//控制台
/*  1.执行render
 *  noteView.render()
 *  2.查看标签内容
 *  noteView.el
*/





//4 underscore
var Note = Backbone.Model.extend({
	//默认值
	defaults : {
		title : '',
		created_at : new Date()
	},
	//创建完model后执行
	initialize : function() {
		console.log('冯参参'+ this.get('title'));

		this.on('change', function(model, options) {
			console.log('冯ss发生了变化');
		});

		this.on('change:title', function(model, options) {
			console.log('titlefcc发生了变化');
		});

		this.on('invalid', function(model, error) {
			console.log(error)
		})
	},
	//提交之前验证属性的值,条件不成立返回： false，
	validate : function(attrs, options) {
		if (attrs.title.length < 3) {
			return '冯参参小于3';
		}
	}
});


var NoteView = Backbone.View.extend({
	tagName : 'li',
	className : 'item',
	attributes : {
		'data-role' : 'list'
	},
	template: _.template(jQuery('#list-template').html()),

	render : function() {
		this.$el.html(this.template(this.model.attributes));
	}
});

var note = new Note({
	'title' : '西红柿炒鸡蛋'
});

var noteView = new NoteView({
	model : note
});

//控制台
/*  1.执行render
 *  noteView.render()
 *  2.查看标签内容
 *  noteView.el
 *
 *
 */



