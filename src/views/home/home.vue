<template>
    <div>
        {{ counter }}
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const store = useStore();
        const counter = store.state.counter;
        return { counter };
    },
});
</script>

<style scoped></style>
