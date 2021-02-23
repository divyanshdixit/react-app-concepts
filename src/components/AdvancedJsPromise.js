// better way to handle situation like callback hell

// promise is object take excutor as a callback function, this callback initialize the promise
// excutor have two arguments => resolve callback, => resolve the promise with the result of other callback
//  reject callback => gives you error 

// promise object give then(), catch() method

const promObj = new Promise( (resolve, reject) => { // promise object
    setTimeout(() => {
        let arr1 = [10,20,30,40];
        // if through an api we get the response means function is successfully excuted.
        resolve(arr1);
        reject({
            status:500,
            message:'Error in fetching data from api'
        })
    }, 2000);
});

const getMultipliedNum = (arrs) => {
    return new Promise((resolve, reject) => { // return promise object
        setTimeout((arr) => {
            let mulNum = arr[0] * 2;
            resolve(mulNum);
            reject({
                status:500,
                message:'Found some error in calculation'
            })
        }, 2000,arrs);
    })
    
}

const getResultInArray = (prevResult) => {
    return new Promise((resolve, reject) => {
        setTimeout((prev) => {
            let finalValue = [prev];
            // if everything goes fine then resolve function will run else reject
            resolve(finalValue);
            reject({
                status:400,
                message:'Error in getting the final result'
            })
        }, 2000, prevResult);
    })
    
}

// this then() method will run only if promise is resolved

const getPromiseData = (promObj) => {
    // promObj.then((result) => {}).catch((err) => {})
    promObj.then( (result) => {
        console.log(result);

        // Meaning of this line is - fnction call will return the new promise and now first then()  method return that returned promise so to resolve this we use then() function again
            
            return getMultipliedNum(result);

        // we can call then method here also but the better way to return the function and after then we can call other callback then function
        // getMultipliedNum(result)
        //     .then( (res) => {
        //         console.log(res);
        //         //Again! - we can call then method here also but the better way to return the function and after then we can call other callback then function
        //         getResultInArray(res)
        //             .then( (response) => {
        //                 console.log(response)
        //             })
        //             .catch( (err) => {
        //                 console.log(err)
        //             })
        //     })
        //     .catch( (error) => {
        //         console.log(error)
        //     })
    }) 
    // above nested then() catch() method may be confusing so we can write in more speicific way by returning the function and call then() methid
    

        .then( (result) => {
            console.log(result);

            // this line means - then() function will resolve the returned promise
            return getResultInArray(result);
        })
        .then( (res) => {
            console.log(res);
        })    

    .catch( (error) => {
        console.log(error);
    })

}
// async and await

export {getPromiseData, promObj};