import React, { useRef, useEffect, useState } from 'react';
import * as d3 from "d3"
import "../App.css"
import "./responsive.css"

const sample = [
	{ category: 'a', quantity:  0},
	{ category: 'b', quantity: 240 },
	{ category: 'c', quantity: 240 },
	{ category: 'd', quantity: 140 },
	{ category: 'e', quantity: 40 },
	{ category: 'f', quantity: 540 }
];

export default function D3Componemt() {

  useEffect(()=>{
    const margin = {top:50,right:30,bottom:30,left:60};
    const chartwidth = parseInt(d3.select("#d3demo").style('width')) - margin.left - margin.right;
    const chartheight = parseInt(d3.select("#d3demo").style('height')) - margin.top - margin.bottom;

    const svg = d3.select(d3Chart.current)
                  .attr("width", chartwidth + margin.left + margin.right)
                  .attr('height', chartheight + margin.top + margin.bottom)

    const x = d3.scaleBand() 
                .domain(d3.range(sample.length))
                .range([margin.left , chartwidth - margin.right])
                
      svg.append('g')
          .attr('transform' , 'translate(0,'+ chartwidth + ' )')
          .call(d3.axisBottom(x).tickFormat(i=>sample[i].category).tickSizeOuter(0))

          const max = d3.max(sample,function(d){return d.quantity})

          const y = d3.scaleLinear()
                      .domain([0,max])
                      .range([chartheight, margin.top])

                svg.append('g')
                    .attr('transform', 'translate( ' + margin.left + ',0)')
                    .call(d3.axisLeft(y))      

                 svg.append('g')
                    .attr('fill' ,'#65f0eb')   
                    .selectAll('rect')
                    .data(sample)
                    .join('rect')
                      .attr('x',(d,i)=>x(i))
                      .attr('y',d => y.apply(d.quantity))
                      .attr('height' , d=>y(0)-y(d.quantity))
                      .attr('width' , x.bandwidth())



  })

  const d3Chart = useRef();
  return (
    <div id='d3demo'>
        <svg ref={d3Chart} className="sav" ></svg>

    </div>
  )


	

}
