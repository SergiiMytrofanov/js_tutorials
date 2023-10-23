const mixedArray = [1, 'рядок', true, { ключ: 'значення' }, [1, 2, 3], null, undefined, function () { console.log('функція') }];

for (let i = 0; i < mixedArray.length; i+=1) {
    if (typeof mixedArray[i] === 'string') {
        mixedArray[i]= false;
    }
       
}
console.log('done',mixedArray) ;

for (const item of mixedArray) {
    console.log(item)
}