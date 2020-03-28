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
