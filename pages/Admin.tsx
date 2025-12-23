import React from 'react';
import { Calendar, CheckCircle, Clock, XCircle, Download, Search, Bell } from 'lucide-react';

const Admin: React.FC = () => {
  const bookings = [
    { id: '#BK001', name: 'Acme Corp', type: 'Retreat', date: 'Oct 12-14', status: 'Confirmed', amount: '5,500,000 RWF' },
    { id: '#BK002', name: 'Green Hills School', type: 'Youth Camp', date: 'Oct 18-20', status: 'Pending', amount: '1,950,000 RWF' },
    { id: '#BK003', name: 'John Doe', type: 'Personal', date: 'Nov 01-02', status: 'Cancelled', amount: '200,000 RWF' },
    { id: '#BK004', name: 'NGO Alliance', type: 'Conference', date: 'Nov 05-06', status: 'Confirmed', amount: '3,600,000 RWF' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Confirmed': return 'bg-brand-green/10 text-brand-green border border-brand-green/20';
      case 'Pending': return 'bg-brand-gold/10 text-brand-earth border border-brand-gold/20';
      case 'Cancelled': return 'bg-red-50 text-red-800 border border-red-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-brand-sand/50">
      {/* Sidebar / Topbar Hybrid for simplicity */}
      <div className="bg-brand-green text-white px-8 py-6 shadow-md">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-8">
               <h1 className="font-serif text-2xl tracking-wider">INTORE <span className="text-brand-gold text-xs align-top">Concierge</span></h1>
               <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-widest text-white/70">
                  <a href="#" className="text-white border-b border-brand-gold">Bookings</a>
                  <a href="#" className="hover:text-white transition-colors">Calendar</a>
                  <a href="#" className="hover:text-white transition-colors">Guests</a>
                  <a href="#" className="hover:text-white transition-colors">Invoices</a>
               </nav>
            </div>
            <div className="flex items-center space-x-4">
               <Bell size={20} className="text-brand-gold" />
               <div className="w-8 h-8 bg-brand-earth rounded-full flex items-center justify-center font-serif">A</div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <header className="flex justify-between items-end mb-12">
          <div>
            <p className="text-brand-earth text-xs uppercase tracking-widest mb-1">Overview</p>
            <h1 className="text-3xl font-serif text-brand-green">Dashboard</h1>
          </div>
          <button className="bg-white border border-brand-green/20 text-brand-green px-6 py-3 text-xs uppercase tracking-widest hover:bg-brand-green hover:text-white transition-colors flex items-center">
            <Download size={14} className="mr-2" /> Export Report
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'New Requests', val: '24', icon: <Clock className="text-brand-gold" /> },
            { label: 'Confirmed Stays', val: '12', icon: <CheckCircle className="text-brand-green" /> },
            { label: 'Projected Revenue', val: '11.2M', icon: <span className="font-serif text-brand-clay font-bold">RWF</span> },
            { label: 'Occupancy Rate', val: '65%', icon: <Calendar className="text-brand-earth" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 border border-brand-green/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-brand-sand rounded-full">{stat.icon}</div>
              </div>
              <h3 className="text-4xl font-serif text-brand-green mb-2">{stat.val}</h3>
              <p className="text-xs uppercase tracking-widest text-brand-dark/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white border border-brand-green/5 shadow-sm">
          <div className="p-6 border-b border-brand-green/10 flex justify-between items-center bg-brand-sand/30">
            <h2 className="font-serif text-xl text-brand-green">Recent Inquiries</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-dark/30" size={16} />
              <input type="text" placeholder="Search guests..." className="pl-10 pr-4 py-2 border border-brand-green/20 bg-white text-sm focus:outline-none focus:border-brand-gold w-64 placeholder:text-brand-dark/30" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-brand-green/5 text-brand-dark/50 text-[10px] uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4 font-normal">Booking ID</th>
                  <th className="px-6 py-4 font-normal">Guest / Org</th>
                  <th className="px-6 py-4 font-normal">Type</th>
                  <th className="px-6 py-4 font-normal">Dates</th>
                  <th className="px-6 py-4 font-normal">Est. Amount</th>
                  <th className="px-6 py-4 font-normal">Status</th>
                  <th className="px-6 py-4 font-normal">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-green/5">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-brand-sand/50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-brand-dark/50">{booking.id}</td>
                    <td className="px-6 py-4 font-serif text-brand-green text-lg">{booking.name}</td>
                    <td className="px-6 py-4 text-brand-dark/70 text-sm">{booking.type}</td>
                    <td className="px-6 py-4 text-brand-dark/70 text-sm">{booking.date}</td>
                    <td className="px-6 py-4 text-brand-green font-medium font-serif">{booking.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-brand-gold hover:text-brand-earth text-xs uppercase tracking-widest font-bold">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;