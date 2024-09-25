import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import DivSlider from '../components/DivSlider'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				{/* <TransactionChart /> */}
				<Cards />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				{/* <RecentOrders /> */}
				{/* <Carousel /> */}
				{/* <DivSlider /> */}
				{/* <PopularProducts /> */}
			</div>
		</div>
	)
}
