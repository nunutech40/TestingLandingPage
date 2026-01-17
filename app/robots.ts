import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://juraganvault.com' // Ganti dengan domain asli nanti

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/thank-you/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
