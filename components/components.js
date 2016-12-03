// modal Component
Vue.component('modal', {
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<slot></slot>
				</div>
			</div>
			<button class="modal-close" @click="$emit('closemodal')"></button>
		</div>
	`
});

// message Component
Vue.component('message', {
	props: ['title', 'body'],
	template: `
		<article class="message" v-show="showMessage">
			<div class="message-header">
				{{ title }}
			</div>
			<div class="message-body">
				{{ body }}
				<div style="padding-top:10px;">
					<button class="button" @click="showMessage = false">hide</button>
				</div>
			</div>
		</article>
	`,
	data () {
		return {
			'showMessage' : true
		};
	}
});
