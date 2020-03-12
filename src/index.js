import dialog from './packages/dialog'
import toast from './packages/toast'
import loading from './packages/loading'

function install(Vue) {
    Vue.use('dialog', dialog)
    Vue.use('toast', toast)
    Vue.use('loading', loading)
}

if (typeof window.Vue !== undefined && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    dialog,
    toast,
    loading
}