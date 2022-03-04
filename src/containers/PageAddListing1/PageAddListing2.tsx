import React, { FC } from "react";
import Input from "shared/Input/Input";
import FormItem from "./FormItem";
import Textarea from "../../shared/Textarea/Textarea";

export interface PageAddListing2Props {}

const PageAddListing2: FC<PageAddListing2Props> = () => {
  return (
      <>
        {/* FORM */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
            <FormItem label="'Ονομα">
              <Input />
            </FormItem>
            <FormItem label="Επίθετο">
              <Input />
            </FormItem>
          </div>
          <FormItem label="Αριθμός Τηλέφώνου">
            <Input />
          </FormItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
            <FormItem label="Email">
              <Input />
            </FormItem>
            <FormItem label="Επιβεβαίωση Email">
              <Input />
            </FormItem>
          </div>
            <FormItem label="Αριθμός Πτήσης">
            <span className="block mb-2 text-sm text-neutral-500 dark:text-neutral-400">
              For airport as pick up location
            </span>
              <Input />
            </FormItem>
          <FormItem label="Πρόσθετες Πληροφορίες">
            <Textarea placeholder="..." rows={5} />
          </FormItem>
        </div>
      </>
  );
};

export default PageAddListing2;
