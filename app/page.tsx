import Image from "next/image";
import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className={''}>
      <div className={'grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6'}>
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/1dy'}
          className={'bg-pink-200 h-full md:h-32'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/8ko'}
          className={'bg-blue-100 col-span-2 row-span-2'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/szu'}
          className={'bg-pink-200 row-span-2'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/n7r'}
          className={'bg-yellow-100 h-64'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/pj2'}
          className={'bg-green-100 h-64 col-span-2'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/gs1'}
          className={'bg-red-100 col-span-2 row-span-2'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/4y0'}
          className={'bg-orange-100 h-64'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/sq2'}
          className={'bg-blue-100 h-64'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/1dy'}
          className={'bg-rose-100 h-64'}
        />
        <GridOption
          title={'Sweet gifts for less'}
          image={'https://links.papareact.com/qx7'}
          className={'bg-orange-200 h-64 col-span-2'}
        />
      </div>
    </main>
  );
}
