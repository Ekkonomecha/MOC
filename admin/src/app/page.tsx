import { Activity, Users, CalendarCheck, CalendarRange } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Platform Overview</h1>
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md shadow transition">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Registered Users"
          value="14,235"
          trend="+12% this month"
          icon={<Users className="w-6 h-6 text-primary" />}
        />
        <DashboardCard
          title="Active Events"
          value="8"
          trend="3 ending this week"
          icon={<CalendarRange className="w-6 h-6 text-primary" />}
        />
        <DashboardCard
          title="Pending Appointments"
          value="142"
          trend="Requires action"
          icon={<CalendarCheck className="w-6 h-6 text-red-600" />}
        />
        <DashboardCard
          title="System Health"
          value="99.9%"
          trend="All systems operational"
          icon={<Activity className="w-6 h-6 text-green-500" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-100 p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Recent AI Assistant Inquiries</h2>
        <div className="space-y-4">
          <InquiryRow user="Ahmed M." query="When does the book fair open?" status="Resolved" />
          <InquiryRow user="Sarah K." query="How to book an appointment with the licensing dept?" status="Escalated" />
          <InquiryRow user="Majed A." query="Cancel my Friday event ticket." status="Resolved" />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>
        <p className="text-sm text-gray-400 mt-1">{trend}</p>
      </div>
      <div className="p-3 bg-gray-50 rounded-full">
        {icon}
      </div>
    </div>
  );
}

function InquiryRow({ user, query, status }: { user: string, query: string, status: string }) {
  const statusColor = status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800';
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-900">{user}</p>
        <p className="text-sm text-gray-500">"{query}"</p>
      </div>
      <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor}`}>
        {status}
      </span>
    </div>
  );
}
