"use client"
import React from 'react';
import DetailPage from '../detailpage/page';

export default function Page({ params }: { params: { id: string } }) {
  console.log("params", params)

  return (
    <div className="text-white">
      <DetailPage id={parseInt(params.id, 10)} /> 
    </div>
  );''
}
