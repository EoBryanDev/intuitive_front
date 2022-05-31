<template>
    <nav aria-label="Page navigation example" class="mt-3 mb-3">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled"><a class="page-link">Previous</a></li>

            <li v-for="(page,i) in paginacao" :key="i" class="page-item">

                <a :value="page" class="page-link" href="#" @click.prevent="$emit('pageNumber',page)">{{page}}</a>

            </li>

            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>
<script>
    export default {
        props: {
            paginacao : Number,
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