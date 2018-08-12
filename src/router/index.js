import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HolaMundo from '@/components/HolaMundo';
import GitHub from '@/components/GitHub';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },

    {
      path: '/es',
      name: 'Hola',
      component: HolaMundo
    },
    
    {
      path: '/git',
      name: 'GitHub',
      component: GitHub
    }
  ],
});
