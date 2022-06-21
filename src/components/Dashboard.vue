<template>
    <section id="dashContainer">
<<<<<<< HEAD
        <DashNavbar 
            :researchArray="researchArray" 
            @researchBar="getData"
            :hmFiltered="hmFiltered" 
            :totData="totData"   
        />
=======
        <DashNavbar :researchArray="researchArray" @researchBar="getData" />
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
        <main id="dashContent">
            <DataTable />
        </main>
    </section>
</template>

<script>
<<<<<<< HEAD
 /* eslint-disable */
=======
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
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
<<<<<<< HEAD
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

=======
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
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
               } catch (error) {
                   console.log(error.message)
               }
                
            },

<<<<<<< HEAD
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
=======


            researchFilter(value,type){           
                let text = value ? `${value}` : ""
                let i = type ? type : ""
                
               

                if(text && i == true || text && i != ""){                   
                    const filteredArray = this.researchArray.filter(data => {
                        return data[i].toLowerCase().includes(text.toLowerCase())
                    })

                    this.researchArray = filteredArray                    

>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
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