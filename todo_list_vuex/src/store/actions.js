export default {
    changeTasks({ commit }, newTasks) {
        // console.log('Actions: changeTasks', newTasks);
        commit('changeTasks', newTasks);
    },
    toggleForm({ commit }) {
        console.log('Action toggleForm');
        commit('toggleForm');
    },
    handleSearch({ commit }, strSearch) {
			console.log('Action handleSearch', strSearch);
			commit('handleSearch', strSearch);
    }
}