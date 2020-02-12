import Vue from 'vue'
import App from './App.vue'
import textcolored from "./directives/textcolored";

Vue.config.productionTip = false

// directives
Vue.directive('texted', textcolored)

//filters
Vue.filter('capitalize', (str) => {
    if(str.trim() !== '') {
        let words = str.split(' ');
        let new_str = [];
        for(let i=0; i < words.length; i++) {
            if(words[i]) {
                new_str.push(`${words[i][0].toUpperCase()}${words[i].slice(1)}`)
            }
        }
        return new_str.join(' ');
    }
    return 'empty';
});

export const eventBus = new Vue()

new Vue({
    render: h => h(App),
}).$mount('#app')
