import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cardName: null,
    cardImage: null,
    cardArchetype: null,

   
        fetchData() {

            axios
                .get(this.base_urlurl)
                .then(response => {

                    this.cardName = response.data.name;
                    this.cardImage = response.data.card_images.image_url;
                    this.cardArchetype = response.data.archetype;

                })
                .catch(error => {
                    console.log(error);
                })

        }
    
})