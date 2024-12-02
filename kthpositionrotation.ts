function rotatektime(arr: number[], k: number): number[] {
    const n = arr.length;
    k = k % n; 
    if (k === 0 || n === 0) {
        return arr; 
    }

    
    const a = arr.slice(0, n - k);
    const b = arr.slice(n - k);
    
    
    return b.concat(a);
}


const array = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotatektime(array, k)); 
