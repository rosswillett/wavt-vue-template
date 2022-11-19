<script lang="ts" setup>
import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            message: 'Hello World!'
        };
    }
});
</script>
<template>
    <div class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        {{ store.state.message }}
    </div>
</template>
