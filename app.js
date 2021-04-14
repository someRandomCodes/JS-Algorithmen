const app = Vue.createApp({
    data() {
        return {
            algoList: '',
            algoArray: [],
            bubbleSortArray: [],
            changed: false,
            counter: null
        };
    },
    methods: {
        AlgoListToArray() {
            this.algoArray = this.algoList.split(" ");
            this.algoList = '';
            console.log(typeof this.algoArray[0]);
            this.startBubbleSort();
        },
        startBubbleSort() {
            this.bubbleSortArray = this.algoArray.map(Number);
            const unsortedArray = this.bubbleSortArray;
            do {
                let end = unsortedArray.length - 1;
                console.log(unsortedArray);
                this.changed = false;
                for (let i = 0; i < end ; i++){
                    if (unsortedArray[i] > unsortedArray[i + 1]) {
                        this.changed = true;
                        let x = unsortedArray[i];
                        unsortedArray[i] = unsortedArray[i + 1];
                        unsortedArray[i + 1] = x;
                    }
                }
                end--;
            } while (this.changed === true);
            console.log('array sorted !')
        }
    }
});

app.mount('#algo_rechner');