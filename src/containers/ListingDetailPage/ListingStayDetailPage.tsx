import React, { FC } from "react";
export interface ListingStayDetailPageProps {
  className?: string;
}

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({
  className = "",
}) => {

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h1 className="text-3xl font-bold">Πολιτική Ασφάλισης</h1>
        <div>
          <span className="block text-neutral-500 dark:text-neutral-400">
            Η ενοικίασή σας προστατεύεται με το Premium πακέτο ασφάλισης μας! Σε περίπτωση βλάβης ή κλοπής του αυτοκινήτου, δεν χρειάζεται να πληρώσετε οποιαδήποτε επιπλέον ασφάλιστρα εφόσον η χρήση του αυτοκινήτου γίνεται σύμφωνα με τους όρους και τις προϋποθέσεις της εταιρίας μας. Κατά την παραλαβή του αυτοκινήτου σας, δεν θα σας ζητηθεί να πληρώσετε επιπλέον χρήματα για επιπρόσθετες ασφάλειες.
          </span>
        </div>

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">CDW - Απαλλαγή από ζημιές ατυχήματος</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Ο ενοικιαστής είναι ασφαλισμένος για το ενοικιαζόμενο όχημα απο ζημιές οδικού ατυχήματος χωρίς υποχρέωση καταβολής επασφάλιστρου.
          </span>
        </div>

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">FDW & WUG - Πρόσθετη απαλλαγή από ζημιές ατυχήματος</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Ο ενοικιαστής είναι ασφαλισμένος για ζημιές που προκλήθηκαν στο κάτω μέρος του οχήματος, στα τζάμια, τα ελαστικά και τον κινητήρα χωρίς υποχρέωση καταβολής επασφάλιστρου. Μπορεί επίσης να αναφέρεται ως Super CDW (SCDW) ή FCDW ή Ασφάλιση τροχών, κάτω πλευράς και τζαμιών (WUG).
          </span>
        </div>

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">TP - Ασφάλεια Κλοπής</h4>
            <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
Ο ενοικιαστής είναι ασφαλισμένος σε περίπτωση κλοπής του οχήματος, εκτός εάν η κλοπή συμβεί λόγω αμέλειας. Τυχόν κλεμμένα αντικείμενα στο εσωτερικό του αυτοκινήτου (π.χ. κάμερες, τσάντες ταξιδιού ή κινητά τηλέφωνα) δεν καλύπτονται από καμία ασφάλιση.          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
        {/* HEADING */}
        <h1 className="text-3xl font-bold">Όροι και Προϋποθέσεις</h1>
        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Κράτηση συγκεκριμένου μοντέλου σε μια μια κατηγορία</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
Οι κρατήσεις υπόκεινται σε μια συγκεκριμένη ομάδα αυτοκινήτων, η οποία συνήθως περιλαμβάνει πολλά διαφορετικά μοντέλα αυτοκινήτων με παρόμοια χαρακτηριστικά. Μπορείτε να ζητήσετε ένα συγκεκριμένο μοντέλο μετά την επιβεβαίωση της κράτησής σας, εμείς θα προσθέσουμε την προτίμηση του μοντέλου σας στην κράτησή σας και θα παραδώσουμε το ζητούμενο μοντέλο ΜΟΝΟ εάν είναι διαθέσιμο την ημέρα της άφιξής σας. Λάβετε υπόψη ότι μπορεί να σας δώσουμε οποιοδήποτε από τα διαφημισμένα οχήματα μίας κατηγορίας. Σε περίπτωση που έχετε επιβεβαιωμένη κράτηση για μια συγκεκριμένη κατηγορία και δεν υπάρχει διαθέσιμο αυτοκίνητο από αυτήν, διατηρούμε το δικαίωμα να σας παραδώσουμε ένα όχημα μεγαλύτερης κατηγορίας χωρίς επιπλέον χρέωση.
          </span>
        </div>
        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Αντικατάσταση αυτοκινήτου</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
Σε περίπτωση ατυχήματος / βλάβης που έχει ως αποτέλεσμα την ακινητοποίηση του οχήματος, το αυτοκίνητό σας θα αντικατασταθεί με άλλο εντός 24 ωρών από τη στιγμή που αναφέρθηκε το ατύχημα / βλάβη. Η εταιρεία μας έχει το δικαίωμα να διερευνήσει τις αιτίες του ατυχήματος / βλάβης και να αρνηθεί την αντικατάσταση του αυτοκινήτου εάν η χρήση του αυτοκινήτου ήταν αντίθετη με τους όρους και τις προϋποθέσεις του συμβολαίου
          </span>
        </div>
        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Ηλικία</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
              Το ελάχιστο όριο ηλικίας είναι:
          </span>
          <div className="prose sm:prose">
            <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
              <li>
                21 ετών για τις κατηγορίες αυτοκινήτων Α και Β
              </li>
              <li>
                21 ετών για τις κατηγορίες αυτοκινήτων Α και Β
              </li>
              <li>
                25 ετών για όλες τις άλλες κατηγορίες
              </li>
              <li>
                Λάβετε υπόψη ότι δεν ελέγχουμε την ηλικία του οδηγού όταν λαμβάνουμε μία κράτηση. Εάν δεν πληροίτε τις προϋποθέσεις ηλικίας, δεν θα μπορείτε να παραλάβετε το αυτοκίνητο και θα σας ζητηθεί να πληρώσετε το πλήρες ποσό της χρέωσης της ενοικίασης
              </li>
              <li>Δεν υπάρχει καμία χρέωση για νέους ή ηλικιωμένους οδηγούς.</li>
              <li>Η μέγιστη ηλικία ενοικίασης είναι τα 79 χρόνια.</li>
            </ul>
          </div>
        </div>
        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Οδική βοήθεια</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
Η Οδική Βοήθεια είναι δωρεάν και διατίθεται 24/7. Ο συνεργάτης μας για οδική βοήθεια είναι η Interamerican Assistance. Τηλέφωνο: 1158 από την Ελλάδα και 210 9461333 για κλήση από διεθνή κινητά τηλέφωνα.
Συνιστάται να επικοινωνήσετε απευθείας με το γραφείο μας σε περίπτωση απαιτούμενης οδικής βοήθειας. Κατά τις ώρες εκτός γραφείου, όλες οι απευθείας κλήσεις προς το γραφείο μας προωθούνται στη γραμμή κινητής τηλεφωνίας έκτακτης ανάγκης που έχουμε.          </span>
        </div>
        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Επέκταση ενοικίασης</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
Εάν έχετε ήδη παραλάβει το όχημά σας και θέλετε να το κρατήσετε περισσότερο, πρέπει να επικοινωνήσετε με την εταιρεία μας και να ελέγξετε αν το αυτοκίνητο είναι διαθέσιμο. Έχουμε το δικαίωμα να αρνηθούμε την παράταση της ενοικίασης εάν το αυτοκίνητο έχει ήδη κρατηθεί. Εάν είναι δυνατή η επέκταση, υπάρχει μια περίοδος χάριτος μιας (1) ώρας (δηλαδή η καθυστέρηση μίας ώρας στην επιστροφή δεν χρεώνεται) υπό την προϋπόθεση ότι η εταιρεία μας έχει ειδοποιηθεί και έχει δώσει την απαραίτητη άδεια. Οι επόμενες 3 ώρες χρεώνονται με 10 € ανά ώρα. Για καθυστέρηση άνω των 3 ωρών, χρεώνεστε το κόστος μίας ημέρας. Λάβετε υπόψη ότι δεν επιτρέπεται στον πελάτη να φέρει το αυτοκίνητο αργότερα από τον συμφωνημένο χρόνο επιστροφής χωρίς να έχει λάβει άδεια (έχοντας παρατείνει την ενοικίαση) από την εταιρεία μας, καθώς δεν υπάρχει ασφαλιστική κάλυψη μετά την ώρα επιστροφής του αυτοκινήτου.          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-ListingStayDetailPage  ${className}`}
      data-nc-id="ListingStayDetailPage"
    >
      {/* SINGLE HEADER */}
      <>
      </>

      {/* MAIn */}
      <main className="container mt-20 mb-20 flex">
        {/* CONTENT */}
        <div className="w-full space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection8()}
        </div>
      </main>
    </div>
  );
};

export default ListingStayDetailPage;
