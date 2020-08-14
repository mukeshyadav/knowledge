function FlattenObj(obj) {
    let finalObj = {};
    function innerFn(obj, pkey) {
        let parentKey = pkey;
        for(let arr of Object.entries(obj)) {
            const [key, value ] = arr;
            const finalKey = parentKey ? parentKey + '_' + key : key;
            if(typeof value === 'object') {
                innerFn(value, finalKey);
            } else {
                finalObj = Object.assign(finalObj, { [finalKey] : value});
            }
        }
        
    }
    innerFn(obj, '');
return finalObj;
}
const obj = {

    a : {
        c: 2,
        b: {
            c: [{ a: 12}, 32]
        }
    }
}
console.log(FlattenObj(obj));