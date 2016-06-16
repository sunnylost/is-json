var expect = require( 'chai' ).expect,
    isJSON = require( '../' ),
    TRUE   = true,
    FALSE  = false

describe( 'wrong format', function () {
    it( 'empty string: should return false', function () {
        expect( isJSON( '' ) ).to.equal( FALSE )
    } )

    it( 'whitespace: should return true', function () {
        expect( isJSON( ' ' ) ).to.equal( FALSE )
    } )

    it( 'wrongly closed object: should return true', function () {
        expect( isJSON( '{' ) ).to.equal( FALSE )
    } )

    it( 'wrongly closed array: should return true', function () {
        expect( isJSON( '[' ) ).to.equal( FALSE )
    } )
} )

describe( 'correct format', function () {
    it( 'empty object: should return true', function () {
        expect( isJSON( '{}' ) ).to.equal( TRUE )
    } )

    it( 'empty array: should return true', function () {
        expect( isJSON( '[]' ) ).to.equal( TRUE )
    } )

    it( 'non-empty string: should return true', function () {
        expect( isJSON( '"abc"' ) ).to.equal( TRUE )
    } )

    it( 'number: should return true', function () {
        expect( isJSON( '123' ) ).to.equal( TRUE )
    } )

    it( 'boolean true: should return true', function () {
        expect( isJSON( 'true' ) ).to.equal( TRUE )
    } )

    it( 'boolean false: should return true', function () {
        expect( isJSON( 'false' ) ).to.equal( TRUE )
    } )

    it( 'jsonp : should return true', function () {
        expect( isJSON( 'callback({})' ) ).to.equal( FALSE )
    } )
} )
