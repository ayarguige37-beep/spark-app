import Header from "./components/Header";
import ChallengeCard from "./components/ChallengeCard";
import Streak from "./components/Streak";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-100">
      <Header />
      <ChallengeCard />
      <Streak completedDays={3} />
    </div>
  );
}