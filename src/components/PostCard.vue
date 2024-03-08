<script setup>
import moment from "moment";
import {ref, reactive} from "vue";
import {useUserStore} from "@/stores/user.js";
import {usePostStore} from "@/stores/post.js";

const props = defineProps(['post', 'id', 'likes_count']);

const user = useUserStore();
const store = usePostStore();
</script>

<template>
  <div class="card card-sm">
    <a href="#" class="d-block">
      <img :data-src="post.photo.thumbnail_url" :alt="post.title" async="decoding" class="card-img-top lazyload">
    </a>
    <div class="card-body">
      <div class="d-flex align-items-center">
                  <span v-if="post.user?.avatar?.thumbnail_url"
                        class="avatar me-3 rounded"
                        :style="{ backgroundImage: 'url(' + post.user.avatar.thumbnail_url+ ')' }">
                  </span>
        <div>
          <div>{{ post.user.name }}</div>
          <div class="text-muted">
            {{ moment(post.created_at).fromNow() }}
          </div>
          <div>Catégorie : {{ post.category.name }}</div>
        </div>
        <div class="ms-auto">
          <a href="#" class="text-muted">
            <!-- Download SVG icon from http://tabler-icons.io/i/eye -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="12" r="2"/>
              <path
                d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"/>
            </svg>
            467
          </a>
          <a href="#" class="ms-3 text-muted">
            <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
            </svg>
            67
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lazyload,
.lazyloading {
  opacity: 0;
}
.lazyloaded {
  opacity: 1;
  transition: opacity 2000ms;
}
</style>
