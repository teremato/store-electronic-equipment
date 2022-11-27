export default {
    methods: {
        changeLike(id, node) {

            this[node].forEach((element, index) => {

                if(element.id === id) {
                    
                    this[node][index].user_like =
                        !this[node][index].user_like;

                    if(this[node][index].user_like) {
                        this[node][index].likes_count += 1
                    }
                    else {
                        this[node][index].likes_count -= 1
                    }
                }
            });
        },
        changeFavorite(id, node) {

            this[node].forEach((element, index) => {
                if(element.id === id) {

                    this[node][index].user_favorite = 
                        !this[node][index].user_favorite;
                }
            })
        }
    }
}