import React from 'react'
import CircularGallery from './CircularGallery'
import { useTheme } from '@/context/ThemeContext';

function TechStack() {
    const { theme } = useTheme();

    return (
        <div className='relative h-[450px]'>
            <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} theme={theme} />
        </div>
    )
}

export default TechStack