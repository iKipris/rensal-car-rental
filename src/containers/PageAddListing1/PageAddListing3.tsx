import NcInputNumber from "components/NcInputNumber/NcInputNumber";
import React, { FC } from "react";

export interface PageAddListing3Props {}

const PageAddListing3: FC<PageAddListing3Props> = () => {
  return (
      <>
        {/* FORM */}
        <div className="space-y-8">
          <NcInputNumber max={3} label="Βρεφικό Κάθισμα (0-1 ετών)" desc="Για βρέφη 0-12 μηνών (0-13kg, 0-29lb)" defaultValue={0} />
          <NcInputNumber max={3} desc="Για παιδιά 1-3 μηνών (9-18kg, 20-40lb)" label="Παιδικό Κάθισμα (1-3 ετών.)" defaultValue={0} />
          <NcInputNumber max={3} desc="Για παιδιά 4-6 μηνών (18-36kg, 40-79lb)" label="Παιδικό Κάθισμα για μεγάλα παιδιά (4-6 ετών)" defaultValue={0} />
        </div>
      </>
  );
};

export default PageAddListing3;
