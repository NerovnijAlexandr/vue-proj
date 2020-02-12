import {eventBus} from "../main";

export default {
    data() {
        return {
            categories: {
                category_1: {
                    id: 1,
                    name: 'Category 1',
                    products: [
                        {
                            id: 1,
                            name: 'product 1',
                            cost: 10,
                            count: 2
                        },
                        {
                            id: 2,
                            name: 'product 2',
                            cost: 17,
                            count: 5
                        },
                        {
                            id: 3,
                            name: 'product 3',
                            cost: 8,
                            count: 4
                        },
                    ]
                },
                category_2: {
                    id: 2,
                    name: 'Category 2',
                    products: [
                        {
                            id: 4,
                            name: 'product 21',
                            cost: 20,
                            count: 2
                        },
                        {
                            id: 5,
                            name: 'product 22',
                            cost: 1,
                            count: 15
                        },
                        {
                            id: 6,
                            name: 'product 23',
                            cost: 6,
                            count: 6
                        },
                    ]
                }
            },
            basket: [],
        }
    },
    created() {
        eventBus.$on('add_to_basket', (product) => {
            this.check_product(product);
            eventBus.$emit('refresh_basket', this.basket);
        });
        eventBus.$on('delete_from_basket', (product) => {
            this.basket.splice(this.basket.indexOf(product), 1);
        });
    }
}