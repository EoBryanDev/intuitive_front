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
               try {
                   const req = await fetch('http://localhost:3000/jsondata');
                const data = await req.json();

                this.researchArray = data;            
                this.researchFilter(search,field)   
               } catch (error) {
                   console.log(error.message)
               }
                
            },



            researchFilter(value,type){           
                let text = value ? `${value}` : ""
                let i = type ? type : ""
                

                if(text && i == true || text && i != ""){                   
                    
                    const filteredArray = this.researchArray.filter((data)=> data[i] === text)
                    this.researchArray = filteredArray

                    //const filtro = filteredArray.filter(n => n["Razão Social"].match(/CAIXA/))
                    /*const pesquisa = this.researchArray.filter( (n) => n[i].match(regex))
                    //this.researchArray = pesquisa

                    --------------------------REVER DEPOIS O PORQUÊ DO VUE NÃO ESTAR CONSEGUINDO LER O REGEX DO MATCH
                    */
                    console.log("ali")
                    

                } else {
                    this.researchArray = [];
                    console.log("here")
                }
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