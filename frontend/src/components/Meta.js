import React from 'react'
import { Helmet } from 'react-helmet'
const MetaComponent = ({title, description, keywords}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Helmet>
        </div>
    )
}

MetaComponent.defaultprops = {
    title: 'Welcome to proshop',
    description:'We sell best products for cheap',
    keywords: 'electronics, buy electronics, cheap electronics'
}

export default MetaComponent
