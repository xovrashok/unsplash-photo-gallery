import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Formik, Form, Field, FormikHelpers } from "formik";
import toast from "react-hot-toast";

interface ValuesType {
  searchValue: string;
}

type Props = {
  initialValues?: ValuesType;
  onSubmit: (values: ValuesType, actions: FormikHelpers<ValuesType>) => void;
};

const SearchBar = ({
  initialValues = { searchValue: "" },
  onSubmit,
}: Props) => {
  const handleSubmit = (
    values: ValuesType,
    actions: FormikHelpers<ValuesType>,
  ) => {
    if (!values.searchValue.trim()) {
      toast.error("Please enter a search term!");
      return;
    }

    if (onSubmit) {
      onSubmit(values, actions);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <Form className="relative flex items-center w-full max-w-md bg-slate-100/80 border border-slate-200 rounded-full px-4 py-2 transition-all duration-200 focus-within:border-slate-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-200/50 hover:border-slate-300 shadow-inner">
              <button
                type="submit"
                aria-label="Search"
                className="text-slate-400 hover:text-slate-700 transition-colors p-1 flex items-center justify-center cursor-pointer"
              >
                <CiSearch size={22} className="stroke-[0.5]" />
              </button>

              <Field
                type="text"
                name="searchValue"
                className="w-full px-3 bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-sm md:text-base font-normal"
                placeholder="Search high-resolution images..."
                autoComplete="off"
              />

              {values.searchValue && (
                <button
                  type="button"
                  aria-label="Clear input"
                  onClick={() => setFieldValue("searchValue", "")}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-200/60"
                >
                  <IoCloseOutline size={20} />
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </header>
  );
};

export default SearchBar;
