<!--<template>
    <textarea id="editor" v-bind:value="text" 
    rows="40" columns="80"
    v-on:input="$emit('update:text', $event.target.value)"> 
    </textarea> 
</template>-->

<template>
    <div id="editor-container">
        <span>Editor</span>
        <textarea id="editor" v-bind:value="text" 
        rows="40" columns="60"
        v-on:input="$emit('update:text', $event.target.value)"> 
        </textarea>
    </div> 
</template>


<script>

    export default {
        name: 'markdown-editor',
        props: {
            text: String
        },
        methods: {
            markedForm() {
                let markedInputData = this.markedinput;
                this.$emit('update:markedinput', markedInputData);
            }
        }
    }
   
</script>

<style>
    #editor-container {
        height: 40em;
        width: 25em;
        flex: 1;
        background-color: black;
        margin: 5px;
        display: flex;
        flex-direction: column;
        -webkit-box-shadow: 0px 1px 15px 3px rgba(11,41,255,0.78); 
box-shadow: 0px 1px 15px 3px rgba(11,41,255,0.78);
    }
    #editor {
        width: auto;
        height: auto;
        background-color: black;
        color: #c5c5ca;
        overflow: hidden;
        resize: none;
        flex: 1;
        /*border: 10px groove silver;*/
    }
    #editor-container > span {
        text-align: center;
        background-color: rgba(119, 119, 150, 0.2);
        height: 4%;
        /*border: 2px solid silver;*/
        -webkit-box-shadow: 0px 1px 36px 3px rgba(253,255,245,0.51); 
box-shadow: 0px 1px 36px 3px rgba(253,255,245,0.51);
    }
</style>

