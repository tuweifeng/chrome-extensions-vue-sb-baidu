<template>
    <div>
        <p>
            <label for="title">标题</label>
            <input name="title" id="title" v-modle="formdata.title" type="text" placeholder="请输入标题">
        </p>
        
        <p>
            <label for="url">URL</label>
            <input name="url" id="url" v-modle="formdata.url" type="text" placeholder="请输入URL，支持表达式">
        </p>

        
        <p v-for="conditions, name in formdata.actions" :key="name">
            <label :for="name">{{name}}</label>

            <button @click="addCondition(name)">添加</button>

            <p v-for="condition, index in conditions" :key="condition">
                <input v-modle="condition" type="text" placeholder="请输入条件">
                <button @click="removeCondition(name, index)">删除</button>
            </p>
        </p>

        <button @click="save">保存</button>

    </div>
</template>

<script>

import Ref from 'vue'

export default {
    name: "Form",
    props: {
        index: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            formdata: Ref(this.$store.state.exampleConfig)
        }
    },

    methods: {
        addCondition: function(actionName){
            Reflect.get(this.formdata.actions, actionName).splice(0, 0, "")
        },

        removeCondition: function(actionName, index){
            Reflect.get(this.formdata.actions, actionName).splice(index, 1)
        },

        save: function(){
            if (this.index>=0){
                this.$store.commit('addUserConfig', this.formdata)
            }
            else{
                this.$store.commit('editUserConfig', this.index, this.formdata)
            }
            this.$router.go(-1)
        }
        
    }



}
</script>