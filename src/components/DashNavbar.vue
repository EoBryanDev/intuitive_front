<template>
    <nav>

        <h2>Relação de Operadoras Ativas ANS</h2>
        <div >
            <input type="search" name="searchInput" id="searchInput" v-model="research" placeholder="Procure aqui" @keyup="$emit('researchBar',research)">
            <select name="selected" id="typeResearch" v-model="typeResearch" @change="$emit('typeResearch',typeResearch)" aria-placeholder="slecione">
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
        </div>

    </nav>
</template>
<script>
    export default {
        name: "DashNavbar",
        data(){
            return{
                research: "",
                typeResearch: null
            }
        },
        methods: {
            /*researchBar(){
                console.log(this.research);
            }*/
        }
    }
</script>

<style scoped>
    
    nav {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
    }

    h2{
        color: #5161f1;
    }
    #searchInput{
        padding: 5px;
        border: 1px dotted;
        border-radius: 5px;
        width: 60%;
        color: #5161f1;
        margin-right: 5px;
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
        width: 30%;
    }
    
</style>