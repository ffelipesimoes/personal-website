import React, { PureComponent } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts'

const data = [
  {
    subject: 'Hardhat',
    A: 74,
    // B: 110,
    fullMark: 100
  },
  {
    subject: 'Truffle',
    A: 60,
    // B: 130,
    fullMark: 100
  },
  {
    subject: 'Polygon',
    A: 80,
    // B: 130,
    fullMark: 100
  },
  // {
  //   subject: 'BSC',
  //   A: 84,
  //   // B: 130,
  //   fullMark: 100
  // },
  {
    subject: 'Ethereum',
    A: 87,
    // B: 130,
    fullMark: 100
  },
  {
    subject: 'Ethers.js',
    A: 75,
    // B: 100,
    fullMark: 100
  },
  {
    subject: 'Web3.js',
    A: 70,
    // B: 90,
    fullMark: 100
  },
  {
    subject: 'IPFS',
    A: 69,
    // B: 85,
    fullMark: 100
  }
]

export default class RadarChartRecharts extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/'

  render() {
    return (
      
      <RadarChart
        cx={140}
        cy={130}
        outerRadius={80}
        width={400}
        height={220}
        data={data}
      >
        <PolarGrid gridType="circle"  />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={55} domain={[0, 100]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#14253D"
          fill="#b1eaff"
          fillOpacity={0.6}
        />
        {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
        {/* <Legend /> */}
      </RadarChart>
    )
  }
}
