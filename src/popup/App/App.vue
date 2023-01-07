<template>
    <div>
        <!-- 标题和一些设置小按钮 -->
        <div class="header">
            <h2>SB Baidu</h2>
            <div>
                <!-- 新建站点 -->
                <el-button text icon="Plus" :dark='true' @click="addItem" />
                <!-- 夜间模式 -->
                <el-button text :icon="isDark ? 'Moon' : 'Sunny'" :dark='true' @click="toggle" />
                <!-- 捐赠 -->
                <el-tooltip placement="left" effect="customized">
                    <el-button text>❤️</el-button>
                    <template #content>
                        <img @click="toggle" class="love-img" src="@/assets/images/love.png" alt="">
                    </template>
                </el-tooltip>
            </div>
        </div>

        <!-- 主体内容 -->
        <div class="body">
            <!-- 展示数据 -->
            <SiteList v-if="$store.state.curState === $store.state.FORMSTATE.LIST"></SiteList>
            <!-- 修改数据 -->
            <SiteForm v-else></SiteForm>
        </div>
    </div>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
import SiteList from "./SiteList.vue";
import SiteForm from "./SiteForm.vue";

export default {
    name: "App",
    components: {
        SiteForm,
        SiteList,
    },
    data() {
        return {
            isDark: useDark(),
        };
    },
    methods: {
        toggle: function () {
            this.isDark = !this.isDark;
            useToggle(this.isDark);
        },

        addItem: function () {
            this.$store.commit("changeFormState", { formState: this.$store.state.FORMSTATE.ADD })
        },
    },
};
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 350px;
    height: 600px;
    overflow: scroll;
}

.header {
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 40px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background-color: lightpink;
    color: white;
}

.light-icon {
    color: yellow
}

.gray {
    filter: grayscale(1);
}

.body {
    margin: 15px 40px 0 40px;
}

.love-img {
    height: 200px;
}

.el-popper.is-customized {
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
}
</style>
