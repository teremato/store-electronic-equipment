export default {
    data: function() {
        return {
            isOpen: false
        }
    },
    methods: {
        closeModal() {
            this.$emit("modal:close", '')
        },
        changeModal(modalType) {
            this.$emit("modal:change", modalType)
        }
    },
}