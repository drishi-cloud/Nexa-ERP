function Navbar() {
  const user = JSON.parse(localStorage.getItem("nexa_user")) || {};

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Keyboard-first ERP Platform
        </h2>
        <p className="text-sm text-slate-500">
          Manage billing, inventory and accounting from one place
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-800">
            {user.full_name || "User"}
          </p>
          <p className="text-xs text-slate-500">{user.email || ""}</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
          {(user.full_name || "U").charAt(0)}
        </div>
      </div>
    </header>
  );
}

export default Navbar;