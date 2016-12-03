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

// Subheader Component
Vue.component('subheader', {
	template: `
		<h3 class="subtitle"><slot></slot></h3>
	`
});

// tabs component
Vue.component('tabs', {
	template: `
		<div>
			<div class="tabs">
				<ul>
					<li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
						<a :href="tab.link" @click="selectTab(tab)">{{ tab.name }}</a>
					</li>
				</ul>
			</div>
			<div class="tabs-details">
				<slot></slot>
			</div>
		</div>
	`,
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(function(tab){
				tab.isActive = (tab.name == selectedTab.name);
			})
		}
	},
	data() {
		return {
			tabs: []
		};
	},
	created() {
		this.tabs = this.$children;
	}
});

Vue.component('tab', {
	template: `
		<div v-show="isActive"><slot></slot></div>
	`,
	props: {
		name: {required: true},
		selected: {default: false}
	},
	computed: {
		link() {
			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	},
	data() {
		return {
			isActive: false
		};
	},
	mounted() {
		this.isActive = this.selected;
	}
});