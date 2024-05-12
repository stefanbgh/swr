import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { SWRConfig } from 'swr';
import { value } from "./constants/SWRConfig/value.ts"

import App from './App.tsx'
import './sass/main.scss'

import "vercel-toast/css"

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(
    <StrictMode>
        <SWRConfig 
            value={value}
        >
            <App />
        </SWRConfig>
    </StrictMode>
)
