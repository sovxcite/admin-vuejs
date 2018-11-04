<template>
    <div class="d-flex justify-content-between">
        <div>
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: page === 1 }"
                                    @click.prevent="prevPage">
                    <a class="page-link" href="#"><font-awesome-icon icon="chevron-left" /></a>
                </li>
                <li class="page-item" v-if="page - showRelatives > 1">
                    <a class="page-link">...</a>
                </li>
                <li
                    class="page-item"
                    v-for="pageNum in calcItemsRange(page)"
                    :key="pageNum"
                    :class="{ active: page == pageNum }">
                    <a href="#" class="page-link" @click.prevent="selectPage(pageNum)">
                        {{ pageNum }}
                    </a>
                </li>
                <li class="page-item" v-if="page + showRelatives < pagesAmount">
                    <a class="page-link">...</a>
                </li>
                <li class="page-item" :class="{ disabled: page === pagesAmount }"
                                    @click.prevent="nextPage">
                    <a class="page-link" href="#"><font-awesome-icon icon="chevron-right" /></a>
                </li>
            </ul>
            <span>Page {{page}} of {{pagesAmount}}</span>
        </div>
        <div>
            <button type="button" class="btn btn-success" @click="refreshPageSize" v-if="changedPageSize !== pageSize">Refresh</button>
            <span>Items per page :</span>
            <input type="number" class="form-control justify-content-end" 
                    name="pageNum" min="2" :value="changedPageSize" @input="changePageSize">
        </div>
    </div>
</template>

<script>
export default {
  name: "table-paginator",
  props: {
      page: {
          type: Number,
          required: true
      },
      pageSize: {
          type: Number,
          required: true
      },
      itemsAmount: {
        type: Number,
        required: true
      },
      // number of items before current and after current to show ...
      showRelatives: {
        type: Number,
        default: 2
      }
  },
  computed: {
    pagesAmount() {
      return Math.ceil(this.itemsAmount / this.pageSize)
    }
  },
  mounted() {
      this.changedPageSize = this.pageSize;
  },
  watch: {
      pageSize(newVal) {
          this.changedPageSize = newVal;
      }
  },
  data() {
      return {
          changedPageSize: null
      };
  },
  methods: {
    calcItemsRange(pageNum) {
        const displayItems = [pageNum];
        let val;
        for (let i = 0; i < this.showRelatives; i++) {
            val = pageNum + (i + 1);
            if (val <= this.pagesAmount) displayItems.push(val);
            val = pageNum - (i + 1);
            if (val > 0) displayItems.unshift(val);
        }
        return displayItems;
    },
    prevPage() {
      const pageNum = this.page - 1
      if (pageNum > 0) {
        this.selectPage(pageNum)
      }
    },
    nextPage() {
      const pageNum = this.page + 1
      if (pageNum <= this.pagesAmount) {
        this.selectPage(pageNum)
      }
    },
    selectPage(page) {
        if (page > this.pagesAmount) page = this.pagesAmount;
        if (page < 1) page = 1;
      this.$emit('updated', page, this.pageSize)
    },
    selectPageSize(pageSize) {
        let page = this.page;
        let newPagesAmount = Math.ceil(this.itemsAmount / pageSize);
        if (this.page > newPagesAmount) page = newPagesAmount;
        if (this.page < 1) page = 1;
      this.$emit('updated', page, pageSize)
    },
    changePageSize(event) {
        this.changedPageSize = event.target.valueAsNumber;
    },
    refreshPageSize() {
        this.selectPageSize(this.changedPageSize);
    }
  }
}
</script>

<style scoped>
  ul.pagination {
    margin: 0;
    display: inline-flex;
  }

  span {
      margin: 0 15px;
      user-select: none;
  }

  input.form-control {
      width: 70px;
      display: inline-block; 
  }
</style>
