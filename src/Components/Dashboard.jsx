import React from 'react'

const Dashboard = () => {
  return (
    <div className='bg-[#e5f7ef]'>
      <div className='flex justify-between items-center p-6'>
        <div>
          <h1 className='font-bold sm:text-3xl'>Welcome back, Rajesh! 👋</h1>
          <p className='text-gray-600 mt-3 text-[10px] sm:text-[16px]'>Your EV buddy dashboard - Track your bookings, manage services, and stay charged!</p>
        </div>
        <div><button className='bg-[#009fd4] text-white py-1 px-2 rounded-lg text-[10px] sm:text-[16px]'>Book New Service</button></div>

      </div>
      <div className='grid md:grid-cols-4 gap-2 sm:grid-cols-2 py-2 px-6'>
        <div className='bg-white h-[140px] rounded-lg shadow-md'></div>
        <div className='bg-white h-[140px] rounded-lg shadow-md'></div>
        <div className='bg-white h-[140px] rounded-lg shadow-md'></div>
        <div className='bg-white h-[140px] rounded-lg'></div>
      </div>
      <div className='w-[60%] px-6 py-3 bg-white rounded-lg ml-6'>
        <div className='flex justify-between items-center'>
          <div className='ml-2 font-bold'>Recent Bookings</div>
          <div className='mr-2 border border-black px-2 py-1 bg-white rounded-lg'>View All</div>
        </div>
        <div className='my-2'>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><div className="flex items-center space-x-4"><div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car h-6 w-6 text-blue-600"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg></div><div><div class="font-semibold text-gray-900">Emergency Buddy Rush</div><div class="text-sm text-gray-600">Ather 450X
            Malviya Nagar</div><div class="text-xs text-gray-500">2024-01-15 14:30</div></div></div><div class="text-right"><span data-slot="badge" class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-green-100 text-green-800 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-4 w-4"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span class="ml-1 capitalize">completed</span></span><div class="font-semibold text-gray-900">₹299</div><div class="flex items-center text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-3 w-3 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><span className="text-xs ml-1">5</span></div></div></div>
        </div>
        <div className='my-2'>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><div className="flex items-center space-x-4"><div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car h-6 w-6 text-blue-600"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg></div><div><div class="font-semibold text-gray-900">Emergency Buddy Rush</div><div class="text-sm text-gray-600">Ather 450X
            Malviya Nagar</div><div class="text-xs text-gray-500">2024-01-15 14:30</div></div></div><div class="text-right"><span data-slot="badge" class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-green-100 text-green-800 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-4 w-4"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span class="ml-1 capitalize">completed</span></span><div class="font-semibold text-gray-900">₹299</div><div class="flex items-center text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-3 w-3 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><span className="text-xs ml-1">5</span></div></div></div>
        </div>
        <div className='my-2'>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><div className="flex items-center space-x-4"><div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car h-6 w-6 text-blue-600"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg></div><div><div class="font-semibold text-gray-900">Emergency Buddy Rush</div><div class="text-sm text-gray-600">Ather 450X
            Malviya Nagar</div><div class="text-xs text-gray-500">2024-01-15 14:30</div></div></div><div class="text-right"><span data-slot="badge" class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-green-100 text-green-800 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-4 w-4"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span class="ml-1 capitalize">completed</span></span><div class="font-semibold text-gray-900">₹299</div><div class="flex items-center text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-3 w-3 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><span className="text-xs ml-1">5</span></div></div></div>
        </div>
      </div>

      {/* ################################################ Upcoming Booking ################################################ */}

     <div className="space-y-4 w-[60%] ml-6 mt-4">
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
        
        {/* Left */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24">
              <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
              <line x1="22" x2="22" y1="11" y2="13" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Battery Buddy Care</div>
            <div className="text-sm text-gray-600">Ather 450X Mansarovar</div>
            <div className="text-xs text-gray-500">2024-01-18 11:00</div>
          </div>
        </div>

        {/* Right */}
        <div className="text-right">
          <div className="font-semibold text-gray-900 mb-2">₹399</div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.33 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.1.97.38 1.94.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.87.32 1.84.6 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Buddy
          </button>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Dashboard