<script setup>
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { usePostStore } from "@/stores/post.js";
import moment from "moment";

const router = useRouter();
const route = useRoute();

const store = usePostStore();

const { post, errors } = storeToRefs(store);

const { getPost } = store;

getPost(route.params.slug);

</script>

<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row g-2 align-items-center">
          <div class="col">
            <h2 class="page-title">
              {{ post.title }}
            </h2>
          </div>
        </div>
      </div>
      
      <img :data-src="post.photo.url" :alt="post.title" class="card-img-top lazyload" async="decoding">
      
      <div class="card-body">
        <h2 class="card-title">{{ post.title }}</h2>
        <p class="card-text">{{ post.content }}</p>
        <div>
          <span class="avatar me-3 rounded" :style="{ backgroundImage: 'url(' + post.user.avatar.thumbnail_url + ')' }"></span>
          <div class="pt-2">{{ post.user.name }}</div>
          <div class="text-muted">{{ moment(post.created_at).fromNow() }}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

</style>
