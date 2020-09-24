<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <Button type="primary">Primary</Button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "ant-design-vue";
@Component({
    components: {
        Button
    }
})
export default class Home extends Vue {}
</script>
