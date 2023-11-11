

export default class StringService{
    static pad(pNumber) {
        return String(pNumber).padStart(2, '0')
    }
}