import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatsGrid from './components/StatsGrid';
import InsightsSection from './components/InsightsSection';
import OrdersTable from './components/OrdersTable';
import { ChatProvider } from './context/ChatContext';

export default function Dashboard() {
  return (
    <ChatProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-16  bg-white">
          <TopBar />
          <div className="space-y-8 mx-8 my-4 py-8 px-6 border rounded-3xl bg-white">
            <div className='flex justify-between items-center'>
              <h1 className='text-3xl '>At a glance</h1>
                 <select className="px-4 py-2 bg-white rounded-lg text-sm text-gray-600 border border-gray-200">
            <option value="7">7 days</option>
            <option value="14">14 days</option>
            <option value="30">30 days</option>
            <option value="90">90 days</option>
          </select>
            </div>
            <StatsGrid />
            <InsightsSection />
            <OrdersTable />
          </div>
        </main>
      </div>
    </ChatProvider>
  );
}
