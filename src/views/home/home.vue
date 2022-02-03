<template>
    <div>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-calendar ref="calendar">
            <template #header="{ date }">
                <span>Custom header content</span>
                <span>{{ date }}</span>
                <el-button-group>
                    <el-button size="small" @click="selectDate('prev-year')">Previous Year</el-button>
                    <el-button size="small" @click="selectDate('prev-month')">Previous Month</el-button>
                    <el-button size="small" @click="selectDate('today')">Today</el-button>
                    <el-button size="small" @click="selectDate('next-month')">Next Month</el-button>
                    <el-button size="small" @click="selectDate('next-year')">Next Year</el-button>
                </el-button-group>
            </template>
        </el-calendar>
        {{ data }}
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { login } from '@/service/login/login';
export default defineComponent({
    setup() {
        let data = ref({});
        login({
            data: {
                name: 'ls',
            },
        }).then(res => (data.value = res));
        return { data };
    },
});
</script>

<style scoped></style>
