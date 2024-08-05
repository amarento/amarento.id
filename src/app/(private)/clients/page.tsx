import { getClients } from "./_actions";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Page() {
  const data = await getClients();

  return (
    <div className="flex max-w-screen-xl flex-col justify-center gap-8 pb-20 font-lagency">
      <h1 className="text-5xl">Client Dashboard</h1>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
