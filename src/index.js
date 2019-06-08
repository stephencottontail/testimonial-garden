import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'sc/testimonial-garden', {
    title: 'Testimonial Garden',
    icon: 'carrot',
    category: 'common',
    edit() {
        return <p className={ 'foo' }>Hello editor!</p>;
    },
    save() {
        return <p className={ 'foo' }>Hello front-end!</p>;
    }
} );
