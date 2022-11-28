export default {
    methods: {
        changeLike(id, node) {

            this[node].forEach((item) => {
                if(item.id === id) {

                    item.user_like = !item.user_like
                    if(item.user_like) {
                        item.likes_count += 1
                    }
                    else {
                        item.likes_count -= 1
                    }
                }
            })
        },
        changeFavorite(id, node) {

            this[node].forEach((item) => {
                if(item.id === id) {

                    item.user_favorite = !item.user_favorite
                }
            })
        }
    }
}