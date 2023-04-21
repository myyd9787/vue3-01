import { createApp } from 'vue'
import App from './App.vue'

//组件
import { AddressEdit } from 'vant';

//样式
import 'vant/lib/index.css';

const app = createApp(App);
app.use(AddressEdit);

app.mount('#app')
