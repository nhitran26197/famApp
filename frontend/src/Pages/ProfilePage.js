import "../Styles/Profile.css";
import Lfa from "../Components/fizz";

const items = [
  {
    id: 1,
    date: "Borthday",
    description: "Happy Born Day!",
  },
  {
    id: 2,
    date: "Step 2",
    description: "This is the second step",
  },
  {
    id: 3,
    date: "Step 3",
    description: "This is the third step",
  },
];

function ProfilePage() {
  return (
    <div>
      <Lfa items={items} />
    </div>
  );
}

export default ProfilePage;
