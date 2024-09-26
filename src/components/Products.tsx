import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { Image as SanityImage } from "sanity"
import Button from "./Button"

interface IProps {
    data: {
        title: string,
        price: number,
        description: string,
        image: SanityImage,
        _id: string
    }[]
}

async function Products({ data }: IProps) {
    await new Promise((res)=>setTimeout(res,4000))
    return (
        <div className="py-10 px-8">
            <h1 className="text-3xl font-bold">Products</h1>
            <div className="mt-7 grid grid-cols-3 gap-8">
                {
                    data.map((product, i) => {
                        return (
                            <div className="border border-blue-600 rounded-lg py-3 px-5">
                                <div className="h-[150px]">
                                    <Image src={urlFor(product.image).url()} width={500} height={500} className="w-full h-full object-contain" alt="product" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-xl font-bold">{product.title}</h3>
                                    <h4 className="text-lg font-semibold">RS: {product.price}</h4>
                                    <p className="text-gray-700">{product.description}</p>
                                    <Button name="Add To Cart" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products