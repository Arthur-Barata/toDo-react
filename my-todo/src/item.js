class item {

    static lastId = 0

    constructor(text){
        this.text = text
        this.id = item.lastId++
        this.done = false
    }
}
export default item