console.log('main.js')

//单个插槽的用法
var s1 = new Vue({
	el: '#s1',
	data: {
	
	},
	components: {
		'child': {
			template: `<div>
				<slot>
					如果父组件没有插入内容，我就作为默认内容出现
				</slot>
			</div>`
		}
	}
})

//...
var s1a = new Vue({
	el: '#s1a',
	data: {},
	components: {
		'child': {
			template: `<div>
				<slot>
					如果父组件没有插入内容，我会作为默认内容显示111
				</slot>
			</div>`
		}
	}
})

//...
var he1 = new Vue({
	el: '#he1',
	data: {},
	components: {
		'child': {
			template: `
				<div>
					<slot name="ppp"></slot>
					<slot name="header"></slot>
				</div>
			`
		}
	}
})

//...
var s2 = new Vue({
	el: '#s2',
	components: {
		'child': {
			template: `
				<div>
					<slot>如果父组件没有插入的内容，我就作为默认内容显示</slot>
				</div>
			`,
		}
	}
})


// 具名插槽
var s3 = new Vue({
	el: '#s3',
	components: {
		'name-component': {
			template: `
				<div>
					<div>
						<slot name="footer"></slot>
					</div>
					<div>
						<slot name="header"></slot>
					</div>
					<slot></slot>
				</div>
			`	
		}
	}
})

// 作用域插槽
var s4 = new Vue({
	el: '#s4',
	components: {
		'child': {
			template: `
				<div>
					<slot text="我是slot的内容" name="abc">
					</slot>
				</div>
			`
		}
	}
})

//...
var s5 = new Vue({
	el: '#s5',
	components: {
		'child': {
			template: `
				<div>
					<slot text="啦啦啦啦啦" xxx="as来犯A类范文二of" name="slotName"></slot>
				</div>
			`
		}
	}
})


// 访问slot
var s6 = new Vue({
	el: '#s6',
	components: {
		'child': {
			template: `
				<div>
					<slot name="header"></slot>
					<slot name="footer"></slot>
				</div>
			`,
			mounted: function(){
				//访问插槽
				var header = this.$slots.header
				var footer = this.$slots.footer
				var info = this.$slots.header[0].elm.innerText
				console.log(footer)
				console.log(header)
				console.log(info)
			}
		}
	}
})

//动态组件的使用
var s7 = new Vue({
	el: '#s7',
	data: {
		thisView: 'comA'
	},
	methods: {
		handleView: function(tag){
			this.thisView = 'com' + tag
		}
	},
	components: {
		'comA': {
			template: '<div>我是第一句</div>'
		},
		'comB': {
			template: '<div>我是第二句</div>'
		},
		'comC': {
			template: '<div>我是第三句</div>'
		},
		'comD': {
			template: '<div>我是第四句</div>'
		}
	}
})

//...
var s8 = new Vue({
	el: '#s8',
	data: {
		thisView: 'comA'
	},
	methods: {
		handleView: function(tag){
			this.thisView = 'com' + tag
		}
	},
	components: {
		'comA': {
			template: '<div>一一</div>'
		},
		'comB': {
			template: '<div>二二</div>'
		},
		'comC': {
			template: '<div>三三</div>'	
		},
		'comD': {
			template: '<div>四四</div>'
		}
	}
})

//父组件传递给子组件
var s9 = new Vue({
	el: '#s9',
	data: {
	
	},
	components: {
		'child': {
			props: ['name'],
			template: '<div>我是子组件{{name}}</div>'
		}
	}
})

//子组件传递给父组件 如 this.$emit('change', this.count)
var s10 = new Vue({
	el: '#s10',
	data: {
		n: 100 
	},
	methods: {
		changeTotal: function(value){
			this.n = value
		}	
	},
	components: {
		child: {
			data: function(){
				return { count: 100 }
			},
			template: `
				<div>
					<button @click="increase">+1</button>
					<button @click="decrease">-1</button>
				</div>
			`,
			methods: {
				increase: function(){
					this.count += 1	
					this.$emit('change', this.count)
				},
				decrease: function(){
					this.count -= 1
					this.$emit('change', this.count)
				}
			}		
		}
	}
})

// 父组件传递数据给子组件
var s11 = new Vue({
	el: '#s11',
	data: {
		styleObj: {
			border: '3px solid blue',
			color: 'red',
			padding: '10px 0',
			'text-align': 'center'
		}	
	},
	methods: {
		change: function(obj){
			this.styleObj = obj	
		}
	},
	components: {
		'child': {
			data: function(){
				return { childObj: {} }
			},
			template: '<div><button @click="changeColor">改样式</button></div>',
			methods: {
				changeColor: function(){
					this.childObj = {
						border: '3px solid brown',
						color: 'black',
						'text-align': 'center',
						padding: '10px 0'
					}	
					this.$emit('action', this.childObj)
				}
			}
		}	
	}
})


var s12 = new Vue({
	el: '#s12',
	data: {
		styleObj: {
			'border': '5px solid brown',
			'color': 'black',
			'padding': '20px 0',
			'text-align': 'center'
		}
	},
	methods: {
		change: function(obj){
			this.styleObj = obj
		}
	},
	components: {
		'child': {
			data: function(){
				return { obj: {} }	
			},
			template: '<div><button @click="changeColor">更改样式</button></div>',
			methods: {
				changeColor: function(){
					this.obj = {
						'border': '5px solid pink',
						'color': 'gray',
						'padding': '10px 0',
						'text-align': 'center'
					}
					this.$emit('action', this.obj)
				}
			}
		}
	}
})

//非父子组件传递数据
var s13 =  new Vue({
	el: '#s13',
	data: {
		bus: new Vue()
	},
	components: {
		'acom': {
			data: function(){
				return { aaa: '我是acom的数据'}
			},
			template: '<div><button @click="passb">点我向b传数据</button></div>',
			methods: {
				passb: function(){
					this.$root.bus.$emit('xixi', this.aaa)
				}
			}
		},
		'bcom': {
			template: '<div></div>',
			created: function(){
				this.$root.bus.$on('xixi', function(b){
					console.log(b)
				})
			}
		}
	}
})

//...

var s14 = new Vue({
	el: '#s14',
	data: {
		bus: new Vue()
	},
	components: {
		'acom': {
			data: function(){
				return { yyy: '我是来自a的数据' }
			},
			template: '<div><button @click="passb">点我向b传递数据</button></div>',
			methods: {
				passb: function(){
					this.$root.bus.$emit('qoqo', this.yyy)
				}
			}
		},
		'bcom': {
			template: '<div></div>',
			created: function(){
				this.$root.bus.$on('qoqo', function(w){
					console.log(w)
				})
			}
		}
	}
})

// 自定义指令 directive 。跟 component 类似。下面做一个打开页面就获取焦点的案例。
/*
directive 存在几个 hooks 函数:
bind: 只调用一次，指令第一次绑定到元素时调用
inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。

update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，
可以忽略不必要的模板更新。

componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。

unbind: 只调用一次，指令与元素解绑时调用。
*/

// 自定义指令
Vue.directive('focus', {
	inserted: function(el){
		el.focus()
	}
})

var s15 = new Vue({
	el: '#s15',
	data: {}
})

// ...
var s16 = new Vue({
	el: '#s16',
	data: {
		posts: [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
			{id: 3, title: 'title3'}
		]
	},
	components: {
		'child': {
			props: ['title'],
			template: '<div>{{ title }}</div>'
		}
	}
})

// render 函数的第一个参数
var s17 = new Vue({
	el: '#s17',
	data: {

	},
	components: {
		'child': {
			// render: function(createElement){
			// 	return createElement('div')
			// }

			// render: function(createElement){
			// 	return createElement({
			// 		template: '<div>我是对象参数</div>'
			// 	})
			// }

			render: function(createElement){
				let domfun = function(){
					return { template: '<div>我是函数参数，我需要返回一个含有数据的对象</div>' }
				}
				return createElement(domfun())
			}
		}
	}
})

// render 函数的第二个参数：可选，是一个对象
var s18 = new Vue({
	el: '#s18',
	components: {
		'child': {
			render:function(createElement){
				// return createElement('div', {
				// 	class: {
				// 		foo: true,
				// 		bar: true
				// 	},
				// 	style: {
				// 		color: 'red',
				// 		fontSize: '28px',
				// 		width: '100px',
				// 		height: '100px',
				// 		padding: '20px',
				// 		border: '3px solid blue'
				// 	}
				// })
				return createElement({
					template: '<div>我是一个div</div>'
				},{
					class: {
						foo: true,
						bar: false
					},
					style: {
						color: 'red'
					},
					attrs: {
						id: 'foo',
						src: 'https://www.baidu.com'
					},
					domProps: {
						innerHTML: '<span>我是span</span>'
					}
				})
			}
		}
	}
})

// render 函数的第三个参数：代表子节点，可选，String Array
var s19 = new Vue({
	el: '#s19',
	components: {
		'child': {
			render: function(createElement){
				return createElement('div', [
					createElement('p', {
						domProps: {
							innerHTML: '<span>我是第一个p标签</span>'
						}
					}),
					createElement('p', {
						domProps: {
							innerHTML: '<span>我是第二个p标签</span>'
						}
					})
				])
			}
		}
	}
})

// $slot 在 render 函数中的应用
Vue.component('child999', {
	render: function(createElement){
		let main = this.$slots.default;
		let header = this.$slots.header;
		let footer = this.$slots.footer;

		return createElement('div', [
			createElement('header', header),
			createElement('main', main),
			createElement('footer', footer)
		])
	}
})

var s20 = new Vue({
	el: '#s20',
	data: {}
})

// 点击切换图片
// Vue.component('child',{
// 	props: ['show'],
// 	render: function(createElement){
// 		var imgsrc;
// 		if(this.show){
// 			imgsrc = 'img/001.jpg'
// 		}else{
// 			imgsrc = 'img/002.jpg'
// 		}
// 		return createElement('img',{
// 			attrs: {
// 				src: imgsrc	
// 			}
// 		})
// 	}
// })

var s21 = new Vue({
	el: '#s21',
	data: {
		show: true
	},
	methods: {
		switchShow: function(){
			this.show = !this.show
		}
	},
	components: {
		'child': {
			props: ['show'],
			render: function(createElement){
				var imgsrc
				if(this.show){
					imgsrc = 'img/001.jpg'
				}else{
					imgsrc = 'img/002.jpg'
				}
				return createElement('img', {
					attrs: {
						src: imgsrc
					}
				})
			}
		}
	}
})

// input 输入什么就显示什么
var s22 = new Vue({
	el: '#s22',
	data: {
		name: 'jack'
	},
	methods: {
		showName: function(value){
			this.name = value
		}
	},
	components: {
		'child': {
			props: ['name'],
			render: function(createElement){
				let self = this
				return createElement('input', {
					domProps: {
						value: self.name
					},
					on: {
						input: function(value){
							self.$emit('input', event.target.value)
						}
					}
				})
			}
		}
	}
})

// input 输入什么就显示什么，用 v-model 做一遍
var s23 = new Vue({
	el: '#s23',
	data: {
		name: 'jack'
	},
	components: {
		'child': {
			props: ['name'],
			render: function(createElement){
				let self = this
				return createElement('input', {
					domProps: {
						value: self.name
					},
					on: {
						input: function(){
							self.$emit('input', event.target.value)
						}
					}
				})
			}
		}
	}
})

//...
var s24 = new Vue({
	el: '#s24',
	data: {
		name: 'jack'
	},
	methods: {
		showName: function(value){
			this.name = value
		}
	},
	components: {
		'child': {
			props: ['name'],
			render: function(createElement){
				let self = this
				return createElement('input', {
					domProps: {
						value: self.name
					},
					on: {
						input: function(){
							self.$emit('input', event.target.value)
						}
					}
				})
			}
		}
	}
})

//...作用域插槽 render函数
var s25 = new Vue({
	el: '#s25',
	components: {
		'child': {
			render: function(createElement){
				return createElement('div',this.$scopedSlots.default({
					text: '我是子组件传递过来的数据',
					msg: 'xxx'
				}))
			}
		}
	}
})

//...
var s26 = new Vue({
	el: '#s26',
	components: {
		'child': {
			render: function(createElement){
				return createElement('div', this.$scopedSlots.default({
					text: '我是来自子组件的数据',
					msg: 'ssssssssss'
				}))
			}
		}
	}
})

// 函数化组件
// 当 functional: true 时，表示该组件无状态、无实例

var s27 = new Vue({
	el: '#s27',
	data: {
		info: '我是父组件的info'
	},
	components: {
		props: ['value'],
		'child': {
			functional: true,
			render: function(createElement, context){
				return createElement('button', {
					on: {
						click: function(){
							console.log(context)
							console.log(context.parent)
							console.log(context.props)
							console.log(context.props.value)
							console.log(context.parent.info)
						}
					}
				},'点我点我点我')
			}
		}
	}
})