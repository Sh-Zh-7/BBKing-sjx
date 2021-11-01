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
const DB_NAME = 'sayings';
const STORE_NAME = 'sayings';

function getQuote(db, key, successCb) {
  const request = db
    .transaction(STORE_NAME, "readonly")
    .objectStore(STORE_NAME)
    .get(key);

  request.onsuccess = successCb;
}

function addQuote(db, quotes) {
  const objStore = db
    .transaction(STORE_NAME, "readwrite")
    .objectStore(STORE_NAME);

  quotes.forEach((quote) => {
    objStore.add({quote})
  });
}

export default {
  data: () => ({
    quote: '',
    db: null,
    // object storage的索引的缓存
    // 这里的初始值没有意义
    curIndex: 0,
    maxIndex: 0,
  }),

  created() {
    this.curIndex = this.$store.state.curIndex;
    this.maxIndex = this.$store.state.maxIndex;

    if (process.client) {
      // 打开indexedDB, 创建object storage
      const request = indexedDB.open(DB_NAME);
      request.onsuccess = (event) => {
        this.db = event.target.result;
        // 查看之前的数据
        getQuote(this.db, this.curIndex, async (event) => {
          if (event.target.result) {
            // 复用之前的数据
            this.quote = event.target.result.quote;
          } else {
            // 获取数据并存储
            const quotes = await this.$axios.$get('/api/saying');
            this.quote = quotes[0];
            addQuote(this.db, quotes);
          }
        })
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

        this.$axios.$get('/api/saying').then(quotes => {
          addQuote(this.db, quotes)
        })
      }

      getQuote(this.db, this.curIndex, (event) => {
        this.quote = event.target.result.quote;
      })
    },
    getPrevQuote() {
      if (this.curIndex > 1) {
        --this.curIndex;
        getQuote(this.db, this.curIndex, (event) => {
          this.quote = event.target.result.quote;
        })
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
