const asyncNumber1 = new Promise (resolve => setTimeout(() => resolve(1),1000));
const asyncNumber2 = new Promise (resolve => setTimeout(() => resolve(2),1500));

async function sum(p1,p2) {
    const a = await p1;
    const b = await p2;

    return a + b
}

async function main() {
    console.log(await sum(asyncNumber1, asyncNumber2))
}

main()