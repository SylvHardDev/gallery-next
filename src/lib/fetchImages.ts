import type { ImageResult } from "@/models/Images";
import { ImagesSchemaWidthPhotos } from "@/models/Images";


export default async function fetchImages(url: string):
Promise<ImageResult>{
    try{
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.PEXELS_API_KEY
            }
        })

        if (!res.ok) throw new Error("Fetch Images error!\n")

            const imagesResults: ImagesResults = await res.json()
    }
}