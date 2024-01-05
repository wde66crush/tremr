import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
      <p>Map area</p>
      </div>
      <div className="flex items-center justify-around mt-20 border-slate-700">
        <div>My Tremrs</div>
        <div>
          <h3>Tracked Tremrs</h3>
          <div className="bg-blue-300 m-6 h-20">
            <p>tremr</p>
          </div>
        </div>
        <div>Project</div>
      </div>
    </div>
  );
}
