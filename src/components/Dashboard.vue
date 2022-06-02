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
                this.researchArray = [];
                const req = await fetch('http://localhost:3000/jsondata');
                const data = await req.json();

                this.researchArray = data;
         
               this.researchFilter(search,field)   
            },
            researchFilter(value,type){              

                let text = value ? `${value}` : ""

                let i = type ? type : ""
    //OS DADOS DE PESQUISA ESTÃO CHEANDO AQUI MAS O FILTER NÃO ESTÁ PEGANDO O QUE DEVERIA
                if(text && i == true || text && i != ""){
                    const regex = new RegExp(text)
                    const pesquisa = this.researchArray.filter((n)=> n[i].match(regex))
                    console.log(pesquisa)
                    //
                    
                    this.researchArray = pesquisa
                    console.log(this.researchArray);
                    console.log("ali")
                    

                } else {
                    console.log("here")
                    this.researchArray = [];
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