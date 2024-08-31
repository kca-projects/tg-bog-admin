import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const BotClient = () => {
  return (
    <>
      <div className="flex justify-between">
        <Heading title="Bots" descritpion="Manage bots" />
        <Link href="/bots/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </Link>
      </div>
    </>
  );
};

export default BotClient;
