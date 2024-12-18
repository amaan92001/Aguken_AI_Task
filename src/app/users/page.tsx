/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Method"
  }
];

const data: Payment[] = [
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    lastOrder: "2024-12-10",
    method: "PayPal"
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    lastOrder: "2024-11-20",
    method: "Credit Card"
  },
  {
    name: "William Smith",
    email: "william.smith@example.com",
    lastOrder: "2024-10-15",
    method: "Stripe"
  },
  {
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    lastOrder: "2024-09-05",
    method: "Venmo"
  },
  {
    name: "James Wilson",
    email: "james.wilson@example.com",
    lastOrder: "2024-08-12",
    method: "Bank Transfer"
  },
  {
    name: "Sophia Garcia",
    email: "sophia.garcia@example.com",
    lastOrder: "2024-07-18",
    method: "Apple Pay"
  },
  {
    name: "Liam Martinez",
    email: "liam.martinez@example.com",
    lastOrder: "2024-06-22",
    method: "Google Pay"
  },
  {
    name: "Ava Rodriguez",
    email: "ava.rodriguez@example.com",
    lastOrder: "2024-05-30",
    method: "Cryptocurrency"
  },
  {
    name: "Noah Hernandez",
    email: "noah.hernandez@example.com",
    lastOrder: "2024-04-05",
    method: "Alipay"
  },
  {
    name: "Isabella Lopez",
    email: "isabella.lopez@example.com",
    lastOrder: "2024-03-18",
    method: "WeChat Pay"
  },
  {
    name: "Elijah Taylor",
    email: "elijah.taylor@example.com",
    lastOrder: "2024-02-25",
    method: "Square Cash"
  },
  {
    name: "Mia Anderson",
    email: "mia.anderson@example.com",
    lastOrder: "2024-01-08",
    method: "Zelle"
  },
  {
    name: "James White",
    email: "james.white@example.com",
    lastOrder: "2023-12-15",
    method: "Stripe"
  },
  {
    name: "Charlotte Harris",
    email: "charlotte.harris@example.com",
    lastOrder: "2023-11-20",
    method: "PayPal"
  },
  {
    name: "Benjamin Clark",
    email: "benjamin.clark@example.com",
    lastOrder: "2023-10-30",
    method: "Credit Card"
  },
  {
    name: "Lucas White",
    email: "lucas.white@example.com",
    lastOrder: "2024-12-01",
    method: "Bitcoin"
  },
  {
    name: "Mia Brown",
    email: "mia.brown@example.com",
    lastOrder: "2024-11-10",
    method: "Ethereum"
  },
  {
    name: "Ella Green",
    email: "ella.green@example.com",
    lastOrder: "2024-10-05",
    method: "Litecoin"
  },
  {
    name: "Oliver Black",
    email: "oliver.black@example.com",
    lastOrder: "2024-09-15",
    method: "Ripple"
  },
  {
    name: "Sophia Blue",
    email: "sophia.blue@example.com",
    lastOrder: "2024-08-25",
    method: "Dogecoin"
  }
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
