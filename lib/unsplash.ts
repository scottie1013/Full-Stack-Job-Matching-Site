import { cache } from 'react'

export interface UnsplashImage {
  id: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  alt_description: string
  description: string
  user: {
    name: string
    username: string
  }
}

// Cache duration in seconds (24 hours)
const CACHE_DURATION = 86400

// Cache the fetch requests with error handling and rate limit protection
export const getUnsplashImage = cache(async (query: string): Promise<UnsplashImage> => {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    throw new Error('UNSPLASH_ACCESS_KEY is not defined')
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
        next: {
          revalidate: CACHE_DURATION
        }
      }
    )

    if (response.status === 429) {
      throw new Error('Rate limit exceeded')
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch image from Unsplash: ${response.status}`)
    }

    const remainingRequests = response.headers.get('X-Ratelimit-Remaining')
    if (remainingRequests && parseInt(remainingRequests) < 10) {
      console.warn(`Unsplash API rate limit warning: ${remainingRequests} requests remaining`)
    }

    return response.json()
  } catch (error) {
    console.error('Unsplash API error:', error)
    throw error
  }
})

// Get multiple images with rate limit protection
export const getUnsplashImages = cache(async (query: string, count: number = 1): Promise<UnsplashImage[]> => {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    throw new Error('UNSPLASH_ACCESS_KEY is not defined')
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&count=${count}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
        next: {
          revalidate: CACHE_DURATION
        }
      }
    )

    if (response.status === 429) {
      throw new Error('Rate limit exceeded')
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch images from Unsplash: ${response.status}`)
    }

    const remainingRequests = response.headers.get('X-Ratelimit-Remaining')
    if (remainingRequests && parseInt(remainingRequests) < 10) {
      console.warn(`Unsplash API rate limit warning: ${remainingRequests} requests remaining`)
    }

    return response.json()
  } catch (error) {
    console.error('Unsplash API error:', error)
    throw error
  }
})

// Optimized queries for better image results while minimizing API calls
export const IMAGE_QUERIES = {
  home: 'modern office tech minimal',
  profile: 'business professional portrait minimal',
  workspace: 'minimal office workspace clean',
  technology: 'minimal technology clean',
  collaboration: 'business team meeting minimal',
  company: 'modern office building minimal architecture',
} 