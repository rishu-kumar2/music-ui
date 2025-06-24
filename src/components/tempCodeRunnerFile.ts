
function isPrime(num: number): boolean{
 if (num < 2) return false;
 for( let i = 2; i* i <= num ; i++){
    if ( num % i === 0)
        return false;
 }
  return true
}
function printPrimes(start : number , end : number): void{
    for ( let num = start ; num<= end;num++){
        if(isPrime(num)){
            console.log(num);
        }
    }
}
printPrimes(1, 100)