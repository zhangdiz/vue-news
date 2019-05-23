import Vue from 'vue'
import toast from './index.vue'


let toastConstructor = Vue.extend(toast);

let initToast

export const showToast = (msg, container = '#app') => {
	if (!msg) return
	initToast = new toastConstructor({
		propsData: {
			message: msg
		}
	})
	initToast.$mount()
	document.querySelector(container).appendChild(initToast.$el)
	setTimeout(function () {
		hideToast()
	}, 2500)
}

export const hideToast = () => {
	if (initToast && initToast.$el.parentNode) initToast.$el.parentNode.removeChild(initToast.$el)
}