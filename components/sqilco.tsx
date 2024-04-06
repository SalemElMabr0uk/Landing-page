import Image from "next/image";

const Sqiqlco = () => {
  return (
    <div className="bg-navy p-4 rounded-lg">
      <h1 className="text-pink text-3xl font-bold mb-4">At Sqiqlco, You...</h1>
      <div className="flex items-start">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-pink rounded-full p-2 mb-2">
              <Image src="/stack-of-coins-icon.png" alt="Coins Icon" width={30} height={30} />
            </div>
            <p className="text-white">Don't pay for redundant courses</p>
          </div>
          {/* Repeat the above block for each icon and text */}
        </div>
        <div className="border-l-2 border-dotted border-pink mx-4 h-full"></div>
        <div className="flex flex-col justify-between">
          <p>Explanation of the first benefit...</p>
          {/* Repeat for each benefit */}
        </div>
      </div>
    </div>
  );
}

export default Sqiqlco;
