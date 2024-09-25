import React from 'react'
import BuyerProfilePieChart from './BuyerProfilePieChart'

const dataSet1 = [
    { name: 'Pass', value: 1340 },
    { name: 'Fail', value: 260 },
    
]

const dataSet2 = [
    { name: 'Pass', value: 1200 },
    { name: 'Fail', value: 300 },
    
]

const dataSet3 = [
    { name: 'Pass', value: 850 },
    { name: 'Fail', value: 150 },
]

export default function DashboardStatsGrid() {
    return (
        <>
            <div className="flex gap-4">
                <BoxWrapper>
                    <div className="pl-4">
                       
                        <BuyerProfilePieChart dataSets={[dataSet1]} />
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="pl-4">
                        
                        <BuyerProfilePieChart dataSets={[dataSet2]} />
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="pl-4">
                        
                        <BuyerProfilePieChart dataSets={[dataSet3]} />
                    </div>
                </BoxWrapper>
            </div>
        </>
    )
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center h-30 w-5">
        {children}
    </div>
}
