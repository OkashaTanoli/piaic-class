import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar'
import Products from '@/components/Products';
import { client } from '@/sanity/lib/client';
import { Suspense } from 'react';

export default async function Home() {
  const data = await client.fetch(`*[_type == "product"]{title, price, description, image, _id}`,{},{cache:'no-store'})
  
  return (
   <div>
    <Navbar />
    <Hero />
    <Suspense fallback={<h1>loading products ... </h1>}>
     <Products data={data} />
    </Suspense>
   </div>
  );
}
