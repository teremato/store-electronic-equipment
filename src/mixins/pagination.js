export default {
    data: function() {

        return {
            params: {
                page: 1
            }
        }
    },
    methods: {
        observer(target) {

            const callback = (entries) => {
                if(entries[0].isIntersecting) {
                    this.changePage();
                }
            }
            const observer = new IntersectionObserver(callback, {
                rootMargin: '0px 0px -90px',
                threshold: 1.0
            })
            observer.observe(target)
        },
        changePage() { 
            this.params.page++
        },
        updatePage() {
            this.params.page = 1
        }
    }
}