<template>
    <nav>

        <h2>Relação de Operadoras Ativas ANS</h2>     

        <input type="search" name="searchInput" id="searchInput" v-tooltip.bottom="'Digite sua pesquisa'" @change="validSearch" v-model="research" placeholder="Procure aqui" >

        <select name="typeResearch" id="typeResearch" v-model="typeResearch" @change="validSearch" v-tooltip.top="'Selecione opção de busca'">
            <option value="">Selecione alguma opção</option>
            <option value="Registro ANS">Registro ANS</option>
            <option value="CNPJ">CNPJ</option>
            <option value="Razão Social">Razão Social</option>
            <option value="Nome Fantasia">Nome Fantasia</option>
            <option value="Modalidade">Modalidade</option>
            <option value="Logradouro">Logradouro</option>
            <option value="Número">Número</option>
            <option value="Complemento">Complemento</option>
            <option value="Bairro">Bairro</option>
            <option value="Cidade">Cidade</option>
            <option value="UF">UF</option>
            <option value="CEP">CEP</option>
            <option value="DDD">DDD</option>
            <option value="Telefone">Telefone</option>
            <option value="Fax">Fax</option>
            <option value="Endereço Eletrônico">Endereço Eletrônico</option>
            <option value="Representante">Representante</option>
            <option value="Cargo Representante">Cargo Representante</option>
        </select>
                        
        <div>
            <button type="button" class="btn btn-primary btn-sm m-1" data-toggle="modal" data-target="#exampleModal" disabled @click="$emit('researchBar',research,typeResearch)" id="research" >
                <i class="pi pi-search" ></i>
            </button>
            <button type="button" class="btn btn-sm btn-success m-1" data-toggle="modal" data-target="#createModal">
                <i class="pi pi-plus" ></i>
            </button>
        </div>
        

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <!--MODAL DE UPDATE E DELETE-->

            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                        <h5 class="modal-title" id="exampleModalLabel">Barra de Pesquisa</h5>
                            <!--Button to close modal-->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                <div class="modal-body row">
                    <div class="col-md-3 align-self-center">                      
                        <button type="button" class="btn btn-info" data-dismiss="modal" @click="clearFields">Close and Reset</button>
                    </div>
                    <div class="col-md-9 align-self-center text-info" v-show="research">
                        <h6 class="text-right">{{hmFiltered}} de {{totData}} registros. Busca realizada por:  <em class="text-secondary">{{research}}</em> e <em class="text-secondary">{{typeResearch}}</em> </h6>
                    </div>
                </div>

                <div class="modal-body" v-show="research">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Registro ANS</th>
                                <th scope="col">CNPJ</th>
                                <th scope="col">Razão Social</th>
                                <th scope="col">Nome Fantasia</th>                                                     
                                <th scope="col">Ação</th>                                                     
                            </tr>
                        </thead>
                        <tbody>    
                            <tr v-for="(filteredItem,index) in researchArray" :key="index" @mouseover="pegarId(filteredItem.id)">                      
                                <td>{{filteredItem["Registro ANS"]}}</td>
                                <td>{{filteredItem.CNPJ}}</td>
                                <td>{{filteredItem["Razão Social"]}}</td>
                                <td v-if="filteredItem['Nome Fantasia']">{{filteredItem['Nome Fantasia']}}</td>
                                <td v-else> <small class="text-danger">Dados não disponíveis</small></td>        
                                <td>
                                    <button class="btn btn-warning optionEdit" data-toggle="modal" data-target="#updateModal" @click="bringdata(filteredItem.CNPJ)" >
                                        <i class="pi pi-pencil"></i>
                                    </button> 
                                    <ConfirmDialog></ConfirmDialog>
                                    <Button class="p-button-danger optionsDelete" @click="deleteData($event,filteredItem.id,filteredItem['Razão Social'])" label="Confirm"><i class="pi pi-trash"></i></Button>
                                </td>                     
                            </tr>                         
                        </tbody>
                    </table>
                </div>
                <!--Comum part ^^^^^^ -->
                    <div class="modal-footer">
                        <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <!--MODAL DE UPDATE-->
                            <div class="modal-dialog modal-xl" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Atualização dos dados</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div >                      
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>                             

                                    <div class="modal-body">
                                        <Form @action="updateData" :datas="toUpdate" :buttonLoad="true" />                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Toast />
        <div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <!--MODAL DE CREATE-->
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Inserção de dados</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div >                      
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <Form @action="insertData" :buttonLoad="false" />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
 /* eslint-disable */
 import Form from "./Form.vue"
    export default {
        name: "DashNavbar",
        components: {
            Form
        }
        ,
        data(){
            return{
                research: null,
                typeResearch: null,

                registroANS: null,
                cnpj: null,
                razaoSocial: null,
                nomeFantasia: null,
                modalidade: null,
                logradouro: null,
                numero: null,
                complemento: null,
                bairro: null,
                cidade: null,
                uf: null,
                cep: null,
                ddd: null,
                tel: null,
                fax: null,
                endEletronico: null,
                rep: null,
                cargRep: null,
                dataANS: null,


                toUpdate: null,
                

                idAtual : null,

            }           
        },
        props:{
            researchArray: Array,
            hmFiltered: Number,
            totData: Number
        },
        methods: {
            validSearch(){
                const searchInput = document.getElementById('searchInput').value
                const typeResearch = document.getElementById('typeResearch').value
                console.log('entrei')
                console.log(searchInput)
                console.log(typeResearch)
                if(searchInput && typeResearch == null || searchInput && typeResearch == "") {
                    document.getElementById('research').disabled = true;
                }else {
                    document.getElementById('research').disabled = false;
                }

            },
            clearFields(){
                this.typeResearch = null;
                this.research = "";
            },
            bringdata(cnpjTooked){
                    const mydata = this.researchArray.filter(f => f.CNPJ == cnpjTooked)
                    const datasToUpdate = {
                        id: mydata[0]["id"],
                        registroANS : mydata[0]["Registro ANS"],
                        cnpj: mydata[0]["CNPJ"],
                        razaoSocial: mydata[0]["Razão Social"],
                        nomeFantasia: mydata[0]["Nome Fantasia"],
                        modalidade: mydata[0]["Modalidade"],
                        logradouro: mydata[0]["Logradouro"],
                        numero: mydata[0]["Número"],
                        complemento: mydata[0]["Complemento"],
                        bairro: mydata[0]["Bairro"],
                        cidade: mydata[0]["Cidade"],
                        uf: mydata[0]["UF"],
                        cep: mydata[0]["CEP"],
                        ddd: mydata[0]["DDD"],
                        tel: mydata[0]["Telefone"],
                        fax: mydata[0]["Fax"],
                        endEletronico: mydata[0]["Endereço eletrônico"],
                        rep: mydata[0]["Representante"],
                        cargRep: mydata[0]["Cargo Representante"],
                        dataANS: mydata[0]["Data Registro ANS"],

                        showButton: true
                    }
                    
                    this.toUpdate = datasToUpdate;
                
                
            },
            pegarId(id){
                this.idAtual = id
            },    
            discard() {
            this.$confirm.close();
            },
            deleteData(event, id,name){
                this.$confirm.require({
                target: event.currentTarget,
                message: `Você tem certeza que deseja excluir o item: ${name}?`,
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    const req =  fetch(`http://localhost:3000/jsondata/${id}`,{
                        method: "DELETE"    
                            
                 });    
                 this.$toast.add({severity:'success', summary: 'Ação realizada com sucesso!', detail:'Item foi Deletado com sucesso', life: 1000});
                    setTimeout(() => {
                        location.reload();
                    }, "1300")       
                },
                reject: () => {
                   this.discard();    
                   console.log('rejeitado')
                }
            });
                            
            },
             async updateData(dataToUpdate){
                console.log(dataToUpdate)
                try {                  
                    const id = dataToUpdate["id"]
                    const data = {
                        "id" : dataToUpdate["id"],
                        "Registro ANS": dataToUpdate["registroANS"],
                        "CNPJ": dataToUpdate["cnpj"],
                        "Razão Social": dataToUpdate["razaoSocial"],
                        "Nome Fantasia": dataToUpdate["nomeFantasia"],
                        "Modalidade": dataToUpdate["modalidade"],
                        "Logradouro": dataToUpdate["logradouro"],
                        "Número": dataToUpdate["numero"],
                        "Complemento": dataToUpdate["complemento"],
                        "Bairro": dataToUpdate["bairro"],
                        "Cidade": dataToUpdate["cidade"],
                        "UF": dataToUpdate["uf"],
                        "CEP": dataToUpdate["cep"],
                        "DDD": dataToUpdate["ddd"],
                        "Telefone": dataToUpdate["tel"],
                        "Fax": dataToUpdate["fax"],
                        "Endereço eletrônico": dataToUpdate["endEletronico"],
                        "Representante": dataToUpdate["rep"],
                        "Cargo Representante": dataToUpdate["cargRep"],
                        "Data Registro ANS": dataToUpdate["dataANS"]
                    };
                    
                    const dataJson = JSON.stringify(data);
    
                    const req = await fetch(`http://localhost:3000/jsondata/${id}`,{
                        method: "PATCH",
                        headers: { "Content-Type": "application/json"},
                        body: dataJson
                    });
                    this.$toast.add({severity:'success', summary: 'Ação realizada com sucesso!', detail:'Item foi Atualizado com sucesso', life: 1000});
                    const res = await req.json();

                    setTimeout(() => {
                        location.reload();
                    }, "1300")                   

                } catch (error) {
                    console.log('erro na edicao')
                    console.log(error.message)
                }
               

              
            },
            async insertData(datas){
                try {
                    const data = {
                        "id" : datas["id"],
                        "Registro ANS": datas["registroANS"],
                        "CNPJ": datas["cnpj"],
                        "Razão Social": datas["razaoSocial"],
                        "Nome Fantasia": datas["nomeFantasia"],
                        "Modalidade": datas["modalidade"],
                        "Logradouro": datas["logradouro"],
                        "Número": datas["numero"],
                        "Complemento": datas["complemento"],
                        "Bairro": datas["bairro"],
                        "Cidade": datas["cidade"],
                        "UF": datas["uf"],
                        "CEP": datas["cep"],
                        "DDD": datas["ddd"],
                        "Telefone": datas["tel"],
                        "Fax": datas["fax"],
                        "Endereço eletrônico": datas["endEletronico"],
                        "Representante": datas["rep"],
                        "Cargo Representante": datas["cargRep"],
                        "Data Registro ANS": datas["dataANS"]
                    };
    
                    const dataJson = JSON.stringify(data);
                    
                    const req = await fetch("http://localhost:3000/jsondata",{
                        method: "POST",
                        headers: { "Content-Type": "application/json"},
                        body: dataJson
                    });
    
                    const res = await req.json();         
                    this.$toast.add({severity:'success', summary: 'Ação realizada com sucesso!', detail:'Item foi Inserido com sucesso', life: 1000});
                    setTimeout(() => {
                        location.reload();
                    }, "1300")
                    
                } catch (error) {
                    console.log(error.message)
                }

            }
        }
    }
</script>

<style scoped>
    
    button i, .optionsDelete, .optionEdit{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .optionEdit{
        width: 34px;
    }
    nav {
        margin: 10px;
        display: flex;
        justify-content: space-around;
        background-color: #fff;
    }

    h2{
        color: #5161f1;
    }
    #searchInput{
        padding: 5px;
        border: 1px dotted;
        border-radius: 5px;
        width: 20%;
        color: #5161f1;
        margin-right: 5px;
        max-height: 50px;
    }
    #searchInput:focus{
        box-shadow: 0;
        border: 1px solid #ff9720;
        border-radius: 5px;
        outline: 0;
    }
     #searchInput:focus::placeholder{
         color: transparent;
     }
    #searchInput::placeholder{
        color: #ff9720;
    }
     #typeResearch{
        padding: 5px;
        border: 1px dotted #000000;
        border-radius: 5px;
        color: #5161f1;
        width: 20%;
        max-height: 50px;
        margin: 0 5px;
    }
    
</style>