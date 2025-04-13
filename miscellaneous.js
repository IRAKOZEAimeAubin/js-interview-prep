//console.log( 0.1 + 0.2 === 0.3 );

// let foo = {};
// let bar = { key: 'value' };
// let map = new Map();
// map.set( foo, 1 );
// map.set( bar, 2 );
// console.log( map.get( { key: 'value' } ) );

// console.log(typeof typeof 1)

( function () {
    var x = 1;
    delete x;
    // console.log( x );
} )();

let a = [];
let b = [];
// console.log( a == b );
// console.log( a === b );

let map = new Map( [
    [ 'lh', 44 ],
    [ 'cl', 16 ],
    [ 'sv', 5 ]
] );

// console.log(map.size)

// for ( let keys of map.keys() ) {
//     console.log( keys );
// }

// for ( let values of map.values() ) {
//     console.log( values );
// }

// for ( let [ key, value ] of map ) {
//     console.log( [ key, value ] );
// }

// map.forEach( ( value, key ) => {
//     console.log( key, value );
// } );

// let obj = {
//     toString () { return 'custom'; },
//     valueOf () { return 42; }
// };

// let specialObj = {
//     [obj]:'interesting result'
// }

// console.log(Object.keys(specialObj))

function findSmallestMissingPositive ( nums ) {
    const n = nums.length;

    // Step 1: Modify the array to place each number in its correct position
    for ( let i = 0; i < n; i++ ) {
        while (
            nums[ i ] >= 1 &&
            nums[ i ] <= n &&
            nums[ i ] !== nums[ nums[ i ] - 1 ]
        ) {
            // Swap current number with its correct position
            const correctIndex = nums[ i ] - 1;
            [ nums[ i ], nums[ correctIndex ] ] = [ nums[ correctIndex ], nums[ i ] ];
        }
    }

    // Step 2: Find the first index where the number is not in its correct position
    for ( let i = 0; i < n; i++ ) {
        if ( nums[ i ] !== i + 1 ) {
            return i + 1;
        }
    }

    // If all numbers are in correct position, return next positive integer
    return n + 1;
}

// console.log( findSmallestMissingPositive( [ 3, 4, -1, 1 ] ) );
// console.log( findSmallestMissingPositive( [ 1, 2, 0 ] ) );
// console.log( findSmallestMissingPositive( [ 7, 8, 9, 11 ] ) );

const obj = {
    name: 'Gege Akutami',
    sayHello: () => {
        console.log( `Hello, ${ this.name }` );
    }
};

const objToo = {
    name: 'Gege Akutami',
    sayHello () {
        console.log( `Hello, ${ this.name }` );
    }
};

// obj.sayHello()
// objToo.sayHello()

function greeting ( greeting, punctuation ) {
    console.log( `${ greeting }, ${ this.name }${ punctuation }` );
}

const person = {
    name: 'Tite Kubo'
};

greeting.call( person, 'Hello', '!' );
