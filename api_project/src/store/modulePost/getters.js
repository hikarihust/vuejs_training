export default {
    // test: state => {
    //     return state
    // }
    getListPosts: state => {
        return state.listPosts;
    },
    getDataPostDetail(state, getters, rootState) {
        if (state.postDetail) {
            var USERID = state.postDetail.post.USERID;
            var user = rootState.user.users[USERID];
            
            var data = {
                post: {
                    ...state.postDetail.post,
                    fullname: user.fullname,
                    profilepicture: user.profilepicture
                },
                categories: state.postDetail.categories
            }

            return data;
        }
    }
}