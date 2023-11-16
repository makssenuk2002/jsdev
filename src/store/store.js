import { createStore } from 'vuex'
import {fetchPackages} from "@/api/packages";

const store = createStore({
    state () {
        return {
            listOfPackages: [],
        }
    },
    mutations: {
        SET_LIST_OF_PACKAGES (state, data) {
            state.listOfPackages = data;
        }
    },
    actions:{
        fetchPackages({commit}, params) {
            return new Promise((resolve, reject) => {
                fetchPackages(params)
                    .then((response) => {
                        commit('SET_LIST_OF_PACKAGES', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        }
    }
})
export default store;
