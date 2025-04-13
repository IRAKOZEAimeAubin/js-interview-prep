function doSomething ( callback ) {
    const start = performance.now();
    setTimeout( () => {
        const end = performance.now();
        callback( "First operation complete", end - start );
    }, 1000 );
}

function doSomethingElse ( callback ) {
    const start = performance.now();
    setTimeout( () => {
        const end = performance.now();
        callback( "Second operation complete", end - start );
    }, 2000 );
}

function doThirdThing ( callback ) {
    const start = performance.now();
    setTimeout( () => {
        const end = performance.now();
        callback( "Third operation complete", end - start );
    }, 3000 );
}

doSomething( ( result1, time1 ) => {
    console.log( result1, `Time taken: ${ time1.toFixed( 0 ) } ms` );
    doSomethingElse( ( result2, time2 ) => {
        console.log( result2, `Time taken: ${ time2.toFixed( 0 ) } ms` );
        doThirdThing( ( result3, time3 ) => {
            console.log( result3, `Time taken: ${ time3.toFixed( 0 ) } ms` );
        } );
    } );
} );
