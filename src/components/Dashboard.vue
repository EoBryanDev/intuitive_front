<template>
    <section id="dashContainer">
        <DashNavbar @researchBar="setSearchContent" @typeResearch="setTypeOfSearch"/>
        <main id="dashContent">
            <DataTable />
        </main>
    </section>
</template>

<script>
    import DashNavbar from "./DashNavbar.vue";
    import DataTable from "./DataTable.vue";
    import Pagination from "./Pagination.vue";
    export default {
        name: "Dashboard",
        components: {
            DashNavbar,
            DataTable,
            Pagination
        },
        data(){
            return {
                research: null,
                typeResearch: null
            }
        },
        methods:{
            setSearchContent(value){
                this.research = value;
                console.log(this.research);
            },
            setTypeOfSearch(value){
                this.typeResearch = value;
                console.log(this.typeResearch)
            }
        }

    }
</script>

<style scoped>
   #dashContainer{
        width: 90%;
        height: 700px;
        box-shadow: 0 0px 2px rgb(131, 129, 129);
        border-radius: 5px;
        margin: 0 auto;
        padding: 5px;
        background-color: #fff;
        margin-bottom: 50px;
    }
    
    #dashContent{
    border-collapse: separate;
    border-spacing: 0px; 
       
    }
    
    
    

   
</style>