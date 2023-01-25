import { RevenueIndex } from "./RevenueIndex";
import { DepartmentOrganizationEarnings } from "./DepartmentOrganizationEarnings";

export function Home() {
  return (
    <div>
      <h1>Miami Revenue API</h1>
      <RevenueIndex />
      <DepartmentOrganizationEarnings />
    </div>
  );
}
