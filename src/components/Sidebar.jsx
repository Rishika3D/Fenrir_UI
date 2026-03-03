import React from 'react';
import {
    LayoutGrid,
    ListTodo,
    Activity,
    Calendar,
    Bell,
    Settings,
    Info,
    LogOut,
    X
} from 'lucide-react';

const mainOptions = [
    { id: 'dashboard', title: 'Dashboard', icon: LayoutGrid },
    { id: 'projects', title: 'Projects', icon: ListTodo },
    { id: 'scans', title: 'Scans', icon: Activity },
    { id: 'schedule', title: 'Schedule', icon: Calendar },
];

const bottomOptions = [
    { id: 'notifications', title: 'Notifications', icon: Bell, badge: true },
    { id: 'settings', title: 'Settings', icon: Settings },
    { id: 'support', title: 'Support', icon: Info },
];

const navigablePages = new Set(['dashboard', 'scans']);

const Sidebar = ({
    activePage = 'dashboard',
    navigate,
    darkMode = false,
    userEmail = 'admin@edu.com',
    mobileOpen = false,
    setMobileOpen,
}) => {
    const bg = darkMode ? 'bg-[#111111] border-[#2a2a2a]' : 'bg-white border-gray-200';
    const divider = darkMode ? 'border-[#2a2a2a]' : 'border-gray-200';

    const getItemClass = (id) => {
        const isActive = activePage === id;
        if (isActive) {
            return darkMode
                ? 'bg-teal-500/10 text-teal-400 font-medium'
                : 'bg-teal-50 text-teal-600 font-medium';
        }
        return darkMode
            ? 'text-gray-400 hover:bg-white/5 hover:text-white font-medium'
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium';
    };

    const getIconClass = (id) => {
        const isActive = activePage === id;
        if (isActive) return darkMode ? 'text-teal-400' : 'text-teal-600';
        return darkMode ? 'text-gray-500' : 'text-gray-400';
    };

    const handleClick = (id) => {
        if (navigablePages.has(id) && navigate) navigate(id);
        if (setMobileOpen) setMobileOpen(false);
    };

    const NavItem = ({ item }) => {
        const Icon = item.icon;
        return (
            <button
                onClick={() => handleClick(item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 w-full rounded-full transition-colors cursor-pointer ${getItemClass(item.id)}`}
            >
                <div className="relative shrink-0">
                    <Icon size={20} className={getIconClass(item.id)} />
                    {item.badge && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-500 rounded-full border border-white" />
                    )}
                </div>
                <span className="text-sm">{item.title}</span>
            </button>
        );
    };

    return (
        <>
            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setMobileOpen?.(false)}
                />
            )}

            <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0 w-[220px] h-full flex flex-col border-r shrink-0 ${bg} ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                {/* Logo */}
                <div className="px-6 py-[22px] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="#14b8a6" strokeWidth="4" />
                            <circle cx="12" cy="12" r="4" fill="#14b8a6" />
                        </svg>
                        <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-teal-500'}`}>aps</span>
                    </div>
                    {/* Mobile close button */}
                    <button
                        className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
                        onClick={() => setMobileOpen?.(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Main nav */}
                <div className="flex flex-col gap-0.5 px-3 mt-1">
                    {mainOptions.map((item) => <NavItem key={item.id} item={item} />)}
                </div>

                {/* Secondary nav */}
                <div className="flex flex-col gap-0.5 px-3 mt-8">
                    {bottomOptions.map((item) => <NavItem key={item.id} item={item} />)}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* User + logout */}
                <div className={`border-t ${divider} px-3 py-3 mx-2 mb-2`}>
                    <div className="flex items-center gap-3 px-2 py-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                            {userEmail.charAt(0).toUpperCase()}
                        </div>
                        <span className={`text-sm truncate ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{userEmail}</span>
                    </div>
                    {navigate && (
                        <button
                            onClick={() => navigate('login')}
                            className={`flex items-center gap-3 px-4 py-2.5 w-full rounded-full transition-colors cursor-pointer mt-0.5 ${darkMode ? 'text-gray-400 hover:bg-white/5 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                } font-medium text-sm`}
                        >
                            <LogOut size={18} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                            Log out
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
