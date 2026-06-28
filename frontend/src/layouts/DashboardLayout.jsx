import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <main className="flex-1">
        <Navbar />
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;