import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TKCyber - InfoSec Knowledge Base',
    short_name: 'TKCyber',
    description: 'A modern cybersecurity blog sharing knowledge about Offensive Security, SOC, GRC, and AI Security.',
    start_url: '/',
    display: 'standalone',
    background_color: '#151338',
    theme_color: '#818cf8',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}


