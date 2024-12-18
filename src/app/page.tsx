/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$50,000.00",
    discription: "+25% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2,500",
    discription: "+200% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+15,000",
    discription: "+25% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+600",
    discription: "+300 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] =[
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    saleAmount: "+$2,500.00"
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    saleAmount: "+$1,800.00"
  },
  {
    name: "William Smith",
    email: "william.smith@example.com",
    saleAmount: "+$450.00"
  },
  {
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    saleAmount: "+$300.00"
  },
  {
    name: "James Wilson",
    email: "james.wilson@example.com",
    saleAmount: "+$150.00"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
