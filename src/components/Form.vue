<!-- 
        JÁ ESTA RETORNANDO OS DADOS DO UPDATE
        FALTA COLOCAR MASCARA 
        PASSAR BOOTSTRAP PARA O VUE SEI LÁ OQ
        TESTAR OS CAMPOS E CRUD
        
-->
<template>

        <div>
            <div v-show="buttonLoad">
                <h5>Para carregar dados clique botão ao lado</h5>
                <button  @click.prevent="loadData(datas)" class="btn btn-success">Carregar dados do usuário</button> 
            </div>

        <hr>
        <form @submit.prevent="$emit('action',data)">                  
            <div class="form-row">
                <div class="col-2">
                        <div class="form-group">
                            <label for="registroANS">Registro ANS</label>
                            <InputMask class="form-control" id="registroANS" v-model="data.registroANS" mask="999999?9999" v-tooltip.bottom="'Mínimo de 6 números'" required />
                        </div>
                </div>
                <div class="col-3">
                        <div class="form-group">
                            <label for="cnpj">CNPJ</label>
                            <InputMask class="form-control" id="cnpj" placeholder="CNPJ" v-model="data.cnpj" v-tooltip="'Digite apenas números'" mask="99.999.999/0001-99" required />
                        </div>
                </div>
                <div class="col">
                        <div class="form-group">
                            <label for="razaoSocial">Razão Social</label>
                            <input type="text" class="form-control" id="razaoSocial" v-model="data.razaoSocial" required>
                        </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                        <div class="form-group">
                            <label for="nomeFantasia">Nome Fantasia</label>
                            <input type="text" class="form-control" v-model="data.nomeFantasia" id="nomeFantasia">
                        </div>
                </div>
                <div class="col">
                    <div class="form-group">
                            <label for="modalidade">Modalidade</label>
                            <input type="text" class="form-control" id="modalidade" placeholder="ex. Administradora" v-model="data.modalidade" required>
                        </div>
                </div>
            </div>
                <div class="form-row">
                    <div class="col">
                        <div class="form-group">
                            <label for="logradouro">Logradouro</label>
                            <input type="text" class="form-control" id="logradouro" placeholder="ex. Rua, Avenida..." v-model="data.logradouro" required>
                        </div>
                    </div>
                    <div class="col-1">
                        <div class="form-group">
                            <label for="numero">Número</label>
                            <InputMask class="form-control" id="numero" v-model="data.numero" mask="9?99999" v-tooltip.bottom="'Mínimo de 1 número'" required />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="complemento">Complemento</label>
                            <input type="text" class="form-control" id="complemento" v-model="data.complemento" >
                        </div>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="col">
                        <div class="form-group">
                            <label for="bairro">Bairro</label>
                            <input type="text" class="form-control" id="bairro" v-model="data.bairro" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="cidade">Cidade</label>
                            <input type="text" class="form-control" id="cidade" v-model="data.cidade" required>
                        </div>
                    </div>
                    <div class="col-1">
                        <div class="form-group">
                            <label for="uf">UF</label>
                            <InputMask class="form-control" id="uf" v-model="data.uf" mask="aa" required />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="cep">CEP</label>
                            <InputMask class="form-control" id="cep" v-model="data.cep" v-tooltip="'XXXXX-XXX'" mask="99999-999" required />
                        </div>
                    </div>
                </div>             
                
                <div class="form-row">
                    <div class="col-1">
                        <div class="form-group">
                            <label for="ddd">DDD</label>
                            <InputMask class="form-control" id="ddd" v-model="data.ddd" v-tooltip="'XX'" mask="(99)" required />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="tel">Telefone</label>
                            <InputMask class="form-control" id="tel" v-model="data.tel" mask="9 9999-9999" required />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="fax">FAX</label>
                            <input class="form-control" id="fax" v-model="data.fax" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="endEletronico">Endereço eletrônico</label>
                            <input type="email" class="form-control" id="endEletronico" v-model="data.endEletronico" required>
                        </div>
                    </div>
                </div>
                <div class="form-row">                           
                    <div class="col">
                        <div class="form-group">
                            <label for="rep">Representante</label>
                            <input type="text" class="form-control" id="rep" v-model="data.rep" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="cargRep">Cargo Representante</label>
                            <input type="text" class="form-control" id="cargRep" v-model="data.cargRep" required>
                        </div>     
                    </div>                 
                </div>
                <div class="form-row">
                    <div class="col-2">
                        <div class="form-group">
                            <label for="dataANS">Registro ANS</label>
                            <InputMask v-model="data.dataANS" id="dataANS" class="form-control" mask="99/99/9999" required/>
                        </div>
                    </div>
                </div>               
                <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </form>
    </div>

</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Form",
    props: {
        datas: Object,
        buttonLoad: Boolean
    },
    data(){
        return{
            data: {
                id: null ,
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
            }
        }
    },
    methods: {
        test(){
            console.log('teste')
        },
        reset(){

                this.data.registroANS = null;
                this.data.cnpj= null;
                this.data.razaoSocial= null;
                this.data.nomeFantasia= null;
                this.data.modalidade= null;
                this.data.logradouro= null;
                this.data.numero= null;
                this.data.complemento= null;
                this.data.bairro= null;
                this.data.cidade= null;
                this.data.uf= null;
                this.data.cep= null;
                this.data.ddd= null;
                this.data.tel= null;
                this.data.fax= null;
                this.data.endEletronico= null;
                this.data.rep= null;
                this.data.cargRep= null;
                this.data.dataANS= null;
        },
        loadData(datas){
                this.data.id = datas.id
                this.data.registroANS = datas.registroANS
                this.data.cnpj= datas.cnpj;
                this.data.razaoSocial= datas.razaoSocial;
                this.data.nomeFantasia= datas.nomeFantasia;
                this.data.modalidade= datas.modalidade;
                this.data.logradouro= datas.logradouro;
                this.data.numero= datas.numero;
                this.data.complemento= datas.complemento;
                this.data.bairro= datas.bairro;
                this.data.cidade= datas.cidade;
                this.data.uf= datas.uf;
                this.data.cep= datas.cep;
                this.data.ddd= datas.ddd;
                this.data.tel= datas.tel;
                this.data.fax= datas.fax;
                this.data.endEletronico= datas.endEletronico;
                this.data.rep= datas.rep;
                this.data.cargRep= datas.cargRep;
                this.data.dataANS= datas.dataANS;
            
        },    
        
    },
    
    
}
</script>

<style scoped>

</style>