<template>
  <main>
    <img src='/avatar.png' alt='avatar of sjx'
         class='w-44 h-44 md:w-52 md:h-52 mx-auto mt-10 rounded-full border-green-600 border-4 p-2'>
    <div class='table mx-auto mt-10 md:mt-5'>
      <blockquote class='table-cell align-middle text-center h-48 text-4xl md:text-5xl font-bold text-green-700'>
        {{ quote.sayings }}
      </blockquote>
    </div>
    <div class='mx-20 md:mx-60 lg:mx-96 mt-16 mb-16 flex justify-evenly'>
      <button class='py-4 px-3 md:px-7 border-2 bg-green-600 rounded-2xl text-xl md:text-2xl'
              @click='getPrevQuote'>上一条</button>
      <button class='py-4 px-3 md:px-7 border-2 border-gray-600 rounded-2xl text-xl md:text-2xl'
              @click='getNextQuote'>下一条</button>
    </div>
  </main>
</template>

<script>
// 方案一：
// 批量获取后端数据存在indexedDB中，便于检索上一条数据
// 索引保存在vuex中，切换视图后也能回到原来的记录
// 退出/刷新页面触发删除数据库，保证下次进来看到全新的数据
// 缺陷：
// 1. 退出/刷新的onbeforeunload支持很差
// 在以webkit为内核的ios浏览器（safari，qq）上完全不支持
// 替代品onpagehide语义和onbeforeunload也不一致
// 比如退出页面的时候就无法触发
// 2. 删除数据库太慢
// 即便是开发模式，无网络延迟的条件下
// 在PC机上也能感受到明显的时延

// 方案二：
// 舍弃视图切换记住索引的功能，即，去掉vuex
// 舍弃删除数据库的功能，在旧的数据库上进行更新
// 引入新的state——maxCount记住数据库最大数目
// 这个maxCount记录在localStorage中
// 缺点是和老的方案不兼容

// 方案三：
// 改用社区的Promise封装
import { openDB } from 'idb'

const DB_NAME = 'sayings';
const STORE_NAME = 'sayings';
const VERSION = 1;

export default {
  data: () => ({
    quote: { sayings: '。。。' },
    db: null,
    // object storage的索引的缓存
    // 这里的初始值没有意义
    curIndex: 0,
    maxIndex: 0,
  }),

  async created() {
    this.curIndex = this.$store.state.curIndex;
    this.maxIndex = this.$store.state.maxIndex;

    if (process.client) {
      this.db = await openDB(DB_NAME, VERSION, {
        upgrade(db) {
          db.createObjectStore(
            STORE_NAME, { keyPath: 'ID', autoIncrement: true }
          )
        }});
      const quote = await this.db.get(STORE_NAME, this.curIndex);
      if (quote) {
        this.quote = quote;
      } else {
        const quotes = await this.$axios.$get('/api/saying');
        await Promise.all(quotes.map(quote => this.db.add(STORE_NAME, quote)));
        this.quote = quotes[0];
      }
    }
  },
  beforeDestroy() {
    this.$store.commit(
      "setIndexes",
      {
        curIndex: this.curIndex,
        maxIndex: this.maxIndex,
      }
    );
  },
  methods: {
    async getNextQuote() {
      this.curIndex++;
      if (this.curIndex + 2 >= this.maxIndex) {
        // 缓存快不够了，继续批量请求
        this.maxIndex += 5;

        this.$axios.$get('/api/saying').then(async quotes => {
          await Promise.all(quotes.map(quote => this.db.add(STORE_NAME, quote)));
        })
      }

      this.quote = await this.db.get(STORE_NAME, this.curIndex);
    },
    async getPrevQuote() {
      if (this.curIndex > 1) {
        --this.curIndex;
        this.quote = await this.db.get(STORE_NAME, this.curIndex);
      } else {
        alert("没有数据了呕");
      }
    },
  }

}
</script>

<style>
blockquote {
  width: 20rem;
}

blockquote::before, blockquote::after {
  content: '';
  display: inline-block;
  background-image: url("../assets/quote.png");
  background-size: 32px 32px;
  width: 32px;
  height: 32px;
}

@media (min-width: 768px) {
  blockquote {
    width: 44rem;
  }

  blockquote::before, blockquote::after {
    background-size: 64px 64px;
    width: 64px;
    height: 64px;
  }
}

blockquote::after {
  transform: rotate(180deg);
}
</style>
