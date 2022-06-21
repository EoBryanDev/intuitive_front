<template>
    <nav aria-label="Page navigation example" class="mt-3 mb-3">
        <ul class="pagination justify-content-center">

            <li v-for="(page,i) in paginacao" :key="i" class="page-item" v-bind:class="isActive(page)">
                <a :value="page" class="page-link"  href="#" @click.prevent="$emit('pageNumber',page)">{{page}}</a>
            </li>

        </ul>
    </nav>
</template>
<script>
<<<<<<< HEAD
 /* eslint-disable */
    export default {
        
=======
    export default {
>>>>>>> 50beefe0facea35a8d0329bc7694c0f0e0b12662
        name: "Pagination",
        props: {
            paginacao : Number,
            currentPage : Number,
        },
        methods:{
            isActive(page){
                return page == this.currentPage ? 'active' : ''
            }
        }
        
    }
</script>

<style scoped>
    nav {
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>