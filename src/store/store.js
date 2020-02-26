import Vue from 'vue';
import Vuex from 'vuex';
import main from './main.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        main,
    }
});

