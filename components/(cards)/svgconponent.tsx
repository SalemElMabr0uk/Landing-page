// components/SvgComponent.js
import React from 'react';


interface SvgComponentProps {
    fileName: string; 
}

const SvgComponent: React.FC<SvgComponentProps> = ({ fileName }) => {
    const pathToSvg = `/svg/${fileName}.svg`;

    const ImportedSvg = React.useMemo(
        () => React.lazy(() => import(`../public${pathToSvg}`)),
        [pathToSvg]
    );

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ImportedSvg />
        </React.Suspense>
    );
};
export default SvgComponent;
