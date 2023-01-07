<template>
    <div>
        <el-form label-position="left" :model="form" label-width="120px">
            <el-form-item label="标题">
                <el-input v-model="form.title"/>
            </el-form-item>
            <el-form-item label="URL">
                <el-input v-model="form.url" />
            </el-form-item>

            <el-form-item :label="action.label" v-for="action, actionName in form.actions" :key="actionName">
                <el-switch v-model="action.open"></el-switch>
                <el-input v-for="element, i in action.elements" clearable v-model="action.elements[i]" :key="i">
                    <template #append>
                        <el-button  @click="removeElement(actionName, i)" icon="RemoveFilled" />
                    </template>
                </el-input>
                <el-button @click="addElement(actionName)">+</el-button>
            </el-form-item>

        <el-form-item>
            <el-button @click="close">取消</el-button>
            <el-button @click="save">保存</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: "SiteForm",
    data() {
        return {
            form: {},
        }
    },
    computed: {
        isEditForm() {
            return this.$store.state.curState == this.$store.state.FORMSTATE.EDIT
        },
        isAddForm() {
            return this.$store.state.curState == this.$store.state.FORMSTATE.ADD
        },
        curIndex: function () {
            return this.$store.state.curIndex
        },
        curForm: function () {
            if (this.isEditForm) {
                return JSON.parse(JSON.stringify(this.$store.state.userConfig[this.curIndex]))
            }
            else if (this.isAddForm) {
                return JSON.parse(JSON.stringify(this.$store.state.exampleConfig))
            }
            else {
                return {}
            }
        }
    },
    beforeMount() {
        this.form = this.curForm
        console.log(this.form)
    },

    methods: {
        addElement: function (actionName) {
            Reflect.get(this.form.actions, actionName).elements.push('')
        },

        removeElement: function (actionName, index) {
            Reflect.get(this.form.actions, actionName).elements.splice(index, 1)
        },

        save: function () {
            if (this.isAddForm) {
                this.$store.commit('addUserConfig', { newConfig: this.form })
            }
            else {
                this.$store.commit('editUserConfig', { newConfig: this.form, index: this.curIndex })
            }
            this.close()
        },

        close: function () {
            this.$store.commit('changeFormState', { formState: this.$store.state.FORMSTATE.LIST })
        }

    }



}
</script>