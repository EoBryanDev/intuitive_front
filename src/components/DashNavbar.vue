<template>
    <nav>

        <h2>Relação de Operadoras Ativas ANS</h2>     

<<<<<<< HEAD
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

=======
        <input type="search" name="searchInput" id="searchInput" v-model="research" placeholder="Procure aqui" >

        <select name="typeResearch" id="typeResearch" v-model="typeResearch">
                            <option selected value="Registro ANS">Registro ANS</option>
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
            <button type="button" class="btn btn-primary btn-sm m-1" data-toggle="modal" data-target="#exampleModal" @click="$emit('researchBar',research,typeResearch)">
                <img src="/img/search.svg" alt="Search button" width="25">
            </button>
            <button type="button" class="btn btn-sm btn-success m-1" data-toggle="modal" data-target="#createModal"><img src="/img/edit.svg" alt="Edit button" width="25"></button>
        </div>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <!--MODAL DE UPDATE E DELETE-->
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Barra de Pesquisa</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div >                      
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clearFields">Close</button>
                        <!--<button @click="$emit('researchBar',research,typeResearch)">Procurar</button>
                        <button @click="clearFields">Limpar Pesquisa</button>-->
                    </div>
                </div>
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
                <div class="modal-body" v-show="research">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Registro ANS</th>
                                <th scope="col">CNPJ</th>
                                <th scope="col">Razão Social</th>
<<<<<<< HEAD
                                <th scope="col">Nome Fantasia</th>                                                     
                                <th scope="col">Ação</th>                                                     
                            </tr>
                        </thead>
                        <tbody>    
=======
                                <th scope="col">Nome Fantasia</th>    
                                <th scope="col">Ações</th>    
                                                      
                            </tr>
                        </thead>
                        <tbody>
                            
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
                            <tr v-for="(filteredItem,index) in researchArray" :key="index" @mouseover="pegarId(filteredItem.id)">                      
                                <td>{{filteredItem["Registro ANS"]}}</td>
                                <td>{{filteredItem.CNPJ}}</td>
                                <td>{{filteredItem["Razão Social"]}}</td>
                                <td v-if="filteredItem['Nome Fantasia']">{{filteredItem['Nome Fantasia']}}</td>
<<<<<<< HEAD
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
=======
                                <td v-else> <small class="text-warning">Dados não disponíveis </small></td>        
                                <td><button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#updateModal"><img src="/img/edit.png" alt="" width="15" ></button> <button class="btn btn-sm btn-danger" @click="deleteData(filteredItem.id)"><img src="/img/bin.png" alt="" width="15"></button></td>                         
                            </tr>
                                 
                        </tbody>
                        </table>
                </div>
                <div class="modal-footer">
                     <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <!--MODAL DE UPDATE-->
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Atualização dos dados</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div >                      
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <!--<button @click="$emit('researchBar',research,typeResearch)">Procurar</button>
                                    <button @click="clearFields">Limpar Pesquisa</button>-->
                                </div>
                            </div>

                            <div class="modal-body">

                            <form @submit="updateData(idAtual)">
                                    <div class="form-row">
                           <div class="col-2">
                                <div class="form-group">
                                    <label for="registroANS">Registro ANS</label>
                                    <input type="text" class="form-control" id="registroANS" v-model="registroANS"  required>
                                </div>
                           </div>
                           <div class="col-3">
                                <div class="form-group">
                                    <label for="cnpj">CNPJ</label>
                                    <input type="text" class="form-control" id="cnpj" placeholder="CNPJ" v-model="cnpj" required>
                                </div>
                           </div>
                           <div class="col">
                                <div class="form-group">
                                    <label for="razaoSocial">Razão Social</label>
                                    <input type="text" class="form-control" id="razaoSocial" v-model="razaoSocial" required>
                                </div>
                           </div>
                       </div>
                       <div class="form-row">
                           <div class="col">
                                <div class="form-group">
                                    <label for="nomeFantasia">Nome Fantasia</label>
                                    <input type="text" class="form-control" v-model="nomeFantasia" id="nomeFantasia">
                                </div>
                           </div>
                           <div class="col">
                               <div class="form-group">
                                    <label for="modalidade">Modalidade</label>
                                    <input type="text" class="form-control" id="modalidade" placeholder="ex. Administradora" v-model="modalidade" required>
                                </div>
                           </div>
                       </div>
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="logradouro">Logradouro</label>
                                    <input type="text" class="form-control" id="logradouro" placeholder="ex. Rua, Avenida..." v-model="logradouro" required>
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="form-group">
                                    <label for="numero">Número</label>
                                    <input type="text" class="form-control" id="numero" v-model="numero"  required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="complemento">Complemento</label>
                                    <input type="text" class="form-control" id="complemento" v-model="complemento" >
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="bairro">Bairro</label>
                                    <input type="text" class="form-control" id="bairro" v-model="bairro"  required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="cidade">Cidade</label>
                                    <input type="text" class="form-control" id="cidade" v-model="cidade"  required>
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="form-group">
                                    <label for="uf">UF</label>
                                    <input type="text" class="form-control" id="uf" v-model="uf" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="cep">CEP</label>
                                    <input type="text" class="form-control" id="cep" v-model="cep" required>
                                </div>
                            </div>
                        </div>             
                        
                        <div class="form-row">
                            <div class="col-1">
                                <div class="form-group">
                                    <label for="ddd">DDD</label>
                                    <input type="text" class="form-control" id="ddd" v-model="ddd" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="tel">Telefone</label>
                                    <input type="text" class="form-control" id="tel" v-model="tel" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="fax">FAX</label>
                                    <input type="text" class="form-control" id="fax" v-model="fax" >
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="endEletronico">Endereço eletrônico</label>
                                    <input type="email" class="form-control" id="endEletronico" v-model="endEletronico" required>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">                           
                            <div class="col">
                                <div class="form-group">
                                    <label for="rep">Representante</label>
                                    <input type="text" class="form-control" id="rep" v-model="rep" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="cargRep">Cargo Representante</label>
                                    <input type="text" class="form-control" id="cargRep" v-model="cargRep" required>
                                </div>     
                            </div>                 
                        </div>
                        <div class="form-row">
                            <div class="col-1">
                                <div class="form-group">
                                    <label for="dataANS">Registro ANS</label>
                                    <input type="text" class="form-control" id="dataANS" v-model="dataANS" required>
                                </div>
                            </div>
                        </div>               
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form>
                            </div>
                            <div class="modal-footer">
                                
                            </div>
                            </div>
                        </div>
        </div>
                </div>
                </div>
            </div>
        </div>
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
                        <!--<button @click="$emit('researchBar',research,typeResearch)">Procurar</button>
                        <button @click="clearFields">Limpar Pesquisa</button>-->
                    </div>
                </div>

                <div class="modal-body">

                   <form @submit="insertData()">
                       <div class="form-row">
                           <div class="col-2">
                                <div class="form-group">
                                    <label for="registroANS">Registro ANS</label>
                                    <input type="text" class="form-control" id="registroANS" v-model="registroANS" required>
                                </div>
                           </div>
                           <div class="col-3">
                                <div class="form-group">
                                    <label for="cnpj">CNPJ</label>
                                    <input type="text" class="form-control" id="cnpj" placeholder="CNPJ" v-model="cnpj" required>
                                </div>
                           </div>
                           <div class="col">
                                <div class="form-group">
                                    <label for="razaoSocial">Razão Social</label>
                                    <input type="text" class="form-control" id="razaoSocial" v-model="razaoSocial" required>
                                </div>
                           </div>
                       </div>
                       <div class="form-row">
                           <div class="col">
                                <div class="form-group">
                                    <label for="nomeFantasia">Nome Fantasia</label>
                                    <input type="text" class="form-control" v-model="nomeFantasia" id="nomeFantasia">
                                </div>
                           </div>
                           <div class="col">
                               <div class="form-group">
                                    <label for="modalidade">Modalidade</label>
                                    <input type="text" class="form-control" id="modalidade" placeholder="ex. Administradora" v-model="modalidade" required>
                                </div>
                           </div>
                       </div>
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="logradouro">Logradouro</label>
                                    <input type="text" class="form-control" id="logradouro" placeholder="ex. Rua, Avenida..." v-model="logradouro" required>
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="form-group">
                                    <label for="numero">Número</label>
                                    <input type="text" class="form-control" id="numero" v-model="numero"  required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="complemento">Complemento</label>
                                    <input type="text" class="form-control" id="complemento" v-model="complemento" >
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="bairro">Bairro</label>
                                    <input type="text" class="form-control" id="bairro" v-model="bairro"  required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="cidade">Cidade</label>
                                    <input type="text" class="form-control" id="cidade" v-model="cidade"  required>
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="form-group">
                                    <label for="uf">UF</label>
                                    <input type="text" class="form-control" id="uf" v-model="uf" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="cep">CEP</label>
                                    <input type="text" class="form-control" id="cep" v-model="cep"  required>
                                </div>
                            </div>
                        </div>             
                        
                        <div class="form-row">
                            <div class="col-1">
                                <div class="form-group">
                                    <label for="ddd">DDD</label>
                                    <input type="number" class="form-control" id="ddd" step="1" v-model="ddd" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="tel">Telefone</label>
                                    <input type="text" class="form-control" id="tel" v-model="tel" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="fax">FAX</label>
                                    <input type="text" class="form-control" id="fax" v-model="fax" >
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="endEletronico">Endereço eletrônico</label>
                                    <input type="email" class="form-control" id="endEletronico" v-model="endEletronico" required>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">                           
                            <div class="col">
                                <div class="form-group">
                                    <label for="rep">Representante</label>
                                    <input type="text" class="form-control" id="rep" v-model="rep" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="cargRep">Cargo Representante</label>
                                    <input type="text" class="form-control" id="cargRep" v-model="cargRep" required>
                                </div>     
                            </div>                 
                        </div>
                        <div class="form-row">
                            <div class="col-1">
                                <div class="form-group">
                                    <label for="dataANS">Registro ANS</label>
                                    <input type="text" class="form-control" id="dataANS" v-model="dataANS"  maxlength="10" required>
                                </div>
                            </div>
                        </div>               
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
                <div class="modal-footer">
                    
                </div>
                </div>
            </div>
        </div>
       

    </nav>
</template>
<script>
    export default {
        name: "DashNavbar",
        data(){
            return{
                research: "",
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
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

<<<<<<< HEAD

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
=======
                toUpdate: {},
                
                idAtual : null,
                alterado : false

            }

            
        },
        props:{
            researchArray : Array
        },      
        methods: {
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
            clearFields(){
                this.typeResearch = null;
                this.research = "";
            },
<<<<<<< HEAD
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
=======
            pegarId(id){
                this.idAtual = id
            },                      
            //DELETE IS WORKING
            async deleteData(id){
                 const req = await fetch(`http://localhost:3000/jsondata/${id}`,{
                     method: "DELETE"
                 });               
            },
            async updateData(id){

                const data = {
                    "Registro ANS": this.registroANS,
                    "CNPJ": this.cnpj,
                    "Razão Social": this.razaoSocial,
                    "Nome Fantasia": this.nomeFantasia,
                    "Modalidade": this.modalidade,
                    "Logradouro": this.logradouro,
                    "Número": this.numero,
                    "Complemento": this.complemento,
                    "Bairro": this.bairro,
                    "Cidade": this.cidade,
                    "UF": this.uf,
                    "CEP": this.cep,
                    "DDD": this.ddd,
                    "Telefone": this.tel,
                    "Fax": this.fax,
                    "Endereço eletrônico": this.endEletronico,
                    "Representante": this.rep,
                    "Cargo Representante":this.cargRep,
                    "Data Registro ANS": this.dataANS
                };
                const dataJson = JSON.stringify(data);

                const req = await fetch(`http://localhost:3000/jsondata/${id}`,{
                    method: "PATCH",
                    headers: { "Content-Type": "application/json"},
                    body: dataJson
                });

                const res = await req.json();
                console.log(res);

                this.registroANS = null;
                this.cnpj= null;
                this.razaoSocial= null;
                this.nomeFantasia= null;
                this.modalidade= null;
                this.logradouro= null;
                this.numero= null;
                this.complemento= null;
                this.bairro= null;
                this.cidade= null;
                this.uf= null;
                this.cep= null;
                this.ddd= null;
                this.tel= null;
                this.fax= null;
                this.endEletronico= null;
                this.rep= null;
                this.cargRep= null;
                this.dataANS= null;
            }
            ,
            //CREATING IS WORKING
            async insertData(){
                const data = {
                    "Registro ANS": this.registroANS,
                    "CNPJ": this.cnpj,
                    "Razão Social": this.razaoSocial,
                    "Nome Fantasia": this.nomeFantasia,
                    "Modalidade": this.modalidade,
                    "Logradouro": this.logradouro,
                    "Número": this.numero,
                    "Complemento": this.complemento,
                    "Bairro": this.bairro,
                    "Cidade": this.cidade,
                    "UF": this.uf,
                    "CEP": this.cep,
                    "DDD": this.ddd,
                    "Telefone": this.tel,
                    "Fax": this.fax,
                    "Endereço eletrônico": this.endEletronico,
                    "Representante": this.rep,
                    "Cargo Representante":this.cargRep,
                    "Data Registro ANS": this.dataANS
                };

                const dataJson = JSON.stringify(data);

                const req = await fetch("http://localhost:3000/jsondata",{
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: dataJson
                });

                const res = await req.json();
                console.log(res);

                this.registroANS = null;
                this.cnpj= null;
                this.razaoSocial= null;
                this.nomeFantasia= null;
                this.modalidade= null;
                this.logradouro= null;
                this.numero= null;
                this.complemento= null;
                this.bairro= null;
                this.cidade= null;
                this.uf= null;
                this.cep= null;
                this.ddd= null;
                this.tel= null;
                this.fax= null;
                this.endEletronico= null;
                this.rep= null;
                this.cargRep= null;
                this.dataANS= null;

            }
            //UPDATING NOT WORKING YET
            /*async updateData(){
                
            }*/
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
        }
    }
</script>

<style scoped>
<<<<<<< HEAD
    
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
=======

>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
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