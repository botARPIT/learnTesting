export function add(a: number,b: number) :number{
    return a + b
}


export function reverseString(str: string) : string{
    if(str == '') return ''
    return str.split('').reverse().join('')
}