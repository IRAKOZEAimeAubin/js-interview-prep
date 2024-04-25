// Function to check if an input is an array

const isArray = ( input ) => {
    return toString.call( input ) === '[object Array]' ? true : false;
};

// console.log( isArray( [ 1, 2, 3, 4 ] ) );
// console.log( isArray( 'Hello' ) );
// console.log( isArray( 1 ) );

// Function to clone an array

const cloneArray = ( arr ) => {
    return arr.slice( 0 );
};

// console.log(cloneArray([23,12,10,99,30]))
// console.log(cloneArray([[12.99],[9.10]]))
// console.log( cloneArray( [ 'Aaron Rodgers', 'Stephen Curry', 'Wayne Rooney' ] ) );

// Function to get the first n elements of an array

const getFirstNElements = ( arr, n ) => {
    return arr === null ? void 0 : n === null ? arr[ 0 ] : n < 0 ? [] : arr.slice( 0, n );
};

// console.log( getFirstNElements( [ 23, 12, 10, 99, 30 ], 0 ) );

// Function to join string elements

const joinArrayStringElements = ( arr ) => {
    const joinByToString = arr.toString();
    const joinByJoin = arr.join();
    const joinByJoinPlus = arr.join( '+' );

    console.log( `${ joinByToString }\n${ joinByJoin }\n${ joinByJoinPlus }` );
};

// joinArrayStringElements( [ 'Aaron Rodgers', 'Stephen Curry', 'Wayne Rooney' ] );

// Function to insert a dash (-) between each even number in an input
// Example: 025468 -> 0-254-6-8

const insertDash = ( num ) => {
    let str = num.toString();
    let output = [ str[ 0 ] ];

    for ( let i = 1; i < str.length; i++ ) {
        if ( str[ i - 1 ] % 2 === 0 && str[ i ] % 2 === 0 ) {
            output.push( '-', str[ i ] );
        } else {
            output.push( str[ i ] );
        }
    }

    return output.join( '' );
};

// console.log( insertDash( 225468 ) );

// Function to sort the elements of an array

const sortArrayElements = ( arr ) => {
    return arr.sort( ( a, b ) => {
        return a - b;
    } );
};

// console.log( sortArrayElements( [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ] ) );

// Function to find the most frequent element in an array

const getMostFrequentElement = ( arr ) => {
    const frequencyObj = {};
    let maxFrequency = 0;
    let maxFrequencyElement;

    for ( const element of arr ) {
        frequencyObj[ element ] = ( frequencyObj[ element ] || 0 ) + 1;
    }

    for ( const element in frequencyObj ) {
        if ( frequencyObj[ element ] > maxFrequency ) {
            maxFrequency = frequencyObj[ element ];
            maxFrequencyElement = element;
        }
    }

    console.log( `${ maxFrequencyElement } (${ maxFrequency } times)` );
};

// getMostFrequentElement( [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ] );

const swapCases = ( str ) => {
    return str.split( '' ).map( ( char ) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() ).join( '' );
};

// console.log( swapCases( 'The Quick Brown Fox' ) );

const printNestedArrayElements = ( arr ) => {
    for ( let i = 0; i < arr.length; i++ ) {
        console.log( `row ${ i }` );

        for ( let j = 0; j < arr[ i ].length; j++ ) {
            console.log( arr[ i ][ j ] );
        }
    }
};

printNestedArrayElements( [ [ 1, 2, 1, 24 ], [ 8, 11, 9, 4 ], [ 7, 0, 7, 27 ], [ 7, 4, 28, 14 ], [ 3, 10, 26, 7 ] ] )