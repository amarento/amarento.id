import { getClients } from "./_actions";
import AddClientDialog from "./_components/add-client-dialog";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Page() {
  const data = await getClients();

  return (
    <div className="mx-auto max-w-screen-2xl p-20 font-lagency">
      <div className="grid gap-8">
        <h1 className="text-5xl">Clients Dashboard</h1>

        <div className="grid gap-4">
          <AddClientDialog />
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
