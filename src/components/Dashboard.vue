<template>
    <section id="dashContainer">
        <DashNavbar :researchArray="researchArray" @researchBar="getData" />
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
                typeResearch: null,
                researchArray: []
            }
        },
        methods:{
           async getData(search,field){
                const req = await fetch('http://localhost:3000/jsondata');
                const data = await req.json();

                this.researchArray = data;
         
               this.researchFilter(search,field)   
            },
            researchFilter(value,type){              

                let text = value ? `${value}` : ""
                let i = type ? type : ""

                if(text && i || text && i != ""){
                    let regex = new RegExp(text)
                    const pesquisa = this.researchArray.filter((n)=> n[i].match(regex))
                    this.researchArray = pesquisa
                    console.log(this.researchArray);
                    return true;

                }
            },
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