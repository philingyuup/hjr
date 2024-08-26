import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HJR Consturction',
    short_name: 'HJR',
    description: 'Construction and remodeling in greater Boston area',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#fff',
    theme_color: '#fff',
    prefer_related_applications: false,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}