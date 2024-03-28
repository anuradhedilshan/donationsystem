/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

function Span({ text }: { text: string }): React.ReactElement {
  return (
    <span className=" text-secondry-light py-1 px-3 rounded-lg  bg-[#D9D9D9]">
      {text}
    </span>
  );
}

export default function Card() {
  return (
    <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  p-3">
      <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="ui/ux review check"
        />
      </div>
      <div className="p-2">
        <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          H.G Anusha Samanmali
        </h4>
        <span className="text-sm text-secondry-light">12 Years old</span>
        <p className="text-grey font-poppins text-sm">
          Anusha lived in a small, ramshackle hut on the outskirts of
          Weerakatiya, a town in the heart of Sri Lanka's Central Province. His
          family, like many others in the village, barely scraped by on
          subsistence farming...
        </p>
        <div className="flex pt-2 w-full justify-around font-poppins text-xs flex-wrap content-between ">
          <Span text="Grade 5" />
          <Span text="No parent" />
          <Span text="Primary" />
        </div>
      </div>
      <div className="flex items-center justify-between p-6">
        <button className="bg-secondry-light hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded">
          Add To List
        </button>
      </div>
    </div>
  );
}
