//  non primitive contains reference . 
const job = {
    job:'web developer'
}

let p = job; // p refers the 'job' address memory
console.log(job);
console.log(p) 

p.job = 'Frontend Developer'
console.log(job)
console.log(p) // p refers the 'job' address in memory

p = {job: 'Backend Developer'} // p refers new address
console.log(job)
console.log(p)
