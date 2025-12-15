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
        src: '/logo7.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo7.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}


