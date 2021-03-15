import React from 'react'
import ContentLoader from "react-content-loader"

const SushiPlaceholder = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className="sushi-block"
        >
            <circle cx="140" cy="160" r="140" />
            <rect x="128" y="319" rx="0" ry="0" width="0" height="1" />
            <rect x="0" y="360" rx="6" ry="6" width="280" height="50" />
            <rect x="133" y="425" rx="16" ry="16" width="146" height="30" />
            <rect x="0" y="425" rx="16" ry="16" width="90" height="30" />
            <rect x="0" y="315" rx="6" ry="6" width="280" height="30" />
        </ContentLoader>
    )
}

export default SushiPlaceholder
