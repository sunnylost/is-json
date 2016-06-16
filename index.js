//http://www.json.org/

var TRUE          = true,
    FALSE         = false,
    TRUE_STR      = 'true',
    FALSE_STR     = 'false',
    LEFT_BRACKET  = '[',
    LEFT_BRACE    = '{',
    RIGHT_BRACKET = ']',
    RIGHT_BRACE   = '}',
    DOUBLE_QUOTE  = '"'

function isJSON( str, useStrictCheck ) {
    if ( useStrictCheck ) {
        return strictCheck( str )
    }

    if ( !str ) return FALSE

    if ( !( str = str.trim() ) ) return FALSE

    var lastChar = str[ str.length - 1 ]

    switch ( str[ 0 ] ) {
        //object
        case LEFT_BRACE:
            return lastChar === RIGHT_BRACE

        //array
        case LEFT_BRACKET:
            return lastChar === RIGHT_BRACKET

        //string
        case DOUBLE_QUOTE:
            return lastChar === DOUBLE_QUOTE
    }

    //number
    if ( !isNaN( parseInt( str ) ) ) {
        return TRUE
    } else {
        //boolean
        return str === TRUE_STR || str === FALSE_STR
    }
}

function strictCheck( str ) {
    var result = TRUE

    try {
        JSON.parse( str )
    } catch ( e ) {
        result = FALSE
    } finally {
        return result
    }
}

module.exports = isJSON
