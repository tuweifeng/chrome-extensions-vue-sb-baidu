<template>
  <div>
    <el-collapse v-model="activeName" @change="changeCurIndex" v-for="(item, i) in $store.state.userConfig" :key="i" accordion>
      <el-collapse-item :title="`${item.title} - ${item.url}`" :name="i">
        <div v-for="action, actionName in item.actions" :key="actionName">
          {{ action.label }} {{ action.open ? "已开启" : "已关闭" }}
          <br>
          <span class="condition" v-for="(element, j) in action.elements" :key="j">
            {{ element }}
          </span>
        </div>
        <el-button type="primary" icon="Edit" @click="editItem(i)" circle />
        <el-button type="danger" icon="Delete" @click="removeItem(i)" circle />

      </el-collapse-item>
    </el-collapse>
  </div>


</template>


<script>
import { ref } from 'vue'

export default {
  name: 'SiteList',
  data() {
    return {
      activeName: ref(this.$store.state.curIndex),
    }
  },
  methods: {

    changeCurIndex: function(activeName){
      let index =  parseInt(activeName?activeName:0)
      this.$store.commit("changeCurIndex", {index: index})
    },

    editItem: function (index) {
      this.$store.commit("changeFormState", { formState: this.$store.state.FORMSTATE.EDIT, index: index })
    },

    removeItem: function (index) {
      this.$store.commit("removeUserConfig", { index: index })
    }
  }
}
</script>


<style scoped>
.condition {
  display: inline-block;
  margin-left: 5px
}

:deep(.el-collapse-item__wrap) {
  padding: 10px;

}
</style>