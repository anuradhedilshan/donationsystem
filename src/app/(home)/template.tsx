import Avatar from '@/components/Avatar';
import NavBar from '@/components/NavBar/';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="Template h-full">
      <header className="flex justify-between mx-2 px-3 py-2">
        <div className="md:mr-16 hidden md:block ">logo</div>
        <div className="w-full mr-6">
          <NavBar />
        </div>
        <div>
          <Avatar
            alt="dilshan"
            imgSrc="https://randomuser.me/api/portraits/women/81.jpg"
          />
        </div>
      </header>

      <main>
      {children}
      </main>
    </div>
  );
}
