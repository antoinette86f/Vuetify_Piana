<template>
</template>

<script>
import { useDate } from "vuetify";

const date = useDate();

const formatted = date.format('2010-04-13', 'fullDateWithWeekDay');

console.log(formatted);
</script>

<style scoped>

</style>
