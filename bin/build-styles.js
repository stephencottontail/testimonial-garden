var sass = require( 'node-sass' );
var path = require( 'path' );
var fs = require( 'fs' );
var blockStyle = 'block.scss';
var editorStyle = 'editor.scss';
var styles = [ blockStyle, editorStyle ];

[ 'block', 'editor' ].forEach( ( file ) => {
    sass.render( {
        file: path.resolve( 'src', file + '.scss' ),
        outFile: path.resolve( 'build', file + '.css' )
    }, function( error, result ) {
        if ( ! error) {
            fs.writeFile( path.resolve( 'build', file + '.css' ), result.css, () => {} );
        }
    } );
} );
/*
var render = sass.renderSync( {
    file: [ path.resolve( 'src', 'style.scss' ), path.resolve( 'src', 'editor.scss' ) ],
    outputStyle: 'nested',
    outFile: [ path.resolve( 'build' ) ]
} );

*/
