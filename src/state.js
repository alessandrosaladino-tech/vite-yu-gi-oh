import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0 ',
   cards: null,

   
        fetchData() {

            axios
                .get(this.base_url)
                .then(response => {

                    this.cards = response.data.data
                    console.log(this.cards);

                })
                .catch(error => {
                    console.log(error);
                })

        }
    
})