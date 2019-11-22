/* eslint-disable */
import axios from 'axios';

const modalDisplay = {
    state: {
        editable: true
    },
    mutations: {
        publish(state) {
            state.editable = false;
        },
        edit(state) {
            state.editable = true;
        },
    },
};
 

export default modalDisplay;
