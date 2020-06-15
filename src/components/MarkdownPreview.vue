<!--<template>
    <div id="preview" v-html="markedDownText"></div>
</template>-->

<template>
    <div id="preview-container">
        <span>Previewer</span>
        <div id="preview" v-html="markedDownText"></div>
    </div>
</template>


<script>
let marked = require('marked');

export default {
    name: 'markdown-preview',
    props: {
        showdata: String
    },
    computed: {
        markedDownText() {
            //let markedText = marked(this.show)
            return marked(this.showdata);
        }
    }
}
</script>

<style>
    #preview-container {
        height: auto;
        width: 25em;
        color: white;
        
        flex: 1;
         background-color: black;
        margin: 5px;
        display: flex;
        flex-direction: column;
        -webkit-box-shadow: 0px 1px 15px 3px rgba(11,41,255,0.78); 
        box-shadow: 0px 1px 15px 3px rgba(11,41,255,0.78);
    }
    #preview {
        width: auto;
        height: 96%;
        /*border: 5px outset silver;*/
        background-color: black;
        color:#0fe60f;
    }

    #preview-container > span {
        text-align: center;
        
        background-color: rgba(119, 119, 150, 0.2);
        height: 4%;
        /*border: 2px solid silver;*/
        -webkit-box-shadow: 0px 1px 36px 3px rgba(253,255,245,0.51); 
box-shadow: 0px 1px 36px 3px rgba(253,255,245,0.51);
    }
</style>
