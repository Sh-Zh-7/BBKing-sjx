<template>
  <main>
    <img src='/avatar.png' alt='avatar of sjx'
         class='w-60 h-60 mx-auto mt-10 rounded-full border-green-600 border-4 p-2'>
    <blockquote class='text-center font-bold text-green-700 text-6xl mx-72 mt-12 leading-normal'>
      {{ quote }}
    </blockquote>
    <div class='mx-96 mt-16 flex justify-evenly'>
      <button class='py-4 px-7 border-2 bg-green-600 rounded-2xl text-2xl'
              @click='getPrevQuote'>上一条</button>
      <button class='py-4 px-7 border-2 border-gray-600 rounded-2xl text-2xl'
              @click='getNextQuote'>下一条</button>
    </div>
  </main>
</template>

<style>
blockquote::before, blockquote::after {
  content: '';
  display: inline-block;
  background-image: url("../assets/quote.png");
  background-size: 64px 64px;
  width: 64px;
  height: 64px;
}
blockquote::after {
  transform: rotate(180deg);
}
</style>

<script>
const DB_NAME = 'sayings';
const STORE_NAME = 'sayings';

export default {
  data: () => ({
    quote: '',
    db: null,
    // 用来追踪object storage中的索引
    // 注意索引是从1开始的
    cur_index: 1,
    max_index: 1,
  }),

  created() {
    // 打开indexedDB, 创建object storage
    if (process.client) {
      const request = indexedDB.open(DB_NAME);
      request.onsuccess = async (event) => {
        this.db = event.target.result;

        // 获取第一条数据并存储
        this.quote = await this.$axios.$get('/api/saying');
        this.db
          .transaction(STORE_NAME, "readwrite")
          .objectStore(STORE_NAME)
          .add({ quote: this.quote });
      };
      request.onupgradeneeded = (evt) => {
        evt.currentTarget.result.createObjectStore(
          STORE_NAME, { keyPath: 'ID', autoIncrement: true }
        )
      };
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.onbeforeunload = () => {
        window.indexedDB.deleteDatabase(DB_NAME);
        return null;
      };
    }
  },
  methods: {
    async getNextQuote() {
      this.cur_index++;
      if (this.cur_index > this.max_index) {
        // 如果是一条全新的数据
        this.max_index = this.cur_index;

        this.quote = await this.$axios.$get('/api/saying');
        this.db
          .transaction(STORE_NAME, "readwrite")
          .objectStore(STORE_NAME)
          .add({ quote: this.quote });
      } else {
        // 直接从indexedDB缓存中获取
        const request = this.db
          .transaction(STORE_NAME, "readonly")
          .objectStore(STORE_NAME)
          .get(this.cur_index);

        request.onsuccess = (event) => {
          this.quote = event.target.result.quote;
        }
      }
    },
    getPrevQuote() {
      if (this.cur_index > 1) {
        --this.cur_index;
        const request = this.db
          .transaction(STORE_NAME, "readonly")
          .objectStore(STORE_NAME)
          .get(this.cur_index);

        request.onsuccess = (event) => {
          this.quote = event.target.result.quote;
        }
      } else {
        alert("没有数据了呕");
      }
    },
  }

}
</script>
