<template>
    <section id="dashContainer">
        <DashNavbar 
            :researchArray="researchArray" 
            @researchBar="getData"
            :hmFiltered="hmFiltered" 
            :totData="totData"   
        />
        <main id="dashContent">
            <DataTable />
        </main>
    </section>
</template>

<script>
 /* eslint-disable */
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
                researchArray: [],
                hmFiltered: 0,
                totData: 0,
            }
        },
        methods:{
            async getData(search,field){
               try {
                    const req =  await fetch('http://localhost:3000/jsondata');
                    const data =  await req.json();

                    this.researchArray = data;
                    this.totData = data.length       
                    this.researchFilter(search,field)   

               } catch (error) {
                   console.log(error.message)
               }
                
            },

            researchFilter(value,type){        
                const realArray = this.researchArray
                let text = value ? `${value}` : ""
                let i = type ? type : ""

                if(text && i == true || text && i != ""){            
                    const filteredArray = realArray.filter((data) => {
                        const fromArray = data[i];
                        const arr = fromArray || [];
                        return arr?.includes(text)
                    })
                    this.researchArray = filteredArray   

                    this.hmFiltered = filteredArray.length                
                } else {
                    this.researchArray = [];
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