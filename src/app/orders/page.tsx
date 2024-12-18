/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

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
import { cn } from "@/lib/utils";

type Props = {};
type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-400": row.getValue("status") === "Pending",
            "bg-orange-400": row.getValue("status") === "Processing",
            "bg-green-400": row.getValue("status") === "Completed"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
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
    order: "OID001",
    status: "Completed",
    lastOrder: "2024-12-10", 
    method: "PayPal"
  },
  {
    order: "ORD002",
    status: "Pending",
    lastOrder: "2024-11-20", 
    method: "Credit Card"
  },
  {
    order: "ORD003",
    status: "Processing",
    lastOrder: "2024-10-15", 
    method: "Stripe"
  },
  {
    order: "ORD004",
    status: "Completed",
    lastOrder: "2024-09-05", 
    method: "Venmo"
  },
  {
    order: "ORD005",
    status: "Pending",
    lastOrder: "2024-08-12", 
    method: "Bank Transfer"
  },
  {
    order: "ORD006",
    status: "Completed",
    lastOrder: "2024-07-18", 
    method: "Apple Pay"
  },
  {
    order: "ORD007",
    status: "Processing",
    lastOrder: "2024-06-22", 
    method: "Google Pay"
  },
  {
    order: "ORD008",
    status: "Pending",
    lastOrder: "2024-05-30", 
    method: "Cryptocurrency"
  },
  {
    order: "ORD009",
    status: "Completed",
    lastOrder: "2024-04-05", 
    method: "Alipay"
  },
  {
    order: "ORD010",
    status: "Processing",
    lastOrder: "2024-03-18", 
    method: "WeChat Pay"
  },
  {
    order: "ORD011",
    status: "Pending",
    lastOrder: "2024-02-25", 
    method: "Square Cash"
  },
  {
    order: "ORD012",
    status: "Completed",
    lastOrder: "2024-01-08", 
    method: "Zelle"
  },
  {
    order: "ORD013",
    status: "Processing",
    lastOrder: "2023-12-15", 
    method: "Stripe"
  },
  {
    order: "ORD014",
    status: "Pending",
    lastOrder: "2023-11-20", 
    method: "PayPal"
  },
  {
    order: "ORD015",
    status: "Completed",
    lastOrder: "2023-10-30", 
    method: "Credit Card"
  },
  {
    order: "ORD016",
    status: "Pending",
    lastOrder: "2024-12-01", 
    method: "Bitcoin"
  },
  {
    order: "ORD017",
    status: "Completed",
    lastOrder: "2024-11-10", 
    method: "Ethereum"
  },
  {
    order: "ORD018",
    status: "Processing",
    lastOrder: "2024-10-05", 
    method: "Litecoin"
  },
  {
    order: "ORD019",
    status: "Pending",
    lastOrder: "2024-09-15", 
    method: "Ripple"
  },
  {
    order: "ORD020",
    status: "Completed",
    lastOrder: "2024-08-25", 
    method: "Dogecoin"
  }
];

export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
