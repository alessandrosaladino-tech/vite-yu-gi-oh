import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0 ",
    archetype_url: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cards: "",
    status: false,
    archetypeName: '',
    archetypeList: '',


    fetchData(url) {

        axios
            .get(this.base_url)
            .then(response => {

                this.cards = response.data.data
                console.log(this.cards);

            })
            .catch(error => {
                console.log(error);
            })

    },

    fetchDataArchetypes(url, i) {
        axios
            .get(url)
            .then(response => {

                this.archetypeList = response.data;

            })
            .catch(error => {
                console.error(error);
            })
    }
})
