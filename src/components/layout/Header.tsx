import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";
import { useFeedbackItemsStore } from "../store/feedbackItemsStore";

const Header = () => {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddToList={addItemToList} />
    </header>
  );
};

export default Header;
