type HashtagItemProps = {
  company: string;
  handleSelectCompany: (company: string) => void;
};

const HashtagItem = ({ company, handleSelectCompany }: HashtagItemProps) => {
  return (
    <li key={company}>
      <button onClick={() => handleSelectCompany(company)}>#{company}</button>
    </li>
  );
};

export default HashtagItem;
