export default {
    namespaced: true,
    state: {
        screenWidth: window.innerWidth,
        rollNum: 785214,
        screenHeight: window.innerHeight,
        storeWindowInfo: {
            value1: '85%',
            nameClass1: 'rentOutProportion',
            name2: '未交租金',
            value2: '5227',
            nameClass2: 'receivableRent',
            data: [
                {
                    title: '专业市场',
                    value1: '85%',
                    value2: '5227',
                },
                {
                    title: '仓储区',
                    value1: '85%',
                    value2: '5227',
                },
                {
                    title: '商贸区',
                    value1: '85%',
                    value2: '5227',
                },
            ]
        }

    },
    getters: {
        vw: (state) => state.screenWidth / 100,
        vh: (state) => state.screenHeight / 100,
        getScreenWidth: (state) => state.screenWidth,
        getScreenHeight: (state) => state.screenHeight,
        getVw: (state) => (n) => state.screenWidth / 1920 * n,
        getVh: (state) => (n) => state.screenHeight / 969 * n,
        vwToPx: (state, getters) => (n) => getters.vw * n,
        vhToPx: (state, getters) => (n) => getters.vh * n,
        getStoreWindowInfo: (state) => state.storeWindowInfo,
        getRollNum: (state) => state.rollNum,
    },
    mutations: {
        setScreenWidth(state, width) {
            state.screenWidth = width;
        },
        setScreenHeight(state, height) {
            state.screenHeight = height;
        },
        setStoreWindowInfo(state, info) {
            state.storeWindowInfo = info;
        },
        setRollNum(state, info) {
            state.rollNum = info;
        },
    },
    actions: {
        resizeASync: ({ state, commit }, params) => {
            if (state.resizeTimer) clearTimeout(state.resizeTimer);
            state.resizeTimer = setTimeout(() => {
                commit('setScreenWidth', params.width);
                commit('setScreenHeight', params.height);
            }, 500);
        }
    }
};
