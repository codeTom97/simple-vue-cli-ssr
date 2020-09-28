<template>
    <div class="home">
        <List item-layout="horizontal" :data-source="data">
            <ListItem slot="renderItem" slot-scope="item">
                <ItemMeta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                    <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                    <Avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </ItemMeta>
            </ListItem>
        </List>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button, List, Avatar } from "ant-design-vue";
const { Item } = List;
@Component({
    components: {
        Button,
        List,
        ListItem: Item,
        ItemMeta: Item.Meta,
        Avatar
    }
})
export default class Home extends Vue {
    private data: Array<object> = [
        {
            title: "Ant Design Title 1"
        },
        {
            title: "Ant Design Title 2"
        },
        {
            title: "Ant Design Title 3"
        },
        {
            title: "Ant Design Title 4"
        }
    ];
}
</script>

<style lang="less" scoped>
.home {
    width: 750px;
    margin: auto;
}
</style>
