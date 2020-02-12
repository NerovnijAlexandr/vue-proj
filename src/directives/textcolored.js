export default {
    bind(el, binding) {
        if(binding.arg === 'tcolor') {
            el.style.color = binding.value;
        }
    },
    update(el, binding) {
        if(binding.arg === 'tcolor') {
            el.style.color = binding.value;
        }
    },
    unbind(el, binding) {
        if(binding.arg === 'tcolor') {
            alert('You basket will be clear.')
        }
    }
}