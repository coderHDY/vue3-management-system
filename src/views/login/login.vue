<template>
    <div>
        {{ msg }}
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const msg = ref('login');
        return { msg };
    },
});
</script>

<style scoped></style>
