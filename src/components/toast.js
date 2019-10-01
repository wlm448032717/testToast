import toast from './index'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(data){ console.log(data)
            let a = Vue.extend(toast)
            let s = new a();
            s.$slots.mm = [data];
            s.$mount()
            document.body.appendChild(s.$el);
          
        }
    }
}