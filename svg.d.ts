// react-app-env.d.ts
declare module '*.svg' {
    import React, { FunctionComponent, SVGProps } from 'react';
    export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
}
