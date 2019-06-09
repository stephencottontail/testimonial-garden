import { PanelBody, PanelRow } from '@wordpress/components';
import { InspectorControls, MediaUploadCheck, MediaUpload, RichText } from '@wordpress/editor';
import classnames from 'classnames';

const edit = ( props ) => {
    const { className, attributes, setAttributes } = props;
    const { large, thumbnail, alt, title } = attributes;

    const UploadTarget = () => (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={ ( img ) => {
                    setAttributes( {
                        large: img.sizes.large.url,
                        thumbnail: img.sizes.thumbnail.url,
                        alt: ( img.alt || '' ),
                        title: ( img.title || img.url )
                    } );
                } }
                type='image'
                value={ large }
                render={ ( { open } ) => (
                    <a className={ classnames( className, 'button' ) } onClick={ open } role="button">Select Photo</a>
                ) }
            />
        </MediaUploadCheck>
    );
    const RemoveImageButton = () => (
        <a className={ classnames( className, 'button', 'button--secondary' ) } onClick={ removeImage } role="button">Remove Photo</a>
    );
    const ChosenImage = () => [
        <img src={ thumbnail } className={ classnames( className, 'image' ) } alt="" />,
        <span className={ classnames( className, 'image__title' ) }>{ title }</span>
    ];

    const removeImage = () => {
        setAttributes( {
            large: undefined,
            thumbnail: undefined,
            alt: undefined,
            title: undefined
        } );
    }

    return [
        <InspectorControls>
            <PanelBody
                title="Customer Photo"
                initialOpen={ true }
            >
                <PanelRow
                    className={ classnames( className ) }
                >
                    <UploadTarget />
                    { thumbnail && <RemoveImageButton /> }
                </PanelRow>
                { thumbnail &&
                    <PanelRow>
                        <ChosenImage />
                    </PanelRow>
                }
            </PanelBody>
        </InspectorControls>,
        <p className={ 'foo' }>{ ( alt || title ) }</p>,
        <div className={ classnames( className, 'uploader' ) }>
            <div className={ classnames( className, 'uploader__row' ) }>
                <UploadTarget />
                { thumbnail && <RemoveImageButton /> }
            </div>
            { thumbnail &&
                <div className={ classnames( className, 'uploader__row' ) }>
                    <ChosenImage />
                </div>
            }
        </div>
    ]
}

export default edit;
