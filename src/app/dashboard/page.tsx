import ECommerce from '@/components/Dashboard/E-commerce';
import { Metadata } from 'next';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import DonorLayout from '@/components/Layouts/DonorLayout';
import Card from '@/components/card';
import TopBar from '@/components/Filter/TopBar';

export const metadata: Metadata = {
  title:
    'Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template',
  description: 'This is Next.js Home for TailAdmin Dashboard Template',
};

export default function Home() {
  return (
    <>
      {/* <DefaultLayout>

      </DefaultLayout> */}
      <DonorLayout>
        <div>
          <TopBar />
          <h1 className=" mt-2 font-poppins text-primary-dark text-4xl mb-2">
            Showing <b>365 </b> Students
          </h1>
          <div className="grid gap-1 grid-flow-row-dense  grid-cols-4 row-auto w-full">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </DonorLayout>
    </>
  );
}
