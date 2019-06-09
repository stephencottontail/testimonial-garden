import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

registerBlockType( 'sc/testimonial-garden', {
    title: 'Testimonial Garden',
    icon: 'carrot',
    category: 'common',
    attributes: {
        large: {
            type: 'string',
            default: ''
        },
        thumbnail: {
            type: 'string',
            default: ''
        },
        alt: {
            type: 'string',
            default: ''
        },
        title: {
            type: 'string',
            default: ''
        }
    },
    edit,
    save() {
        return <p className={ 'foo' }>Hello front-end!</p>;
    }
} );
