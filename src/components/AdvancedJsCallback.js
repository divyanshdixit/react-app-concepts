const one = (callback) => {
    console.log('one')
    setTimeout(() => {
        console.log('middle')
    }, 1000);
    callback()
}

const two = () => {
    console.log('two')
}

// 3 callbacks within function
const getData = () => {

    setTimeout(() => {
        // we are getting this array from some api as response
        let arr1 = [10,20,30,40];
        console.log(arr1);
        // now i want to send any array value in other callback function
        setTimeout((arr1) => { // pass an argument
            // for now i'm multiplying the passed number with 2
            let mulNum = arr1[0] * 2;
            console.log(mulNum)
            setTimeout((mulNum) => {
                // saving the vlaue in db for now we save in array
                let result = [mulNum];
                console.log(result)
            }, 2000, mulNum);

        }, 2000, arr1);


    }, 2000);
}

// callback
// one(two);

export {one, two, getData}