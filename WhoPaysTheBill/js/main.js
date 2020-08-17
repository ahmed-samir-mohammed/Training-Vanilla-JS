new Vue({
    el: '#app',
    data() {
        return {
            state: true,
            inputName: '',
            names: [],
            showErr: false,
            result: ''
        }
    },
    methods: {
        addNameToList() {
            if (this.validate(this.inputName)) {
                this.names.push(this.inputName)
                this.inputName = ''
                this.showErr = false
            } else {
                this.showErr = true
            }
        },
        validate(value) {
            if (value !== '') {
                return true
            } else {
                return false
            }
        },
        showResults() {
            let random = this.names[Math.floor(Math.random() * this.names.length)]
            this.result = random
            this.state = false
        },
        startAgain() {
            this.state = true
            this.names= []
            this.result = ''
        },
        deleteName(index) {
            this.names.splice(index, 1)
        }
    },
})