<script setup>
import moment from 'moment';
import {ref, reactive, onMounted} from "vue";
import {usePostStore} from "@/stores/post.js";
import {storeToRefs} from "pinia";
import PostCard from "@/components/PostCard.vue";
import 'lazysizes';

const store = usePostStore();

const {posts, loading, error, posts_count} = storeToRefs(store);
const {getPosts} = store;

getPosts();

const results = reactive({
  resultsToShow: 9,
})
</script>

<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row g-2 align-items-center">
          <div class="col">
            <h2 class="page-title">
              Gallery
            </h2>
            <div
              v-if="posts_count"
              class="text-muted mt-1">
              Total : {{ posts_count }} photos
            </div>
          </div>
          <!-- Page title actions -->
          <div class="col-12 col-md-auto ms-auto d-print-none">
            <div class="d-flex">
              <div class="me-3">
                <div class="input-icon">
                  <input type="text" value="" class="form-control" placeholder="Search…">
                  <span class="input-icon-addon">
                        <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                             stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                             stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10"
                                                                                                                cy="10"
                                                                                                                r="7"/><line
                          x1="21" y1="21" x2="15" y2="15"/></svg>
                      </span>
                </div>
              </div>
              <a href="#" class="btn btn-primary">
                <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Add event
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-cards">
          
          <p v-if="loading">Chargement des posts...</p>
          <p v-if="error">{{ error.message }}</p>
          
          <div
            v-if="posts.length"
            v-for="post in posts.slice(0, results.resultsToShow)" :key="post.id"
            class="col-sm-6 col-lg-4">
            
            <PostCard :post="post" :id="post.id"/>
          </div>
        </div>
        <div class="d-flex mt-4 page-center">
          <button
            v-if="results.resultsToShow < posts.length"
            @click="results.resultsToShow += 3"
            class="btn btn-primary">
            Afficher plus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
