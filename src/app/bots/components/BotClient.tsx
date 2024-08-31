"use client";

import { DataTable } from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import { columns } from "./Columns";
import { Bot } from "@/types";
import { useRouter } from "next/navigation";

interface Props {
  data: Bot[] | null;
}
const BotClient = ({ data }: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between">
        <Heading title="Bots" descritpion="Manage bots" />
        <Button onClick={() => router.push("/dashboard/categories/new")}>
          <Plus className="w-4 h-4 mr-2" />
          Add
        </Button>
      </div>
      <Separator className="my-2" />

    </>
  );
};

export default BotClient;
