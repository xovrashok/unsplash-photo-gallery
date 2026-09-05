import { CiSearch } from "react-icons/ci";
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
      actions.resetForm();
      return;
    }

    if (onSubmit) {
      onSubmit(values, actions);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 bg-blue-900 w-full flex justify-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex items-center gap-2 m-4 rounded-md pl-4 bg-[#eaeaea]">
          <button type="submit" aria-label="Search" className="cursor-pointer">
            <CiSearch color="black" size={20} />
          </button>
          <Field
            type="text"
            name="searchValue"
            className="px-3 py-2 bg-transparent focus:outline-none text-black"
            placeholder="Search images..."
          />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
