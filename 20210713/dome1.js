const resetNum = function (value) {
    if ( typeof value !== 'number') {
        return
    }
    let int = Math.abs(value) 
    const Max = 2147483647
    const Min = -2147483648
    
    let num = 0
    while ( int !== 0) {
        console.log(int % 10 ,num)
        num = (int % 10) + ( num * 10)
        int = Math.floor(int / 10)
    }
    if (num >= Max || num <= Min) {
        return 0
    } 
    if (value < 0) {
        return num * -1
    }
    return num
}
resetNum(138481294)