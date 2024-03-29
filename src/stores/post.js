import {defineStore} from "pinia";
import axios from "axios";

export const usePostStore = defineStore({
    id: 'post',

    state: () => ({
        posts: [],
        errors: [],
        loading: false,
        post: null,
        category: null,
        posts_count: 0,
        categories: [],
    }),

    getters: {
        getErrors: (state) => state.errors,
        getLoading: (state) => state.loading,
        getId: (state) => state.post.id,
    },

    actions: {
        async csrf() {
            await axios.get('/sanctum/csrf-cookie');
        },

        async getPosts( sort = null) {
            this.loading = true;
            await axios.get('/posts?sort='+sort).then((response) => {
                this.loading = false;
                console.log(response);
                if (response.status === 200) {
                    this.posts = [];
                    this.posts = response.data.posts;
                    this.posts_count = response.data.posts_count;
                }
            })
            .catch(error => {
                this.loading = false;
                console.log(error)
            })
        },

        async getPost(slug) {
            this.post = [];
            this.loading = true;

            this.csrf();
            await axios.get('/post/' + slug).then((response) => {
                console.log(response);
                this.loading = false;
                if (response.status === 200) {
                    this.post = response.data.post;
                }
            })
                .catch(error => {
                    console.log(error);
                    if (error.response.status === 404) {
                        this.$router.push({name:'not-found'})
                    }
                })
        }
    }
})
