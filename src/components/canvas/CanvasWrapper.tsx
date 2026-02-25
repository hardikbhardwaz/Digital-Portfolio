'use client';

import dynamic from 'next/dynamic';

const GlobalCanvas = dynamic(() => import('./GlobalCanvas'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 z-[-1] bg-background" />
});

export default function CanvasWrapper() {
    return <GlobalCanvas />;
}
