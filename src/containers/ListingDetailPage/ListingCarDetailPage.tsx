import React, { FC, useState } from "react";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import useWindowSize from "hooks/useWindowResize";
import moment from "moment";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcImage from "shared/NcImage/NcImage";
import ModalPhotos from "./ModalPhotos";
import RentalCarDatesRangeInput from "components/HeroSearchForm/RentalCarDatesRangeInput";
import { TimeRage } from "components/HeroSearchForm/RentalCarSearchForm";
import PageAddListing2 from "../PageAddListing1/PageAddListing2";
import PageAddListing3 from "../PageAddListing1/PageAddListing3";
import PageAddListing4 from "../PageAddListing1/PageAddListing4";

export interface ListingCarDetailPageProps {
  className?: string;
}

const PHOTOS: string[] = [
  "https://images.pexels.com/photos/381292/pexels-photo-381292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2827753/pexels-photo-2827753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/257851/pexels-photo-257851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/189454/pexels-photo-189454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/193995/pexels-photo-193995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const includes_demo = [
  { name: "Free cancellation up to 48 hours before pick-up" },
  { name: "Collision Damage Waiver with $214 deductible" },
  { name: "Theft Protection with $19,999 excess" },
  { name: "Unlimited mileage" },
  {
    name: "Car interiors and exteriors cleaned with disinfectant before pick-up",
  },
  { name: "Masks are required at the pick-up location" },
];

const ListingCarDetailPage: FC<ListingCarDetailPageProps> = ({
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFocusIndex, setOpenFocusIndex] = useState(0);

  // USE STATE
  const [dateRangeValue, setDateRangeValue] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(4, "days"),
  });
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRage>({
    startTime: "10:00 AM",
    endTime: "10:00 AM",
  });


  const windowSize = useWindowSize();

  const handleOpenModal = (index: number) => {
    setIsOpen(true);
    setOpenFocusIndex(index);
  };

  const handleCloseModal = () => setIsOpen(false);

  //
  const renderSectionTienIch = () => {
    return (
      <div className="listingSection__wrap" style={{marginTop: "-1px"}}>
        <div>
          <h1 className="text-3xl font-semibold">
              Nissan Qashqai
          </h1>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Vehicle parameters & utilities{" "}
          </span>
          <div className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
          {/* SHOW MOBILE */}
          <div className="flex sm:hidden items-center text-sm text-neutral-500 dark:text-neutral-400 space-x-2 mt-4 sm:mt-0">
            <span>4 seats</span>
            <span>· </span>
            <span>Auto gearbox</span>
            <span>· </span>
            <span>AC</span>
            <span>· </span>
            <span>4 seats</span>
          </div>
          {/* SHOW DESK */}
          <div className="hidden sm:flex items-center space-x-8">
            {/* --- */}
            <div className="flex items-center space-x-2">
              <i className="las la-user-friends text-xl"></i>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
              4 seats
            </span>
            </div>
            {/* --- */}
            <div className="flex items-center space-x-2">
              <i className="las la-dharmachakra text-xl"></i>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Auto gearbox
            </span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="las la-dharmachakra text-xl"></i>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
              AC
            </span>
            </div>
            {/* --- */}
            <div className="flex items-center space-x-2">
              <i className="las la-suitcase text-xl"></i>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
              2 bags
            </span>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {includes_demo
              .filter((_, i) => i < 12)
              .map((item) => (
                  <div key={item.name} className="flex items-center space-x-3">
                    <i className="las la-check-circle text-2xl"></i>
                    <span>{item.name}</span>
                  </div>
              ))}
        </div>
      </div>
    );
  };

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Things to know</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Οδική βοήθεια</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Η Οδική Βοήθεια είναι δωρεάν και διατίθεται 24/7. Ο συνεργάτης μας για οδική βοήθεια είναι η Interamerican Assistance. Τηλέφωνο: 1158 από την Ελλάδα και 210 9461333 για κλήση από διεθνή κινητά τηλέφωνα.
Συνιστάται να επικοινωνήσετε απευθείας με το γραφείο μας σε περίπτωση απαιτούμενης οδικής βοήθειας. Κατά τις ώρες εκτός γραφείου, όλες οι απευθείας κλήσεις προς το γραφείο μας προωθούνται στη γραμμή κινητής τηλεφωνίας έκτακτης ανάγκης που έχουμε.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Άδεια οδήγησης</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Οι οδηγοί πρέπει να διαθέτουν άδεια σε ισχύ για τουλάχιστον ένα (1) έτος. Γίνονται δεκτές εθνικές άδειες οδήγησης που εκδίδονται σε ΕΕ, Ελλάδα, ΗΠΑ, Ηνωμένο Βασίλειο, Ελβετία, Αυστραλία, Καναδά, Ισραήλ, Ρωσία και Ουκρανία. Απαιτείται διεθνής άδεια οδήγησης για όλες τις άλλες χώρες
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
        <div>
          <h4 className="text-lg font-semibold">Κυκλοφοριακές Παραβάσεις, Πρόστιμα κυκλοφορίας και Διοικητικές Κυρώσεις</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
Οι κλήσεις και οι διοικητικές κυρώσεις που προκύπτουν από οποιαδήποτε παραβίαση της ελληνικής νομοθεσίας περί της κυκλοφορία κατά τη διάρκεια της περιόδου ενοικίασης είναι αποκλειστικά ευθύνη του ενοικιαστή. Εάν κάποια τέτοια διοικητική κύρωση δεν αποκαλυφθεί στην εταιρεία στο τέλος της περιόδου ενοικίασης (συμβόλαιο), η παραβίαση θα χρεωθεί στον ενοικιαστή.
          </span>
        </div>
      </div>
    );
  };

  const renderSection9 = () => {
    return (
        <div className="listingSection__wrap">
          {/* HEADING */}
          <h2 className="text-2xl font-semibold">Προσωπικές Πληροφορίες</h2>
            {/* CONTENT */}
            <div style={{marginTop: "20px", marginBottom: "-15px"}} className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-2"></div>
            <div>
            <PageAddListing2/>
          </div>
        </div>
    );
  };

  const renderSection10 = () => {
    return (
        <div className="listingSection__wrap">
          {/* HEADING */}
          <h2 className="text-2xl font-semibold">Παιδικά Καθίσματα</h2>
            <div style={{marginTop: "20px", marginBottom: "-15px"}} className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-2"></div>
            {/* CONTENT */}
          <div>
            <PageAddListing3/>
          </div>
        </div>
    );
  };

  const renderSection11 = () => {
    return (
        <div className="listingSection__wrap">
          {/* CONTENT */}
          <div>
            <PageAddListing4/>
          </div>
        </div>
    );
  };

  const renderSidebarPrice = () => {
    return (
        <div>
      <div className="listingSection__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            $19
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /day
            </span>
          </span>
        </div>

        {/* FORM */}
        <form className="flex border  border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <RentalCarDatesRangeInput
            defaultDateValue={dateRangeValue}
            defaultTimeValue={timeRangeValue}
            onFocusChange={() => {}}
            numberOfMonths={1}
            fieldClassName="p-5"
            wrapFieldClassName="flex flex-col w-full flex-shrink-0 relative divide-y divide-neutral-200 dark:divide-neutral-700"
            onChange={(data) => {
              setDateRangeValue(data.stateDate);
              setTimeRangeValue(data.stateTimeRage);
            }}
            anchorDirection={windowSize.width > 1400 ? "left" : "right"}
          />
        </form>

        {/* SUM */}
        <div className="flex flex-col space-y-4 ">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>$19 x 3 day</span>
            <span>$57</span>
          </div>

          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$199</span>
          </div>
        </div>

        {/* SUBMIT */}
        <ButtonPrimary>Reserve</ButtonPrimary>
      </div>
        </div>
    );
  };

  // const renderSidebarDetail = () => {
  //   return (
  //     <div className="listingSection__wrap shadow-xl">
  //       <span className="text-2xl font-semibold block">
  //         Pick up and drop off
  //       </span>
  //       <div className="mt-8 flex">
  //         <div className="flex-shrink-0 flex flex-col items-center py-2">
  //           <span className="block w-6 h-6 rounded-full border border-neutral-400"></span>
  //           <span className="block flex-grow border-l border-neutral-400 border-dashed my-1"></span>
  //           <span className="block w-6 h-6 rounded-full border border-neutral-400"></span>
  //         </div>
  //         <div className="ml-4 space-y-14 text-sm">
  //           <div className="flex flex-col space-y-2">
  //             <span className=" text-neutral-500 dark:text-neutral-400">
  //               Monday, August 12 · 10:00
  //             </span>
  //             <span className=" font-semibold">
  //               Saint Petersburg City Center
  //             </span>
  //           </div>
  //           <div className="flex flex-col space-y-2">
  //             <span className=" text-neutral-500 dark:text-neutral-400">
  //               Monday, August 16 · 10:00
  //             </span>
  //             <span className=" font-semibold">
  //               Saint Petersburg City Center
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div
      className={`nc-ListingCarDetailPage  ${className}`}
      data-nc-id="ListingCarDetailPage"
    >
      {/* SINGLE HEADER */}
      <>
        <header className="container 2xl:px-14 rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-4 gap-1 sm:gap-2">
            <div
              className="col-span-2 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(0)}
            >
              <NcImage
                containerClassName="absolute inset-0"
                className="object-cover w-full h-full rounded-md sm:rounded-xl"
                src={PHOTOS[0]}
                prevImageHorizontal
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>

            {/*  */}
            <div
              className="col-span-1 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(1)}
            >
              <NcImage
                containerClassName="absolute inset-0"
                className="object-cover w-full h-full rounded-md sm:rounded-xl"
                src={PHOTOS[1]}
                prevImageHorizontal
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>

            {/*  */}
            {PHOTOS.filter((_, i) => i >= 2 && i < 4).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 2 ? "block" : ""
                }`}
              >
                <NcImage
                  containerClassName="aspect-w-4 aspect-h-3"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ""}
                  prevImageHorizontal
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleOpenModal(index + 2)}
                />
              </div>
            ))}

            <div
              className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
              onClick={() => handleOpenModal(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Show all photos
              </span>
            </div>
          </div>
        </header>
        {/* MODAL PHOTOS */}
        <ModalPhotos
          imgs={PHOTOS}
          isOpen={isOpen}
          onClose={handleCloseModal}
          initFocus={openFocusIndex}
        />
      </>

      {/* MAIn */}
      <main className="container mt-11 flex mb-20">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:pr-10 lg:space-y-10">
          {renderSectionTienIch()}
          {/*{renderSection7()}*/}
          {renderSection9()}
          {renderSection10()}
          {renderSection11()}
          {renderSection8()}
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block flex-grow">
          <div className="lg:sticky lg:top-24">{renderSidebarPrice()}</div>
        </div>
      </main>

      {/* STICKY FOOTER MOBILE */}
      <div className="block lg:hidden fixed bottom-0 inset-x-0 py-4 bg-white text-neutral-900 border-t border-neutral-200 z-20">
        <div className="container flex items-center justify-between">
          <span className="text-2xl font-semibold">
            $311
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /day
            </span>
          </span>

          <ButtonPrimary href="##">Reserve</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ListingCarDetailPage;
