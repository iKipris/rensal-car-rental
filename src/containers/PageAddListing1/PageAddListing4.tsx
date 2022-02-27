import React, { FC } from "react";
import Checkbox from "shared/Checkbox/Checkbox";
import CommonLayout from "./CommonLayout";
import NcInputNumber from "../../components/NcInputNumber/NcInputNumber";

export interface PageAddListing4Props {}

const PageAddListing4: FC<PageAddListing4Props> = () => {
  return (
      <>
        {/* FORM */}
        <div className="space-y-8">
          {/* ITEM */}
          <div>
            <label className="text-2xl font-semibold" htmlFor="">
              Επιλογή Ασφάλειας
            </label>
            <div className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
              <Checkbox subLabel="8,00 € / day"  label="Μεικτή Ασφάλεια με Απαλλαγή (CDW)" name="Wifi"  />
              <Checkbox subLabel="10,00 € / day"  label="Ασφάλεια Μειωμένης Απαλλαγής Ευθύνης (SCDW)" name="Wifi"  />
              <Checkbox subLabel="11,00 € / day"  label="Ασφάλεια Πλήρους Απαλλαγής Ευθύνης (FDW)" name="Wifi"  />
              <Checkbox subLabel="13,00 € / day"  label="Κρύσταλλα, Τροχοί και κάτω πλευρά του οχήματος (WUG)" name="Wifi"  />
              <Checkbox subLabel="15,00 € / day"  label="Ασφάλεια Κλοπής με ποσό απαλλαγής (THW)" name="Wifi"  />
              <Checkbox subLabel="20,00 € / day"  label="Ασφάλεια Κλοπής με μηδενική απαλλαγή (TP)" name="Wifi"  />

            </div>
          </div>

          {/* ITEM */}
          <div>
            <label className="text-2xl font-semibold" htmlFor="">
              Πρόσθετα
            </label>
            <div className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
              <Checkbox label="WiFi Hotspot" subLabel="15,00 € / day" name="Wardrobe"  />
              <Checkbox label="GPS Navigator" subLabel="7,00 € / day" name="Cloth hook" />
              <Checkbox
                  subLabel="10,00 €"
                label="Πακέτο Ελεύθερων χιλιομέτρων για 1-2 μέρες"
                name="Extra cushion"
              />
            </div>
          </div>
          <div className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
          <div>
            <NcInputNumber max={5} label="Επιπλέον Οδηγός" desc="7,00 € / day" defaultValue={0} />
          </div>
        </div>
      </>
  );
};

export default PageAddListing4;
