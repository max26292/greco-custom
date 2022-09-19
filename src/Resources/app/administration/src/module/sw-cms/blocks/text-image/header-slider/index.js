Shopware.Service('cmsService').registerCmsBlock({
    name:'header-slider',
    category: 'text-image',
    label: 'Header Slider Block',
    component: 'sw-cms-block-header-slider',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots:{
        slider_element:'slider-element'
    }
});