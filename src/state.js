import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
   cards: null,

   
        fetchData() {

            axios
                .get(this.base_urlurl)
                .then(response => {

                    this.cards = response.data.data

                })
                .catch(error => {
                    console.log(error);
                })

        }
    
})