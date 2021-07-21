import { VictoryHand } from "akar-icons";

export default function PayFooter() {
  return (
    <div className="items-start mx-auto w-full max-w-xl mt-20 mb-6 space-y-4">
      <VictoryHand className="text-black dark:text-white mx-auto" size={22} />
      <p className="text-black dark:text-white font-sourcecodepro text-base uppercase text-center">
        All information are alias and spam protected
      </p>
    </div>
  );
}
