import Toast from './index'
let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, toastOptions){ 
            if(currentToast){
                currentToast.close()
            }
            currentToast = createTost({Vue, message, propsData:toastOptions,
            onClose:()=>{
                currentToast = null
            }})
        }
    }

}
function createTost({Vue, message, propsData, onClose}){
    let Construcotr = Vue.extend(Toast)
    let toast = new Construcotr({propsData})
    toast.$slots.default = [message] //插槽
    toast.$mount() //必须  手动挂载一个未挂载的实例
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast
}

