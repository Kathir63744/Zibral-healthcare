import { MetadataRoute } from 'next'
import { products, createSlug } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zibralhealthcare.in'
  
  // Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
  
  // Generate dynamic product routes using the createSlug function
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${createSlug(product.name)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  // Combine static and dynamic routes
  return [...staticRoutes, ...productRoutes]
}